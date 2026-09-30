"use client";

import { animate, motion, useInView, useMotionValue, useTransform, type HTMLMotionProps } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Título que aparece palabra por palabra, con máscara. */
export function SplitWords({
  text,
  className,
  delay = 0,
  as = "h2",
  immediate = false,
  wordClassName = "",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  immediate?: boolean;
  wordClassName?: string;
}) {
  const Tag = motion[as];
  const words = text.split(" ");
  const trigger = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "-60px" } };

  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden>
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 1.1, ease } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => Math.round(v).toLocaleString("es-EC") + suffix);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 2.2, ease });
    return () => controls.stop();
  }, [inView, to, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${light ? "text-gold-light" : "text-gold-deep"}`}>
      <span className={`h-px w-8 ${light ? "bg-gold-light" : "bg-gold"}`} />
      {children}
    </div>
  );
}
