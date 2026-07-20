import Image from "next/image";
import Link from "next/link";
import { getAllFurnitures } from "@/lib/api/furnitures";

// No "tag" field exists in the furniture schema yet, so these are assigned
// by position for now. If you later add a `tag` field to your DB documents,
// swap this out for `furniture.tag` instead.
const POSITION_BADGES = ["Exclusive", "Best Seller", "New"];

const RecommendedProducts = async () => {
  const { data } = await getAllFurnitures({ page: 1, limit: 3 });

  if (!data || data.length === 0) return null;

  return (
    <section className="bg-[#F5F0E6] mb-15  md:mb-30">
      <div>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-[#1A1A1A] tracking-[-0.03em] text-[9vw] sm:text-[6vw] lg:text-[3.2vw]">
          Most Recomended Product
        </h2>
        </div>

        {/* Grid */}
        <div className="border-y-2 border-[#1A1A1A]/10">

        <div className=" max-w-350 mx-auto px-6  grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          {data.map((item, i) => (
            <Link
              key={item._id}
              href={`/collections/${item._id}`}
              className="group"
            >
              <div className="relative aspect-[4/3.4] rounded-md bg-white/50 border border-[#1A1A1A]/6 overflow-hidden">
                <span className="absolute top-4 left-4 z-10 text-[10.5px] font-bold tracking-[0.08em] uppercase bg-[#DCD2C3] text-[#1A1A1A] px-3 py-1.5 rounded-sm">
                  {POSITION_BADGES[i] ?? "Featured"}
                </span>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between mt-4 px-1">
                <div>
                  <h3 className="text-[14.5px] font-semibold text-[#1A1A1A] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[12.5px] text-[#1A1A1A]/45 mt-0.5">
                    {item.category}
                  </p>
                </div>
                <p className="text-[15px] font-bold text-[#A0522D]">
                  ${item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;