"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/site";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Button from "@/components/Button";
import Container from "@/components/Container";

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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-background)] backdrop-blur-md transition-colors duration-300">
      {" "}
      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
            aria-label="تکنو ماشین صنعت"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-black text-xl font-black text-brand-gold dark:bg-white">
              TM
            </div>

            <div className="hidden leading-none sm:block">
              <div className="text-sm font-black text-brand-black dark:text-white">
                تکنو ماشین
              </div>

              <div className="mt-1 text-xs font-bold text-brand-gold">صنعت</div>
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
                  className={`group relative py-7 text-sm font-semibold transition-colors ${
                    active
                      ? "text-brand-gold"
                      : "text-gray-700 hover:text-brand-gold dark:text-gray-300"
                  }`}
                >
                  {item.title}

                  <span
                    className={`absolute bottom-0 right-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                      active ? "w-6" : "w-0 group-hover:w-6"
                    }`}
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
              className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold dark:border-white/10 dark:text-white"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "max-h-[600px] border-t border-gray-100 opacity-100 dark:border-white/10"
              : "max-h-0 opacity-0"
          }`}
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
                  className={`border-b border-gray-100 px-2 py-4 text-sm font-semibold transition-colors last:border-0 dark:border-white/10 ${
                    active
                      ? "text-brand-gold"
                      : "text-gray-700 hover:text-brand-gold dark:text-gray-300"
                  }`}
                >
                  {item.title}
                  <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <span className="text-sm font-semibold text-[var(--text-secondary)]">
                      تغییر پوسته
                    </span>

                    <ThemeToggle />
                  </div>
                </Link>
              );
            })}

            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <ThemeToggle />

              <Button>استعلام قیمت</Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
