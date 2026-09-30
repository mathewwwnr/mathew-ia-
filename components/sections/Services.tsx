"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, stats } from "@/lib/site";
import { Counter, Eyebrow, Reveal, SplitWords } from "../motion";

export function Marquee() {
  const items = [...services.map((s) => s.name), "Valoración digital"];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-cream/50 py-6" aria-hidden>
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-serif text-3xl italic text-ink/70 md:text-4xl">
            {t}
            <span className="text-base not-italic text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="border-l border-gold/30 pl-6">
            <p className="font-serif text-5xl font-light md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-stone">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section id="tratamientos" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <Eyebrow>Tratamientos</Eyebrow>
          <SplitWords text="Cada tratamiento, planificado al detalle." className="mt-6 font-serif text-5xl font-light leading-[1.02] md:text-6xl" />
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-md text-stone md:ml-auto">
            Antes de iniciar cualquier procedimiento te explicamos el diagnóstico, las alternativas y el número de citas.
            Sin sorpresas.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-gold/20 bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: (i % 3) * 0.12 }}
          >
            <Link
              href={`/servicios/${s.slug}`}
              className="group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden bg-ivory p-8 md:p-10"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-[var(--ease-lux)] group-hover:scale-y-100" />
              <div className="relative flex items-start justify-between">
                <span className="font-serif text-lg italic text-gold transition-colors duration-700 group-hover:text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-all duration-700 group-hover:rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4 text-ink transition-colors duration-700 group-hover:text-ink" />
                </span>
              </div>
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone transition-colors duration-700 group-hover:text-gold-light">
                  {s.kicker}
                </p>
                <h3 className="mt-3 font-serif text-4xl leading-tight transition-colors duration-700 group-hover:text-ivory">{s.name}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone transition-colors duration-700 group-hover:text-ivory/70">
                  {s.short}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
