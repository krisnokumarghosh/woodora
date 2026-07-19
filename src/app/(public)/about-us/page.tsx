import Image from "next/image";
import Link from "next/link";
import { Leaf, Hammer, Truck, Heart, ArrowUpRight } from "lucide-react";

const VALUES = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    desc: "Every piece is crafted from responsibly harvested wood and eco-conscious materials, built to last generations.",
  },
  {
    icon: Hammer,
    title: "Handcrafted Quality",
    desc: "Our artisans bring decades of craftsmanship to every joint, seam, and finish — no detail overlooked.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    desc: "From our workshop to your living room, every order is handled with care and delivered with precision.",
  },
  {
    icon: Heart,
    title: "Designed With Love",
    desc: "We design furniture that feels like home — timeless pieces that grow more beautiful with time.",
  },
];

const STATS = [
  { number: "12+", label: "Years of Craft" },
  { number: "8,500+", label: "Happy Homes" },
  { number: "150+", label: "Curated Designs" },
  { number: "98%", label: "Customer Satisfaction" },
];

const AboutUsPage = () => {
  return (
    <div className="w-full bg-[#F5F0E6]">

      {/* HERO */}
      <section className="border-b border-[#1A1A1A]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-14 lg:py-20 lg:border-r border-[#1A1A1A]/10">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#A0522D] mb-4">
              Our Story
            </p>
            <h1 className="font-heading font-extrabold text-[#1A1A1A] leading-[0.95] tracking-[-0.03em] text-[11vw] sm:text-[7vw] lg:text-[4vw]">
              Crafting Comfort,
              <br />
              Rooted In Character
            </h1>
            <p className="text-[14.5px] leading-relaxed text-[#1A1A1A]/70 mt-6 max-w-md">
              Woodora began with a simple belief — furniture should feel personal.
              What started as a small workshop has grown into a home for
              thoughtfully designed pieces, each one built to bring warmth,
              texture, and story into your space.
            </p>
          </div>

          <div className="relative min-h-85 lg:min-h-full bg-[#DCD2C3]/40">
            <Image
              src="https://assets.lummi.ai/assets/QmSxr31shcKViJpVBeDwFw4aUuw5jthj26it9VHWtkFy39?auto=format&w=1500"
              alt="Handcrafted furniture in a warm interior"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-[#1A1A1A]/10">
        <div className="px-6 md:px-10 lg:px-14 py-10 border-b border-[#1A1A1A]/10">
          <h2 className="font-heading font-extrabold text-[#1A1A1A] tracking-[-0.02em] text-[7vw] sm:text-[4vw] lg:text-[2.2vw]">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`px-6 md:px-8 py-10 ${
                  i !== VALUES.length - 1 ? "lg:border-r border-[#1A1A1A]/10" : ""
                } border-b lg:border-b-0 border-[#1A1A1A]/10`}
              >
                <div className="w-11 h-11 rounded-full bg-[#8A9678]/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#8A9678]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15.5px] font-semibold font-heading text-[#1A1A1A] mb-2">
                  {value.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#1A1A1A]/60">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[#1A1A1A]/10 bg-[#1A1A1A]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-10 md:py-12 text-center ${
                i !== STATS.length - 1 ? "border-r border-[#F5F0E6]/10" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-[#F5F0E6]/10" : ""}`}
            >
              <p className="font-heading font-extrabold text-[#F5F0E6] text-[7vw] sm:text-[4vw] lg:text-[2.4vw] tracking-[-0.02em]">
                {stat.number}
              </p>
              <p className="text-[12px] uppercase tracking-widest text-[#F5F0E6]/50 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CRAFTSMANSHIP SPLIT */}
      <section className="border-b border-[#1A1A1A]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-80 lg:min-h-115 bg-[#C9A876]/10 lg:border-r border-[#1A1A1A]/10">
            <Image
              src="https://assets.lummi.ai/assets/QmavjzgcuPbimPiKkwQd4d2ZfvECGD4yKFfBsC36rk3ZHs?auto=format&w=1500"
              alt="Craftsmanship detail"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-14 lg:py-0">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#A0522D] mb-4">
              Our Process
            </p>
            <h2 className="font-heading font-extrabold text-[#1A1A1A] leading-none tracking-[-0.02em] text-[8vw] sm:text-[5vw] lg:text-[2.8vw] mb-5">
              Built By Hand,
              <br />
              Designed To Last
            </h2>
            <p className="text-[14px] leading-relaxed text-[#1A1A1A]/70 max-w-md mb-6">
              Each Woodora piece passes through the hands of skilled
              craftspeople before it reaches your home. We pair traditional
              joinery techniques with modern design sensibility — the result
              is furniture that&apos;s as durable as it is beautiful.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 w-fit h-12 px-6 rounded-full bg-[#1A1A1A] text-[#F5F0E6] text-[13.5px] font-semibold hover:bg-[#A0522D] transition-colors duration-300"
            >
              Explore Our Collection
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-14 py-16 lg:py-20 text-center">
        <h2 className="font-heading font-extrabold text-[#1A1A1A] tracking-[-0.02em] text-[9vw] sm:text-[6vw] lg:text-[3.2vw] leading-tight mb-4">
          Let&apos;s Furnish Your Story
        </h2>
        <p className="text-[14.5px] text-[#1A1A1A]/60 max-w-md mx-auto mb-8">
          Browse our curated collections and find the pieces that feel like
          home.
        </p>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#1A1A1A] text-[#F5F0E6] text-[13.5px] font-semibold hover:bg-[#A0522D] transition-colors duration-300"
        >
          Shop Now
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
};

export default AboutUsPage;