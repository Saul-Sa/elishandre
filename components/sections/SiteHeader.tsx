import Link from "next/link";
import { site } from "@/data/site";
import { Spiral } from "@/components/ui/Spiral";

const nav = [
  { label: "Encuentros", href: "/#encuentros" },
  { label: "Kits", href: "/#kits" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand/70 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <Spiral className="h-7 w-7 text-gold-deep" strokeWidth={7} />
          <span className="font-serif text-xl font-semibold tracking-wide">{site.shortName}</span>
        </Link>
        <nav aria-label="Principal">
          <ul className="flex items-center gap-1 text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-ink-soft hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
