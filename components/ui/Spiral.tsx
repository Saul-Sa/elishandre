/**
 * Espiral áurea dibujada en SVG. Es decorativa: se oculta a lectores de pantalla.
 * Se calcula una sola vez al cargar el módulo (no envía JavaScript al navegador).
 */
const PHI = (1 + Math.sqrt(5)) / 2;
const GROWTH = Math.log(PHI) / (Math.PI / 2);

function buildSpiralPath(turns: number, size: number): string {
  const steps = Math.round(turns * 72);
  const maxTheta = turns * 2 * Math.PI;
  const maxRadius = Math.exp(GROWTH * maxTheta);
  const scale = (size / 2) / maxRadius;
  const center = size / 2;
  const points: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * maxTheta;
    const radius = Math.exp(GROWTH * theta) * scale;
    const x = center + radius * Math.cos(theta);
    const y = center - radius * Math.sin(theta);
    points.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return `M${points.join(" L")}`;
}

const VIEWBOX = 200;
const SPIRAL_PATH = buildSpiralPath(3.25, VIEWBOX);

interface SpiralProps {
  className?: string;
  strokeWidth?: number;
  /** Dibuja los círculos concéntricos de fondo. */
  withRings?: boolean;
}

export function Spiral({ className, strokeWidth = 0.6, withRings = false }: SpiralProps) {
  return (
    <svg
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      {withRings && (
        <g opacity="0.45">
          <circle cx="100" cy="100" r="99" />
          <circle cx="100" cy="100" r="61.8" />
          <circle cx="100" cy="100" r="38.2" />
        </g>
      )}
      <path d={SPIRAL_PATH} />
    </svg>
  );
}
