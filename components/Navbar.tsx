"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#tratamientos", label: "Tratamientos" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#opiniones", label: "Opiniones" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > prev && y > 400 && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-700 md:px-8 ${
            solid ? "mt-3 rounded-full border border-gold/20 bg-ivory/80 py-3 shadow-[0_10px_40px_-20px_rgba(27,25,22,0.35)] backdrop-blur-xl md:mx-6 lg:mx-auto" : "py-6"
          }`}
        >
          <Link href="/" className="group flex items-baseline gap-2" aria-label={site.fullName}>
            <span className="font-serif text-3xl leading-none tracking-tight">{site.name}</span>
            <span className="hidden text-[10px] uppercase tracking-[0.35em] text-stone sm:inline">Clínica dental</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="group relative text-[13px] tracking-wide text-ink/80 transition-colors hover:text-ink">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#reservar"
              className="hidden rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-wide text-ivory transition-colors duration-500 hover:bg-gold-deep sm:inline-block"
            >
              Agendar cita
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <span className={`absolute h-px w-5 bg-ink transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-1"}`} />
              <span className={`absolute h-px w-5 bg-ink transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[45] flex flex-col justify-between bg-cream px-6 pb-10 pt-32 lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Móvil">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={l.href} onClick={() => setOpen(false)} className="font-serif text-5xl leading-tight">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="space-y-4">
              <Link href="/#reservar" onClick={() => setOpen(false)} className="block rounded-full bg-ink py-4 text-center text-ivory">
                Agendar cita
              </Link>
              <p className="text-center text-sm text-stone">{site.phoneDisplay}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
