import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FurnitureActions from "@/components/FurnitureActions";
import {
  ArrowsRotateLeft,
  ChevronRight,
  Layers,
  Palette,
  ShieldCheck,
  WeightHanging,
} from "@gravity-ui/icons";
import { Ruler, Truck } from "lucide-react";
import { getFurnitureById } from "@/lib/api/furnitures";

type Props = {
  params: Promise<{ id: string }>;
};

const FurnitureDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const furniture = await getFurnitureById(id);

  if (!furniture || !furniture._id) {
    notFound();
  }

  const spec = furniture.specification;

  const specItems = [
    { icon: Layers, label: "Material", value: spec?.material },
    { icon: Palette, label: "Color", value: spec?.color },
    { icon: Ruler, label: "Dimensions", value: spec?.dimensions },
    { icon: WeightHanging, label: "Weight", value: spec?.weight },
  ].filter((s) => s.value);

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <div className="max-w-300 mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[12.5px] text-[#1A1A1A]/45 mb-10">
          <Link href="/collections" className="hover:text-[#1A1A1A] transition-colors">
            All
          </Link>
         
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1A1A1A]/70">{furniture.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="relative aspect-4/5 rounded-lg overflow-hidden bg-[#DCD2C3]">
              <Image
                src={furniture.image}
                alt={furniture.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
              <span className="absolute top-4 left-4 text-[10.5px] font-bold tracking-widest uppercase bg-[#F5F0E6]/90 text-[#1A1A1A] px-3 py-1.5 rounded-full">
                {furniture.category}
              </span>
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-[#A0522D] text-[11px] font-bold tracking-[0.28em] uppercase mb-3">
              {furniture.category}
            </p>
            <h1 className="text-[#1A1A1A] font-black text-[32px] md:text-[40px] leading-[1.02] tracking-tight mb-3">
              {furniture.name}
            </h1>
            <p className="text-[26px] font-bold text-[#A0522D] mb-5">
              ${furniture.price}
            </p>
            <p className="text-[#1A1A1A]/55 text-[15px] leading-relaxed mb-8">
              {furniture.description}
            </p>

            <FurnitureActions furniture={furniture} />

            {/* Specification */}
            {specItems.length > 0 && (
              <div className="mt-10 pt-8 border-t border-[#1A1A1A]/10">
                <h2 className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#1A1A1A]/50 mb-4">
                  Specification
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {specItems.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-white/40 border border-[#1A1A1A]/10 rounded-md p-4"
                    >
                      <Icon
                        className="w-4 h-4 text-[#8A9678] mb-2.5"
                        strokeWidth={1.75}
                      />
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]/40 mb-1">
                        {label}
                      </p>
                      <p className="text-[13.5px] font-semibold text-[#1A1A1A]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full details */}
            {furniture.details && (
              <div className="mt-10 pt-8 border-t border-[#1A1A1A]/10">
                <h2 className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#1A1A1A]/50 mb-4">
                  Product Details
                </h2>
                <p className="text-[14px] text-[#1A1A1A]/60 leading-relaxed">
                  {furniture.details}
                </p>
              </div>
            )}

            {/* Trust badges */}
            <div className="mt-10 pt-8 border-t border-[#1A1A1A]/10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck
                  className="w-5 h-5 text-[#1A1A1A]/40"
                  strokeWidth={1.5}
                />
                <p className="text-[11px] text-[#1A1A1A]/45 leading-snug">
                  Free Shipping
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck
                  className="w-5 h-5 text-[#1A1A1A]/40"
                  strokeWidth={1.5}
                />
                <p className="text-[11px] text-[#1A1A1A]/45 leading-snug">
                  1 Year Warranty
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ArrowsRotateLeft
                  className="w-5 h-5 text-[#1A1A1A]/40"
                  strokeWidth={1.5}
                />
                <p className="text-[11px] text-[#1A1A1A]/45 leading-snug">
                  Easy Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetailsPage;
