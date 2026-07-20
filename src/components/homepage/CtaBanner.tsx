import Link from "next/link";
import { ArrowUpRight, Armchair } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="bg-[#F5F0E6] px-6 mb-30">
      <div className="max-w-300 mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] px-8 sm:px-14 py-16 sm:py-20">
          {/* decorative glow */}
          <div
            className="absolute -right-24 -top-24 w-105 h-105 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "#A0522D" }}
          />

          {/* faint background chair line art */}
          <svg
            viewBox="0 0 400 400"
            className="absolute -right-10 -bottom-16 w-90 h-90 opacity-[0.06] pointer-events-none hidden sm:block"
            fill="none"
            stroke="#C9A876"
            strokeWidth="2"
          >
            <path d="M90 260 L90 340 M310 260 L310 340 M90 260 L310 260 L310 180 Q310 150 280 150 L120 150 Q90 150 90 180 Z M120 150 L120 90 Q120 60 150 60 L250 60 Q280 60 280 90 L280 150" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            {/* Text */}
            <div className="max-w-140">
              <div className="inline-flex items-center gap-2 bg-[#F5F0E6]/10 border border-[#F5F0E6]/15 rounded-full px-3.5 py-1.5 mb-6">
                <Armchair className="w-3.5 h-3.5 text-[#C9A876]" />
                <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#F5F0E6]/70">
                  New Season Collection
                </span>
              </div>

              <h2 className="text-[#F5F0E6] font-black text-[34px] sm:text-[46px] leading-[1.05] tracking-tight mb-5">
                Bring Comfort
                <br />
                Into Your{" "}
                <span className="text-[#A0522D] italic font-normal">
                  Home.
                </span>
              </h2>

              <p className="text-[#F5F0E6]/50 text-[14.5px] sm:text-[15px] leading-relaxed max-w-110">
                Handpicked, handcrafted furniture built to last — from
                statement sofas to the smallest finishing touches. Find the
                piece your space has been waiting for.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/collections"
                className="group inline-flex items-center justify-center gap-2 h-13 px-8 rounded-full bg-[#F5F0E6] text-[#1A1A1A] text-[14.5px] font-semibold hover:bg-[#A0522D] hover:text-[#F5F0E6] transition-colors duration-300"
              >
                Shop the Collection
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <p className="text-[#F5F0E6]/35 text-[11.5px] text-center lg:text-left">
                Free shipping on every order
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;