"use client";

import Link from "next/link";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { Bars, ShoppingCart, Xmark } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Collections", href: "/collections" },
  { label: "Design Inspiration", href: "/design-inspiration" },
  { label: "Our Projects", href: "/projects" },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F0E6] border-b border-[#1A1A1A]/10">
      <div className="flex h-16 items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1A1A1A] text-[#F5F0E6] text-[12px] font-bold tracking-wide font-heading">
            WO
          </span>
          <span className="text-[16px] font-bold tracking-tight text-[#1A1A1A] whitespace-nowrap font-heading">
            Woodora
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-10 lg:gap-12"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium  transition-colors   ${
                isActive(link.href)
                  ? "text-[#1A1A1A] border-b-2 border-[#A0522D]"
                  : "text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}

        {isPending ? (
          <span className="text-[14px] text-[#1A1A1A] font-semibold mr-3">
            Loading...
          </span>
        ) : user ? (
          <div className="hidden md:flex items-center gap-5">
            {user?.image ? (
              <Image
                alt=""
                height={30}
                width={30}
                src={user?.image}
                className="rounded-full h-8.75 w-8.75 object-cover"
              />
            ) : (
              <Avatar>
                <Avatar.Fallback className="bg-[#1A1A1A] text-[#F5F0E6]">
                  {" "}
                  {user?.name?.[0]?.toUpperCase() ?? "U"}
                </Avatar.Fallback>
              </Avatar>
            )}
            <div className="border border-[#1A1A1A] p-3 rounded-full">
              <ShoppingCart />
            </div>

            <Button
              onClick={handleLogOut}
              className="h-9 px-5 text-[13px] font-semibold rounded-full bg-[#1A1A1A] text-[#F5F0E6] hover:bg-[#1A1A1A]/90 transition-colors"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <Link href="/login">
              <Button className="bg-transparent h-9 px-5 text-[13px] font-semibold rounded-full border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="h-9 px-5 text-[13px] font-semibold rounded-full bg-[#1A1A1A] text-[#F5F0E6] hover:bg-[#1A1A1A]/90 transition-colors">
                Register
              </Button>
            </Link>
          </div>
        )}

        {/* Hamburger — mobile only */}
        <Button
          variant="ghost"
          isIconOnly
          size="sm"
          className="flex md:hidden text-[#1A1A1A] hover:bg-[#1A1A1A]/5 min-w-9 w-9 h-9"
          aria-label="Toggle menu"
          aria-expanded={open}
          onPress={() => setOpen((v) => !v)}
        >
          {open ? (
            <Xmark width={20} height={20} />
          ) : (
            <Bars width={20} height={20} />
          )}
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav
          className="flex flex-col border-t border-[#1A1A1A]/10 bg-[#F5F0E6]"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-[14px] font-medium text-[#1A1A1A] border-b border-[#1A1A1A]/5 hover:bg-[#1A1A1A]/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {isPending ? (
            <span className="text-[14px] text-[#1A1A1A] font-semibold mr-3">
              Loading...
            </span>
          ) : user ? (
            <div className="flex items-center gap-5 py-5 px-6">
              <div className="border border-[#1A1A1A] p-3 rounded-full">
                <ShoppingCart />
              </div>

              <Button
                onClick={handleLogOut}
                className="h-9 px-5 text-[13px] font-semibold rounded-full bg-[#1A1A1A] text-[#F5F0E6] hover:bg-[#1A1A1A]/90 transition-colors"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-3 py-5 px-6">
              <Link href="/login">
                <Button className="bg-transparent h-9 px-5 text-[13px] font-semibold rounded-full border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="h-9 px-5 text-[13px] font-semibold rounded-full bg-[#1A1A1A] text-[#F5F0E6] hover:bg-[#1A1A1A]/90 transition-colors">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
