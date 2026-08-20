"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : systemDark
          ? "dark"
          : "light";

    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    document.documentElement.style.colorScheme = initialTheme;

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    const html = document.documentElement;

    html.classList.add("theme-transition");

    html.classList.toggle("dark", nextTheme === "dark");

    html.style.colorScheme = nextTheme;

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);

    window.setTimeout(() => {
      html.classList.remove("theme-transition");
    }, 350);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        !mounted
          ? "تغییر حالت نمایش"
          : isDark
            ? "فعال کردن حالت روشن"
            : "فعال کردن حالت تاریک"
      }
      title={
        !mounted ? "تغییر حالت نمایش" : isDark ? "حالت روشن" : "حالت تاریک"
      }
      className="
        group relative
        flex h-11 w-11 shrink-0
        items-center justify-center
        overflow-hidden
        rounded-full
        border
        border-gray-300
        bg-white
        text-gray-800
        shadow-sm
        transition-all duration-300

        hover:border-brand-gold
        hover:bg-brand-gold/10
        hover:text-brand-gold

        dark:border-white/15
        dark:bg-[#171b20]
        dark:text-gray-100

        dark:hover:border-brand-gold
        dark:hover:bg-brand-gold/10
        dark:hover:text-brand-gold
      "
    >
      {/* Glow */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-full
          bg-brand-gold/10
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      {!mounted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="relative z-10 h-5 w-5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      ) : isDark ? (
        /* Sun */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            relative z-10
            h-5 w-5
            transition-transform duration-300
            group-hover:rotate-45
          "
        >
          <circle cx="12" cy="12" r="4" />

          <path d="M12 2v2" />
          <path d="M12 20v2" />

          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />

          <path d="M2 12h2" />
          <path d="M20 12h2" />

          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        /* Moon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            relative z-10
            h-5 w-5
            transition-transform duration-300
            group-hover:-rotate-12
          "
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  );
}
