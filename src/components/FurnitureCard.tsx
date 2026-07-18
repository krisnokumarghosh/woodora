import { Furniture, FURNITURE_CATEGORIES } from "@/lib/dataInterface";
import { ArrowUpRight } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const FurnitureCard = ({ item }: { item: Furniture }) => {
  const categoryLabel =
    FURNITURE_CATEGORIES.find((c) => c.value === item.category)?.label ??
    item.category;

  return (
    <Link href={`/collections/${item._id}`} className="group block">
      <div className="relative aspect-4/5 rounded-md overflow-hidden mb-3 bg-[#DCD2C3]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-[#F5F0E6]/90 text-[#1A1A1A] px-2.5 py-1 rounded-full">
          {categoryLabel}
        </span>

        <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-colors duration-300" />

        <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#F5F0E6] text-[#1A1A1A] flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>

      <h3 className="text-[14.5px] font-semibold text-[#1A1A1A] leading-snug line-clamp-1">
        {item.name}
      </h3>
      <p className="text-[13px] font-bold text-[#A0522D] mt-1">
        ${item.price}
      </p>
      <p className="text-[12.5px] text-[#1A1A1A]/45 mt-1 line-clamp-2 leading-relaxed">
        {item.description}
      </p>
      {(item.specification?.material || item.specification?.color) && (
        <p className="text-[10.5px] font-semibold text-[#A0522D]/70 mt-1.5 uppercase tracking-wide">
          {[item.specification?.material, item.specification?.color]
            .filter(Boolean)
            .join(" · ")}
        </p>
      )}
    </Link>
  );
};

export default FurnitureCard;