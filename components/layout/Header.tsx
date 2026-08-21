"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/site";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-header-border
        bg-header-background
        text-foreground
        transition-colors duration-300
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
            aria-label="تکنو ماشین "
          >
            <div className="relative h-18 w-18 shrink-0">
              <Image
                src="/images/IMG_5071.PNG"
                alt="تکنو ماشین "
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden leading-none sm:block">
              <div className="text-sm font-black text-foreground">
                تکنو ماشین
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="منوی اصلی"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    group relative
                    py-7
                    text-sm font-semibold
                    transition-colors

                    ${
                      active
                        ? "text-brand-gold"
                        : "text-foreground-soft hover:text-brand-gold"
                    }
                  `}
                >
                  {item.title}

                  <span
                    className={`
                      absolute bottom-0 right-0
                      h-0.5
                      bg-brand-gold
                      transition-all duration-300

                      ${active ? "w-6" : "w-0 group-hover:w-6"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <ThemeToggle />

            <Button>استعلام قیمت</Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-md
                border border-header-border
                bg-header-background
                text-foreground
                transition-all duration-300

                hover:border-brand-gold
                hover:text-brand-gold
              "
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`
                    h-0.5 w-5
                    bg-current
                    transition-transform duration-300

                    ${isMenuOpen ? "translate-y-2 rotate-45" : ""}
                  `}
                />

                <span
                  className={`
                    h-0.5 w-5
                    bg-current
                    transition-opacity duration-300

                    ${isMenuOpen ? "opacity-0" : "opacity-100"}
                  `}
                />

                <span
                  className={`
                    h-0.5 w-5
                    bg-current
                    transition-transform duration-300

                    ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}
                  `}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300
            lg:hidden

            ${
              isMenuOpen
                ? "max-h-[700px] border-t border-header-border opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col py-4" aria-label="منوی موبایل">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`
                    border-b border-border-soft
                    px-2 py-4
                    text-sm font-semibold
                    transition-colors
                    last:border-0

                    ${
                      active
                        ? "text-brand-gold"
                        : "text-foreground-soft hover:text-brand-gold"
                    }
                  `}
                >
                  {item.title}
                </Link>
              );
            })}

            {/* Mobile Theme + CTA */}
            <div
              className="
                mt-3
                flex items-center justify-between
                gap-3
                border-t border-border-soft
                pt-4
              "
            >
              <div className="flex items-center gap-3">
                <ThemeToggle />

                <span className="text-sm font-semibold text-foreground-soft">
                  تغییر پوسته
                </span>
              </div>

              <Button>استعلام قیمت</Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
