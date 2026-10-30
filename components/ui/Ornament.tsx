import { Spiral } from "./Spiral";

/** Separador con una pequeña espiral al centro. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-60" />
      <Spiral className="h-6 w-6" strokeWidth={6} />
      <span className="h-px w-12 bg-current opacity-60" />
    </div>
  );
}
