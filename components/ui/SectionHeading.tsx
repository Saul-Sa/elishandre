import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
}

export function SectionHeading({ id, eyebrow, title, children, align = "center", tone = "default" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const light = tone === "light";
  return (
    <header className={`max-w-2xl ${alignment}`}>
      <p className={`eyebrow ${light ? "text-gold-light!" : ""}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-3 text-4xl sm:text-5xl ${light ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {children && (
        <div className={`mt-4 text-lg ${light ? "text-cream/85" : "text-ink-soft"}`}>{children}</div>
      )}
    </header>
  );
}
