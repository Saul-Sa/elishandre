import Link from "next/link";
import { site } from "@/data/site";
import { getCtaHref } from "@/lib/cta";
import { Spiral } from "@/components/ui/Spiral";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-olive-night text-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-serif text-2xl">
            <Spiral className="h-8 w-8 text-gold-light" strokeWidth={6} />
            {site.name}
          </p>
          <p className="mt-4 max-w-xs font-serif text-lg italic text-cream/85">«{site.motto}»</p>
          <p className="mt-3 text-sm text-cream/75">{site.city}</p>
        </div>

        <div>
          <h2 className="eyebrow text-gold-light!">Conversemos</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 hover:text-gold-light"
              >
                <InstagramIcon />
                {site.instagram.handle}
                <span className="sr-only"> en Instagram (abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a
                href={getCtaHref({ kind: "general" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 hover:text-gold-light"
              >
                <WhatsAppIcon />
                Escríbenos por WhatsApp
                <span className="sr-only"> (abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Políticas">
          <h2 className="eyebrow text-gold-light!">Políticas</h2>
          <ul className="mt-4 space-y-1">
            {site.footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/15">
        <p className="container-page py-6 text-sm text-cream/75">
          © {year} {site.name}. Hecho con intención en Medellín.
        </p>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8Z" strokeLinejoin="round" />
      <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.8-.6.3-1.6.4-3-.3-1.6-.8-2.8-2-3.6-3.6-.7-1.4-.6-2.4-.2-2.9Z" />
    </svg>
  );
}
