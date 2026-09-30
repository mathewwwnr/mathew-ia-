"use client";

import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SmileArt } from "../art";
import { Eyebrow, Reveal, SplitWords } from "../motion";

const cases = [
  { label: "Blanqueamiento + carillas", detail: "Aclaramiento del tono y corrección de forma en el sector anterior." },
  { label: "Ortodoncia invisible", detail: "Alineación de incisivos y cierre de espacio central." },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section id="resultados" className="scroll-mt-24 bg-cream/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <Eyebrow>Resultados</Eyebrow>
            <SplitWords text="Desliza y compara." className="mt-6 font-serif text-5xl font-light leading-[1.02] md:text-6xl" />
            <Reveal delay={0.2}>
              <p className="mt-6 text-stone">
                Cada caso es distinto. En tu valoración te mostramos una simulación basada en tu propia sonrisa.
              </p>
              <div className="mt-10 space-y-3">
                {cases.map((c, i) => (
                  <button
                    key={c.label}
                    onClick={() => setActive(i)}
                    className={`block w-full rounded-2xl border p-5 text-left transition-all duration-500 ${
                      active === i ? "border-gold bg-ivory shadow-[0_20px_40px_-25px_rgba(138,107,60,0.5)]" : "border-ink/10 hover:border-gold/50"
                    }`}
                  >
                    <p className="font-serif text-2xl">{c.label}</p>
                    <p className="mt-1 text-sm text-stone">{c.detail}</p>
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-stone/70">Ilustraciones de referencia. Reemplazar con fotografías reales autorizadas por los pacientes.</p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-8">
            <Comparator key={active} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Comparator() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const pos = useMotionValue(50);
  const [value, setValue] = useState(50);
  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`);
  const left = useTransform(pos, (v) => `${v}%`);

  useMotionValueEvent(pos, "change", (v) => setValue(Math.round(v)));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(pos, [50, 22, 78, 50], { duration: 2.6, ease: "easeInOut", delay: 0.4 });
    return () => controls.stop();
  }, [inView, pos]);

  return (
    <div ref={ref} className="relative aspect-[16/11] select-none overflow-hidden rounded-[2rem] shadow-[0_50px_100px_-50px_rgba(27,25,22,0.6)]">
      <div className="absolute inset-0">
        <SmileArt variant="after" />
      </div>
      <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
        <SmileArt variant="before" />
      </motion.div>

      <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-ivory backdrop-blur">
        Antes
      </span>
      <span className="absolute right-5 top-5 rounded-full bg-ivory/80 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-ink backdrop-blur">
        Después
      </span>

      <motion.div className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-ivory" style={{ left }}>
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/80 bg-ivory/30 text-ivory shadow-xl backdrop-blur-md">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </motion.div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => pos.set(Number(e.target.value))}
        aria-label="Comparar antes y después"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
