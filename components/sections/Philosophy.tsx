"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Eyebrow, Reveal } from "../motion";

const MANIFESTO =
  "Creemos que una buena sonrisa no se nota por ser perfecta, sino por ser tuya. Por eso cada plan empieza escuchándote, midiendo tu rostro y mostrándote el resultado antes de tocar un solo diente.";

const pillars = [
  { n: "I", title: "Diagnóstico digital", text: "Fotografía clínica, escaneo y radiografía para decidir con datos, no con suposiciones." },
  { n: "II", title: "Plan transparente", text: "Recibes por escrito las etapas, el número de citas y las alternativas disponibles." },
  { n: "III", title: "Bioseguridad", text: "Protocolos de esterilización y material descartable en cada procedimiento." },
  { n: "IV", title: "Seguimiento", text: "Controles programados después del tratamiento para cuidar tu resultado." },
];

export default function Philosophy() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = MANIFESTO.split(" ");

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ivory md:py-40">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow light>Nuestra filosofía</Eyebrow>
        <p ref={ref} className="mt-10 max-w-5xl font-serif text-[clamp(2rem,4.4vw,3.9rem)] font-light leading-[1.15]">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl bg-ivory/10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1} className="bg-ink p-8 md:p-10">
              <p className="font-serif text-2xl italic text-gold-light">{p.n}</p>
              <h3 className="mt-10 font-serif text-3xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/60">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
