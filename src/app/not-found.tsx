import Link from "next/link";
import { Home, ArrowUpRight, Armchair } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center px-6 relative overflow-hidden py-10">
      {/* faint background chair line art */}
      <svg
        viewBox="0 0 400 400"
        className="absolute -right-20 -bottom-20 w-120 h-120 opacity-[0.05] pointer-events-none"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2"
      >
        <path d="M90 260 L90 340 M310 260 L310 340 M90 260 L310 260 L310 180 Q310 150 280 150 L120 150 Q90 150 90 180 Z M120 150 L120 90 Q120 60 150 60 L250 60 Q280 60 280 90 L280 150" />
      </svg>
      <svg
        viewBox="0 0 400 400"
        className="absolute -left-24 -top-24 w-95 h-95 opacity-[0.05] pointer-events-none rotate-12"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2"
      >
        <path d="M90 260 L90 340 M310 260 L310 340 M90 260 L310 260 L310 180 Q310 150 280 150 L120 150 Q90 150 90 180 Z M120 150 L120 90 Q120 60 150 60 L250 60 Q280 60 280 90 L280 150" />
      </svg>

      <div className="relative z-10 text-center max-w-130">
        {/* 404 with chair icon in place of a digit */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6">
          <span className="text-[88px] sm:text-[120px] font-black text-[#1A1A1A] leading-none tracking-tight">
            4
          </span>
          <div className="w-17.5 h-17.5 sm:w-24 sm:h-24 rounded-2xl bg-[#A0522D] flex items-center justify-center rotate-3">
            <Armchair
              className="w-9 h-9 sm:w-12 sm:h-12 text-[#F5F0E6]"
              strokeWidth={1.5}
            />
          </div>
          <span className="text-[88px] sm:text-[120px] font-black text-[#1A1A1A] leading-none tracking-tight">
            4
          </span>
        </div>

        <p className="text-[#A0522D] text-[11px] font-bold tracking-[0.28em] uppercase mb-3">
          Error 404
        </p>
        <h1 className="text-[#1A1A1A] font-black text-[28px] sm:text-[34px] leading-tight tracking-tight mb-3">
          This Room Is Empty.
        </h1>
        <p className="text-[#1A1A1A]/55 text-[14.5px] leading-relaxed mb-10 max-w-100 mx-auto">
          The page you&apos;re looking for has been moved, sold out, or never
          existed. Let&apos;s get you back to browsing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#1A1A1A] text-[#F5F0E6] text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-[#A0522D] transition-colors duration-300"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/collections"
            className="w-full sm:w-auto h-12 px-7 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-[#F5F0E6] transition-colors duration-300"
          >
            Browse Collection
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}