"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getAllFurnitures } from "@/lib/api/furnitures";
import FurnitureCard from "./FurnitureCard";
import FurnitureCardSkeleton from "./FurnitureCardSkeleton";
import { Furniture, FURNITURE_CATEGORIES } from "@/lib/dataInterface";
import { Magnifier, Xmark } from "@gravity-ui/icons";

const DEBOUNCE_MS = 400;

type Props = {
  initialFurnitures: Furniture[];
  initialHasMore: boolean;
  initialSearch: string;
  initialCategory: string;
  pageSize: number;
};

const AllCollectionsClient = ({
  initialFurnitures,
  initialHasMore,
  initialSearch,
  initialCategory,
  pageSize,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "all";

  const [searchInput, setSearchInput] = useState(initialSearch);
  const [items, setItems] = useState<Furniture[]>(initialFurnitures);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const requestId = useRef(0);
  const isFirstRun = useRef(true);

  // --- push search/category into the URL (debounced for search) ---
  const updateUrl = useCallback(
    (next: { search?: string; category?: string }) => {
      const params = new URLSearchParams(searchParams.toString());
      const search = next.search ?? urlSearch;
      const category = next.category ?? urlCategory;

      if (search) params.set("search", search);
      else params.delete("search");

      if (category && category !== "all") params.set("category", category);
      else params.delete("category");

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams, urlSearch, urlCategory]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== urlSearch) updateUrl({ search: searchInput });
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const handleCategoryClick = (value: string) => {
    updateUrl({ category: value });
  };

  // --- refetch page 1 whenever the URL's search/category actually changes ---
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const currentRequest = ++requestId.current;
    setIsFiltering(true);

    getAllFurnitures({
      search: urlSearch,
      category: urlCategory,
      page: 1,
      limit: pageSize,
    })
      .then((res) => {
        if (currentRequest !== requestId.current) return; // stale response
        setItems(res.data);
        setHasMore(res.hasMore);
        setPage(1);
      })
      .finally(() => {
        if (currentRequest === requestId.current) setIsFiltering(false);
      });
  }, [urlSearch, urlCategory, pageSize]);

  // --- infinite scroll ---
  const loadMore = useCallback(() => {
    if (isLoadingMore || isFiltering || !hasMore) return;
    const nextPage = page + 1;
    const currentRequest = requestId.current;
    setIsLoadingMore(true);

    getAllFurnitures({
      search: urlSearch,
      category: urlCategory,
      page: nextPage,
      limit: pageSize,
    })
      .then((res) => {
        if (currentRequest !== requestId.current) return; // filters changed mid-flight
        setItems((prev) => [...prev, ...res.data]);
        setHasMore(res.hasMore);
        setPage(nextPage);
      })
      .finally(() => setIsLoadingMore(false));
  }, [isLoadingMore, isFiltering, hasMore, page, urlSearch, urlCategory, pageSize]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      {/* Toolbar */}
      <div className="sticky top-3 md:top-1 lg:top-15 z-10 bg-[#F5F0E6]/95 backdrop-blur-sm border-b border-[#1A1A1A]/10">
        <div className="max-w-300 mx-auto px-6 py-5 flex flex-col lg:flex-row md:items-center gap-4 md:gap-8">
          {/* Search */}
          <div className="relative w-full md:w-70 shrink-0">
            <Magnifier className="w-4 h-4 text-[#1A1A1A]/35 absolute left-0 top-1/2 -translate-y-1/2" />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search furniture..."
              className="w-full bg-transparent border-0 border-b-2 border-[#1A1A1A]/15 focus:border-[#A0522D] outline-none pl-6 pr-6 pb-2 text-[14px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/35 transition-colors"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => setSearchInput("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1A1A1A]/35 hover:text-[#1A1A1A]"
                aria-label="Clear search"
              >
                <Xmark className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex  items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FURNITURE_CATEGORIES.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => handleCategoryClick(c.value)}
                className={`shrink-0 px-4 py-2 rounded-full text-[12.5px] font-semibold tracking-wide transition-colors ${
                  urlCategory === c.value
                    ? "bg-[#1A1A1A] text-[#F5F0E6]"
                    : "bg-transparent text-[#1A1A1A]/55 border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-300 mx-auto px-6 py-10">
        {isFiltering ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {Array.from({ length: pageSize }).map((_, i) => (
              <FurnitureCardSkeleton key={i} />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Magnifier className="w-8 h-8 text-[#1A1A1A]/20 mb-4" />
            <p className="text-[#1A1A1A]/60 text-[15px] font-medium">
              No furniture found
            </p>
            <p className="text-[#1A1A1A]/40 text-[13px] mt-1">
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {items.map((item) => (
                <FurnitureCard key={item._id} item={item} />
              ))}
              {isLoadingMore &&
                Array.from({ length: 4 }).map((_, i) => (
                  <FurnitureCardSkeleton key={`more-${i}`} />
                ))}
            </div>

            <div ref={sentinelRef} className="h-4" />

            {isLoadingMore && (
              <div className="flex items-center justify-center gap-2 text-[#1A1A1A]/40 text-[13px] mt-6">
                Loading more...
              </div>
            )}
            {!hasMore && items.length > 0 && (
              <p className="text-center text-[#1A1A1A]/35 text-[12.5px] mt-10 tracking-wide uppercase">
                You&apos;ve reached the end
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AllCollectionsClient;