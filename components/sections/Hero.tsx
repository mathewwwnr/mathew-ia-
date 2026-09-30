"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { ToothLine } from "../art";
import { SplitWords } from "../motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const archScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-32 md:pt-36">
      {/* luz ambiental */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-gold-light/40 blur-[120px]"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cream blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-ivory/60 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold-deep backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Machala · El Oro · Ecuador
          </motion.div>

          <h1 className="font-serif text-[clamp(3.1rem,8vw,7.2rem)] font-light leading-[0.95] tracking-[-0.02em]">
            <SplitWords as="span" text="La sonrisa" immediate delay={0.35} className="block" />
            <SplitWords as="span" text="que tu rostro" immediate delay={0.5} className="block" />
            <SplitWords as="span" text="merece." immediate delay={0.65} className="block italic" wordClassName="text-gold-gradient pr-[0.08em]" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 1.1 }}
            className="mt-8 max-w-lg text-[17px] leading-relaxed text-stone"
          >
            Odontología estética, implantes y ortodoncia con planificación digital. Ves tu resultado antes de empezar y
            sabes exactamente qué vamos a hacer en cada cita.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#reservar"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink px-8 py-4 text-sm font-medium tracking-wide text-ivory"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-gold-deep transition-transform duration-700 ease-[var(--ease-lux)] group-hover:scale-y-100" />
              <span className="relative">Agendar valoración</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link href="/#tratamientos" className="group inline-flex items-center gap-2 px-2 py-4 text-sm tracking-wide text-ink">
              Ver tratamientos
              <ArrowDownRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] text-stone"
          >
            {["Diseño digital", "Implantes guiados", "Ortodoncia invisible"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-gold">✦</span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div style={{ y: archY, scale: archScale }} className="relative mx-auto w-full max-w-md lg:col-span-5">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0 round 999px 999px 24px 24px)" }}
            animate={{ clipPath: "inset(0% 0 0 0 round 999px 999px 24px 24px)" }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="arch relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-cream via-sand to-gold-light/70"
          >
            <motion.svg
              viewBox="0 0 400 400"
              className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-gold/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              aria-hidden
            >
              {[80, 120, 160, 190].map((r, i) => (
                <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray={i % 2 ? "2 6" : "none"} />
              ))}
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <ToothLine className="h-[58%] text-gold-deep" delay={1.2} />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ivory/40 to-transparent" />
          </motion.div>

          <FloatCard className="-left-6 top-[18%] md:-left-16" delay={1.8} float={-10}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold-deep">Antes de empezar</p>
            <p className="mt-1 font-serif text-xl leading-tight">Simulación digital de tu sonrisa</p>
          </FloatCard>
          <FloatCard className="-right-4 bottom-[14%] md:-right-10" delay={2.05} float={10}>
            <p className="font-serif text-3xl leading-none">
              6<span className="text-gold">.</span>
            </p>
            <p className="mt-1 text-xs text-stone">especialidades en un mismo lugar</p>
          </FloatCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="relative mx-auto mt-16 hidden max-w-7xl items-center gap-4 px-8 pb-10 text-[11px] uppercase tracking-[0.3em] text-stone md:flex"
      >
        <span className="relative h-10 w-px overflow-hidden bg-ink/10">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-px bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        Desliza para descubrir
      </motion.div>
    </section>
  );
}

function FloatCard({
  children,
  className,
  delay,
  float,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  float: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease, delay }}
      className={`absolute max-w-[13rem] ${className}`}
    >
      <motion.div
        animate={{ y: [0, float, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-white/60 bg-ivory/75 p-5 shadow-[0_30px_60px_-25px_rgba(27,25,22,0.35)] backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
