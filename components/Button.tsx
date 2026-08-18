import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold transition-all duration-300";

  const variants = {
    primary: "bg-brand-gold text-brand-black hover:bg-brand-gold-dark",

    outline:
      "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black",
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
