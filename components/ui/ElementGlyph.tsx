import type { ElementId } from "@/lib/types";

/** Símbolos alquímicos de los elementos. Decorativos. */
export function ElementGlyph({ element, className }: { element: ElementId; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {element === "fuego" && <path d="M12 3 21 19H3Z" />}
      {element === "agua" && <path d="M12 21 3 5h18Z" />}
      {element === "aire" && (
        <>
          <path d="M12 3 21 19H3Z" />
          <path d="M5.8 13h12.4" />
        </>
      )}
      {element === "tierra" && (
        <>
          <path d="M12 21 3 5h18Z" />
          <path d="M5.8 11h12.4" />
        </>
      )}
      {element === "siete-elementos" && (
        <>
          <circle cx="12" cy="12" r="9" />
          {/* Estrella de siete puntas {7/3} */}
          <path d={heptagram()} />
        </>
      )}
    </svg>
  );
}

function heptagram(): string {
  const points = Array.from({ length: 7 }, (_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 7;
    return [12 + 9 * Math.cos(angle), 12 + 9 * Math.sin(angle)];
  });
  const order = Array.from({ length: 7 }, (_, i) => points[(i * 3) % 7]);
  return `M${order.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(" L")}Z`;
}
