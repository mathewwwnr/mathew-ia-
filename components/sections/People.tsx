"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { team, testimonials } from "@/lib/site";
import { PortraitPlaceholder } from "../art";
import { Eyebrow, Reveal, SplitWords } from "../motion";

const steps = [
  { title: "Conversación", text: "Nos cuentas qué te preocupa y qué te gustaría cambiar." },
  { title: "Diagnóstico", text: "Examen clínico, fotografías y estudios de imagen necesarios." },
  { title: "Plan por escrito", text: "Etapas, número de citas, alternativas y formas de pago." },
  { title: "Tratamiento", text: "Iniciamos cuando tienes claro cada paso y das tu aprobación." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Eyebrow>Tu primera visita</Eyebrow>
      <SplitWords text="Cuatro pasos, cero sorpresas." className="mt-6 max-w-3xl font-serif text-5xl font-light leading-[1.02] md:text-6xl" />

      <div ref={ref} className="relative mt-20">
        <div className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-ink/10 md:block" />
        <motion.div style={{ scaleX }} className="absolute left-0 right-0 top-[1.15rem] hidden h-px origin-left bg-gold md:block" />
        <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="relative list-none">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-ivory font-serif text-sm italic text-gold-deep">
                  {i + 1}
                </span>
                <h3 className="mt-8 font-serif text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="equipo" className="scroll-mt-24 bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>Equipo</Eyebrow>
            <SplitWords text="Especialistas, no generalistas." className="mt-6 font-serif text-5xl font-light leading-[1.02] md:text-6xl" />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-stone md:ml-auto">
              Cada tratamiento lo realiza el profesional formado en esa área. Tu caso se discute en equipo cuando requiere
              más de una especialidad.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1} className={i % 2 ? "lg:mt-16" : ""}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <PortraitPlaceholder initials={m.initials} index={i} />
                <h3 className="mt-5 font-serif text-2xl leading-tight">{m.name}</h3>
                <p className="mt-1 text-sm text-stone">{m.role}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section
      id="opiniones"
      className="relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p aria-hidden className="pointer-events-none absolute -top-20 left-4 font-serif text-[22rem] leading-none text-gold/15 md:left-16">
        “
      </p>
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <div className="flex justify-center">
          <Eyebrow>Opiniones de pacientes</Eyebrow>
        </div>

        <div className="relative mt-12 min-h-[18rem] md:min-h-[15rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: dir * -40, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-serif text-[clamp(1.7rem,3.4vw,2.9rem)] font-light leading-snug">“{t.text}”</blockquote>
              <figcaption className="mt-8 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="mx-3 text-gold">✦</span>
                <span className="text-stone">{t.treatment}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button onClick={() => go(-1)} aria-label="Anterior" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-gold hover:bg-ivory">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Opinión ${i + 1}`}
                className="relative h-1 w-8 overflow-hidden rounded-full bg-ink/10"
              >
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-0 origin-left bg-gold"
                    initial={{ scaleX: paused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused ? 0 : 7, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Siguiente" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-gold hover:bg-ivory">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
