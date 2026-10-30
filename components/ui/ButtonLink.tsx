import Link from "next/link";
import type { ReactNode } from "react";
import { isExternalHref } from "@/lib/cta";

type Variant = "primary" | "secondary" | "light";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-[0.95rem] font-semibold tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-olive-deep text-cream hover:bg-olive-night",
  secondary: "border border-gold-deep/60 text-ink hover:border-gold-deep hover:bg-cream-deep",
  light: "bg-cream text-olive-night hover:bg-gold-light",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Texto adicional para lectores de pantalla (por ejemplo, el nombre del kit). */
  srLabel?: string;
}

export function ButtonLink({ href, children, variant = "primary", className = "", srLabel }: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const extra = srLabel ? <span className="sr-only"> {srLabel}</span> : null;

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {extra}
        <span className="sr-only"> (abre en una pestaña nueva)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {extra}
    </Link>
  );
}
