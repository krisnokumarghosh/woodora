"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "@gravity-ui/icons";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

const ROOMS = [
  {
    id: "01",
    label: "Living Room",
    image:
      "https://assets.lummi.ai/assets/QmY5mH77keJdaK26pfVQpksqGZbMTqq5tMVoTuJywQurJt?auto=format&w=1500",
    href: "/collections?category=Living+Room",
  },
  {
    id: "02",
    label: "Bedroom",
    image:
      "https://assets.lummi.ai/assets/QmNXAhdJTcgyyw8Cdfhg1M5wyEnXEU6qkWYmH9ws8zYBtT?auto=format&w=1500",
    href: "/collections?category=Bedroom",
  },
  {
    id: "03",
    label: "Dining Room",
    image:
      "https://assets.lummi.ai/assets/QmbXq8DLDtSXv9ssNFA4HxTUQN9fVPQ593Y6H2Xbdsp5PW?auto=format&w=1500",
    href: "/collections?category=Dining+Room",
  },
  {
    id: "04",
    label: "Office Room",
    image:
      "https://assets.lummi.ai/assets/QmPkbMnorJX5Nqt6htm3EmSLYiEeMAS2EGDN4V5hqQSWhd?auto=format&w=1500",
    href: "/collections?category=Office+Room",
  },
  {
    id: "05",
    label: "Kitchen",
    image:
      "https://assets.lummi.ai/assets/QmdUnvNybWq4UAx56LcrnWoBXRegC6h9FmubfMi3LqfDHh?auto=format&w=1500",
    href: "/collections?category=Kitchen",
  },
];

export default function ShopByRoom() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      if (!previewRef.current) return;
      xTo.current = gsap.quickTo(previewRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(previewRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });
    },
    { scope: sectionRef },
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    xTo.current?.(x);
    yTo.current?.(y);
  };

  const handleEnter = (image: string) => {
    setActiveImage(image);
    gsap.to(previewRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(previewRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#F5F0E6] overflow-hidden mb-25"
    >
      {/* Heading */}
      <div className="px-6 md:px-10 lg:px-14 py-8 lg:py-10 border-b border-[#1A1A1A]/10">
        <h2 className="font-heading font-extrabold text-[#1A1A1A] tracking-[-0.03em] text-[9vw] sm:text-[6vw] lg:text-[3.2vw]">
          Shop By Room
        </h2>
      </div>

      {/* List */}
      <ul>
        {ROOMS.map((room) => (
          <Link
            href={room.href}
            key={room.id}
            onMouseEnter={() => handleEnter(room.image)}
            onMouseLeave={handleLeave}
            className="group flex items-center justify-between px-6 md:px-10 lg:px-14 py-6 border-b border-[#1A1A1A]/10 cursor-pointer transition-colors hover:bg-[#1A1A1A]/2"
          >
            <span className="text-[13px] font-semibold text-[#1A1A1A]/50 w-10">
              {room.id}
            </span>
            <span className="grow text-[20px] md:text-[26px] font-heading font-semibold text-[#1A1A1A] tracking-tight">
              {room.label}
            </span>
            <ArrowUpRight
              width={20}
              height={20}
              className="text-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        ))}
      </ul>

      {/* Cursor-following image preview */}
      <div
        ref={previewRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%) scale(0.6) rotate(-6deg)",
          opacity: 0,
          pointerEvents: "none",
          willChange: "transform, opacity",
        }}
        className="w-55 h-70 lg:w-65 lg:h-85 rounded-md overflow-hidden shadow-2xl z-10"
      >
        {activeImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={activeImage}
            alt="Room preview"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
}
