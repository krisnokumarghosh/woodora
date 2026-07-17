import Image from "next/image";
import { ArrowDownRight } from "@gravity-ui/icons";

export default function TimelessElegance() {
  return (
    <section className="w-full bg-[#F5F0E6] border-y-2 border-[#1A1A1A]/10 my-25">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — Tall portrait image */}
        <div className="relative min-h-105 lg:min-h-150 p-4 md:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10">
          <div className="relative w-full h-full min-h-100 lg:min-h-140 rounded-sm overflow-hidden">
            <Image
              src="https://assets.lummi.ai/assets/Qma13wRpEMCZ5gV9unFPbWpXXJNKbVzCW8j7MQfx694bEh?auto=format&w=1500"
              alt="Carly Cushnie seated on fringed boucle armchair"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* RIGHT — Heading + text + wide image */}
        <div className="flex flex-col">
          {/* Heading */}
          <div className="px-6 md:px-10 lg:px-12 py-8 lg:py-10 border-b border-[#1A1A1A]/10">
            <h2
              className="font-heading font-extrabold text-[#1A1A1A] leading-[0.95] tracking-[-0.03em]
                           text-[13vw] sm:text-[8vw] lg:text-[5vw] xl:text-[4.2vw]"
            >
              Timeless
              <br />
              Elegance
            </h2>
          </div>

          {/* Description + arrow */}
          <div className="px-6 md:px-10 lg:px-12 py-8 border-b border-[#1A1A1A]/10 flex items-start justify-between gap-6">
            <p className="text-[13.5px] md:text-[14px] leading-relaxed text-[#1A1A1A]/80 max-w-md">
              Fashion Designer and Creative Director Carly Cushnie has entered
              her next chapter. Known for her influence in the fashion world,
              Carly brings her celebrated sense of style to interiors with her
              first-ever line of furniture exclusively for Lulu and Georgia.
              Every piece in the collection has a distinctive found quality with
              unique materials, and textures.
            </p>
            <ArrowDownRight
              width={22}
              height={22}
              className="shrink-0 text-[#1A1A1A] mt-1"
            />
          </div>

          {/* Wide image */}
          <div className="relative grow min-h-65 lg:min-h-0 p-4 md:p-6 lg:p-8">
            <div className="relative w-full h-full min-h-60 lg:min-h-70 rounded-sm overflow-hidden">
              <Image
                src="https://assets.lummi.ai/assets/QmVJyEv9jmnhNntE4KgD92PVZJxFvaj8x9QjSr48SByeqL?auto=format&w=1500"
                alt="Marble side table with books"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
