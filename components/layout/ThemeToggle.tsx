"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);

    setDark(isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    document.documentElement.classList.toggle("dark", nextDark);

    localStorage.setItem("theme", nextDark ? "dark" : "light");

    setDark(nextDark);
  };

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-full border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "فعال کردن حالت روشن" : "فعال کردن حالت تاریک"}
      title={dark ? "حالت روشن" : "حالت تاریک"}
      className="
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-gray-200
        bg-white
        text-brand-black
        shadow-sm
        transition-all
        duration-300
        hover:border-brand-gold
        hover:text-brand-gold
        dark:border-white/10
        dark:bg-white/5
        dark:text-white
        dark:hover:border-brand-gold
        dark:hover:text-brand-gold
      "
    >
      <span
        className={`absolute transition-all duration-300 ${
          dark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      >
        {/* Sun */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
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
      </span>

      <span
        className={`absolute transition-all duration-300 ${
          dark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      >
        {/* Moon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      </span>
    </button>
  );
}
