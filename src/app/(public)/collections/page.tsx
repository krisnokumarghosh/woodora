import AllCollectionsClient from "@/components/AllCollectionsClient";
import { getAllFurnitures } from "@/lib/api/furnitures";


const PAGE_SIZE = 8;

type Props = {
  searchParams: Promise<{ search?: string; category?: string }>;
};

const AllCollectionsPage = async ({ searchParams }: Props) => {
  const { search = "", category = "all" } = await searchParams;

  const initialData = await getAllFurnitures({
    search,
    category,
    page: 1,
    limit: PAGE_SIZE,
  });

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      {/* Header */}
      <div className="max-w-300 mx-auto px-6 pt-14 pb-8">
        <p className="text-[#A0522D] text-[11px] font-bold tracking-[0.28em] uppercase mb-3">
          The Collection
        </p>
        <h1 className="text-[#1A1A1A] font-black text-[40px] md:text-[52px] leading-[0.95] tracking-tight">
          All Furniture
        </h1>
        <p className="text-[#1A1A1A]/50 text-[14.5px] mt-3 max-w-110">
          Browse our full range of handcrafted pieces, sourced and finished
          with care for every room in your home.
        </p>
      </div>

      <AllCollectionsClient
        initialFurnitures={initialData.data}
        initialHasMore={initialData.hasMore}
        initialSearch={search}
        initialCategory={category}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
};

export default AllCollectionsPage;