"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "What materials do you use in your furniture?",
    answer:
      "We craft our pieces from responsibly sourced solid wood, boucle and linen upholstery, and natural finishes. Every material is chosen for durability, texture, and long-term comfort — nothing synthetic or short-lived.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "In-stock items typically ship within 2–3 weeks of purchase and can take up to 14 business days in transit. Oversized furniture is delivered via White Glove service, which includes an in-home appointment and assembly.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes — most items can be returned within 30 days if unused and in original packaging. Exclusive and made-to-order pieces are final sale. Some returns may incur a 15% restocking fee, so please check the product page before ordering.",
  },
  {
    question: "Do you offer assembly services?",
    answer:
      "Oversized and White Glove eligible items include assembly as part of delivery. Our two-person delivery team will bring the piece inside, assemble it in your chosen room, and remove all packaging debris.",
  },
  {
    question: "Are your designs exclusive to Woodora?",
    answer:
      "Many of our collections, including designer collaborations, are exclusive to Woodora and not sold anywhere else. Look for the 'Exclusive' badge on product listings.",
  },
  {
    question: "How do I care for my furniture over time?",
    answer:
      "Each product page includes specific care instructions based on material — wood, boucle, or linen. In general, we recommend avoiding direct sunlight, using coasters for wood surfaces, and light vacuuming for upholstery.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full mb-30 bg-[#F5F0E6] ">
      <div >

        {/* LEFT — Heading + CTA */}
        <div className="flex flex-col justify-between lg:items-center px-6 md:px-10 lg:px-14 py-12 lg:py-16 lg:border-r border-[#1A1A1A]/10">
          <div>
            <h2 className="font-heading font-extrabold text-[#1A1A1A] leading-[0.95] tracking-[-0.03em] text-[10vw] sm:text-[6vw] lg:text-[3.2vw]">
              Frequently
             
              Asked
             
              Questions
            </h2>
            <p className="text-[14px] leading-relaxed text-[#1A1A1A]/60 mt-6 max-w-sm lg:mx-auto lg:text-center">
              Everything you need to know about shopping, shipping, and caring
              for your Woodora furniture.
            </p>
          </div>
        </div>

        {/* RIGHT — Accordion */}
        <div className="flex flex-col">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`border-b border-[#1A1A1A]/10 ${
                  isOpen ? "bg-[#DCD2C3]/20" : ""
                } transition-colors`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-10 lg:px-12 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-[12px] font-semibold text-[#1A1A1A]/35 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[15px] md:text-[16px] font-semibold font-heading tracking-tight transition-colors ${
                        isOpen ? "text-[#1A1A1A]" : "text-[#1A1A1A]/80"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#1A1A1A] text-[#F5F0E6] rotate-45"
                        : "bg-[#1A1A1A]/5 text-[#1A1A1A]"
                    }`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={2} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13.5px] md:text-[14px] leading-relaxed text-[#1A1A1A]/65 pl-10 md:pl-19 pr-6 md:pr-12 pb-6 max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;