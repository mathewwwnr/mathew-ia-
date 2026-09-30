"use client";

import { motion } from "motion/react";
import { useId } from "react";

const TOOTH =
  "M100 30 C70 10 30 20 30 70 C30 110 50 130 55 170 C60 215 70 232 80 226 C90 220 88 172 100 160 C112 172 110 220 120 226 C130 232 140 215 145 170 C150 130 170 110 170 70 C170 20 130 10 100 30 Z";

/** Diente en línea dorada que se dibuja al aparecer. */
export function ToothLine({ className, delay = 0.4 }: { className?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 200 250" fill="none" className={className} aria-hidden>
      <motion.path
        d={TOOTH}
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 2.8, ease: [0.65, 0, 0.35, 1], delay }, opacity: { duration: 0.3, delay } }}
      />
      <motion.path
        d="M62 64 C72 44 92 42 100 52"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: delay + 2 }}
      />
      <Sparkle x={150} y={40} delay={delay + 2.6} />
      <Sparkle x={44} y={150} delay={delay + 2.9} small />
    </svg>
  );
}

function Sparkle({ x, y, delay, small = false }: { x: number; y: number; delay: number; small?: boolean }) {
  const s = small ? 6 : 10;
  return (
    <motion.path
      d={`M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s} Z`}
      fill="currentColor"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    />
  );
}

type Tooth = { x: number; w: number; bottom: number; rot?: number; dx?: number };

const UPPER: Tooth[] = [
  { x: 134, w: 34, bottom: 205 },
  { x: 168, w: 38, bottom: 218 },
  { x: 206, w: 42, bottom: 213 },
  { x: 248, w: 52, bottom: 224 },
  { x: 300, w: 52, bottom: 224 },
  { x: 352, w: 42, bottom: 213 },
  { x: 394, w: 38, bottom: 218 },
  { x: 432, w: 34, bottom: 205 },
];

// Irregularidades para la versión "antes"
const BEFORE_TWEAKS: Record<number, Partial<Tooth>> = {
  2: { rot: -7, bottom: 208 },
  3: { dx: -5, bottom: 219 },
  4: { dx: 6, bottom: 227 },
  5: { rot: 9, bottom: 216 },
  6: { bottom: 212 },
};

/** Ilustración estilizada de sonrisa. Sustituir por fotografías reales de casos. */
export function SmileArt({ variant }: { variant: "before" | "after" }) {
  const id = useId().replace(/:/g, "");
  const before = variant === "before";
  const toothTop = before ? "#e8d7a6" : "#ffffff";
  const toothBottom = before ? "#c9ad6e" : "#ece6da";

  return (
    <svg viewBox="0 0 600 380" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`skin-${id}`} cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#ecd2c0" />
          <stop offset="100%" stopColor="#c9998a" />
        </radialGradient>
        <linearGradient id={`tooth-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={toothTop} />
          <stop offset="100%" stopColor={toothBottom} />
        </linearGradient>
        <clipPath id={`mouth-${id}`}>
          <path d="M110 170 Q300 120 490 170 Q300 330 110 170 Z" />
        </clipPath>
      </defs>

      <rect width="600" height="380" fill={`url(#skin-${id})`} />
      <path d="M110 170 Q300 120 490 170 Q300 330 110 170 Z" fill="#4a1f22" />

      <g clipPath={`url(#mouth-${id})`}>
        {/* dientes inferiores */}
        {[170, 208, 246, 284, 322, 360, 398].map((x, i) => (
          <rect key={i} x={x + 4} y={236} width={34} height={60} rx={9} fill={`url(#tooth-${id})`} opacity={0.9} />
        ))}
        {UPPER.map((t, i) => {
          const tw = before ? { ...t, ...BEFORE_TWEAKS[i] } : t;
          const cx = tw.x + tw.w / 2 + (tw.dx ?? 0);
          return (
            <rect
              key={i}
              x={tw.x + (tw.dx ?? 0) + 1.5}
              y={110}
              width={tw.w - 3}
              height={tw.bottom - 110}
              rx={11}
              fill={`url(#tooth-${id})`}
              stroke={before ? "#b39459" : "#e2dbcd"}
              strokeWidth={1}
              transform={tw.rot ? `rotate(${tw.rot} ${cx} ${tw.bottom})` : undefined}
            />
          );
        })}
        {before && <path d="M318 224 L330 214 L340 225 Z" fill="#4a1f22" />}
        {!before && <ellipse cx="270" cy="160" rx="12" ry="30" fill="white" opacity="0.5" />}
      </g>

      {/* labios */}
      <path d="M92 168 Q200 112 300 140 Q400 112 508 168 Q300 128 92 168 Z" fill="#b0645c" />
      <path d="M110 172 Q300 330 490 172 Q512 186 488 204 Q300 380 112 204 Q88 186 110 172 Z" fill="#b86e64" />
      <path d="M220 250 Q300 275 380 250" stroke="#d8928a" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

/** Retrato de marcador para el equipo (monograma dentro de un arco). */
export function PortraitPlaceholder({ initials, index }: { initials: string; index: number }) {
  const tones = [
    ["#efe6d6", "#d9c7a8"],
    ["#e9e1d4", "#cdbb9c"],
    ["#f1e9dc", "#dccbb0"],
    ["#ebe3d5", "#d2bf9f"],
  ][index % 4];
  return (
    <div
      className="arch relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${tones[0]}, ${tones[1]})` }}
    >
      <svg viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx="150" cy="420" r={60 + i * 40} fill="none" stroke="#b08d57" strokeWidth="0.6" />
        ))}
      </svg>
      <span className="relative font-serif text-7xl italic text-gold-deep/80">{initials}</span>
    </div>
  );
}
