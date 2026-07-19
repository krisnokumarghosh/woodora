import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "/" },
  { label: "Github", href: "/" },
  { label: "Linkedin", href: "/" },
];
const COMPANY_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Terms", href: "/terms" },
];

const INFO_CARDS = [
  {
    title: "Shipping",
    desc: "In-stock items shipped via White Glove or oversize will typically ship within 2–3 weeks of purchase, unless otherwise noted. Transit can take up to 14 business days.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 8L12 3 3 8v8l9 5 9-5V8z" />
        <path d="M3 8l9 5 9-5M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Delivery",
    desc: "Delivery requires an appointment and signature. A two-person team will bring the item inside, place it in your chosen room, assemble it, and remove packaging debris.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="17" r="1.5" />
        <circle cx="17" cy="17" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Returns",
    desc: "Please verify that this item aligns with your specific requirements before completing the purchase, as it does not qualify for free returns and incurs a 15% restocking fee.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
        <path d="M9 11l-2 2 2 2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#F5F0E6]">
      {/* GET IN TOUCH heading */}
      <div className="border-t border-b border-[#F5F0E6]/10 px-6 md:px-10 lg:px-14 py-8 lg:py-10">
        <h2
          className="font-heading font-extrabold uppercase leading-none tracking-[-0.02em]
                       text-[13vw] sm:text-[9vw] lg:text-[5.5vw] select-none"
        >
          Get In Touch
        </h2>
      </div>

      {/* Info cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#F5F0E6]/10">
        {INFO_CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`px-6 md:px-8 lg:px-10 py-8 ${
              i !== INFO_CARDS.length - 1
                ? "md:border-r border-[#F5F0E6]/10"
                : ""
            } ${i !== INFO_CARDS.length - 1 ? "border-b md:border-b-0 border-[#F5F0E6]/10" : ""}`}
          >
            <div className="text-[#F5F0E6] mb-4">{card.icon}</div>
            <h3 className="text-[15px] font-semibold mb-2">{card.title}</h3>
            <p className="text-[12.5px] leading-relaxed text-[#F5F0E6]/60 max-w-75">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Links + Subscribe row */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.2fr] border-b border-[#F5F0E6]/10">
        {/* Social Media */}
        <div className="px-6 md:px-8 lg:px-10 py-8 md:border-r border-[#F5F0E6]/10">
          <h4 className="text-[14px] font-semibold mb-4">Social Media</h4>
          <ul className="flex flex-col gap-2.5">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[13px] text-[#F5F0E6]/60 hover:text-[#F5F0E6] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* The Company */}
        <div className="px-6 md:px-8 lg:px-10 py-8 md:border-r border-[#F5F0E6]/10">
          <h4 className="text-[14px] font-semibold mb-4">The Company</h4>
          <ul className="flex flex-col gap-2.5">
            {COMPANY_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[13px] text-[#F5F0E6]/60 hover:text-[#F5F0E6] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div className="px-6 md:px-8 lg:px-10 py-8">
          <h4 className="text-[14px] font-semibold mb-3">Subscribe To Us!</h4>
          <p className="text-[12.5px] leading-relaxed text-[#F5F0E6]/60 mb-4 max-w-65">
            Sign Up For Our Email List And Receive 10% Off Your First Order.
          </p>
          <form className="flex items-center border-b border-[#F5F0E6]/30 pb-2 max-w-70">
            <input
              type="email"
              placeholder="Your Email Address"
              className="grow bg-transparent text-[13px] placeholder:text-[#F5F0E6]/40 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="text-[#F5F0E6]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 py-5 text-center">
        <p className="text-[12px] text-[#F5F0E6]/60">
          © 2026, woodora All rights reserved.
        </p>
      </div>
    </footer>
  );
}
