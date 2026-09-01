"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  title: string;
  href: string;
};

type NavigationProps = {
  items: NavigationItem[];
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function Navigation({
  items,
  mobile = false,
  onNavigate,
}: NavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {items.map((item) => {
        const active = isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`group relative font-semibold transition-colors duration-200 ${
              mobile
                ? `border-b border-gray-100 px-2 py-4 ${
                    active
                      ? "text-brand-gold"
                      : "text-[var(--text-secondary)] hover:text-brand-gold"
                  }`
                : `py-7 ${
                    active
                      ? "text-brand-gold"
                      : "text-[var(--text-secondary)] hover:text-brand-gold"
                  }`
            }`}
          >
            {item.title}

            {!mobile && (
              <span
                className={`absolute bottom-0 right-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            )}
          </Link>
        );
      })}
    </>
  );
}
