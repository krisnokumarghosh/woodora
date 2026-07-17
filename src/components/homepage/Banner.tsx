import { ArrowUpRight } from "@gravity-ui/icons";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-[#F5F0E6]">
      {/* ROW 1 — Giant heading + small image slot */}
      <div className="grid grid-cols-1 lg:grid-cols-[78%_22%] border-b border-[#1A1A1A]/10">
        <div className="flex items-center px-6 md:px-8 lg:px-10 py-4 lg:py-6 lg:border-r border-[#1A1A1A]/10">
          <h1
            className="font-heading font-extrabold text-[#1A1A1A] leading-[0.85] tracking-[-0.04em]
                         text-[16vw] sm:text-[13vw] lg:text-[9.5vw] xl:text-[10.5vw] select-none"
          >
            Furniture
          </h1>
        </div>

        {/* Image slot — small floating item */}
        <div className="flex items-center justify-center bg-[#DCD2C3]/40  ">
          <Image
            alt="image"
            height={25}
            width={40}
            src="https://assets.lummi.ai/assets/Qmb978snnArL1edonsU2WguhAsyGDj2jNwZLwvPwYu876i?auto=format&w=1500"
            className="w-full object-cover  md:h-90"
          />
        </div>
      </div>

      {/* ROW 2 — Two-column content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className="flex flex-col lg:border-r border-[#1A1A1A]/10">
          {/* Tagline */}
          <div className="px-6 md:px-8 lg:px-10 py-8 border-b border-[#1A1A1A]/10">
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#1A1A1A]/80 max-w-sm">
              Timeless comfort meets modern design — discover pieces crafted to
              make every room feel like home.
            </p>
          </div>

          {/* Featured Collaboration Card */}
          <div className="px-6 md:px-8 lg:px-10 py-8 border-b border-[#1A1A1A]/10">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
              {/* Image slot */}
              <div className="relative shrink-0 w-35 h-35 md:w-37.5 md:h-37.5 bg-[#8A9678]/15 rounded-sm overflow-hidden flex items-center justify-center">
               <Image
               alt="image"
               height={80}
               width={80}
               src="http://assets.lummi.ai/assets/QmfPNMxTiRVuntMTdGfTHY4woUuTcrXuYn294JaVix728D?auto=format&w=1500"
               className="w-full object-cover"
               />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between h-full py-1">
                <div>
                  <h2 className="text-[16px] md:text-[17px] font-semibold font-heading text-[#1A1A1A] tracking-tight leading-snug">
                    Designer Collection Spotlight
                  </h2>
                  <p className="text-[13px] md:text-[13.5px] leading-relaxed text-[#1A1A1A]/70 mt-2 max-w-70">
                    A curated collaboration blending bold craftsmanship with
                    everyday comfort — built to last, styled to impress.
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    href="/collections"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1A1A1A]/90 border-b border-[#1A1A1A] pb-0.5 hover:opacity-65 transition-opacity"
                  >
                    Discover More
                    <ArrowUpRight
                      width={12}
                      height={12}
                      className="inline-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Exclusive item — image slot */}
          <div className="relative grow min-h-70 md:min-h-80 bg-[#DCD2C3]/40 flex items-center justify-center  border-b lg:border-b-0 ">
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-[#DCD2C3] text-[#1A1A1A] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm border border-[#1A1A1A]/5">
                Exclusive
              </span>
            </div>
            <Image
            alt="image"
            height={100}
            width={200}
            src="https://assets.lummi.ai/assets/QmavjzgcuPbimPiKkwQd4d2ZfvECGD4yKFfBsC36rk3ZHs?auto=format&w=1500"
            className="w-full object-cover h-70 md:min-h-80"
            />
          </div>
        </div>

        {/* RIGHT COLUMN — Large feature image slot */}
        <div className="relative min-h-125 lg:min-h-full bg-[#C9A876]/10 flex items-center justify-center p-4 ">
          <Image
          alt="iamge"
          height={400}
          width={500}
          src="https://assets.lummi.ai/assets/QmSxr31shcKViJpVBeDwFw4aUuw5jthj26it9VHWtkFy39?auto=format&w=1500"
          className="w-full h-125 object-cover lg:h-160 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
