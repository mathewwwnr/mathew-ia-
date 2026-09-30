import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { ToothLine } from "@/components/art";
import Faq from "@/components/Faq";
import { Eyebrow, Reveal, SplitWords } from "@/components/motion";
import { Booking } from "@/components/sections/Contact";
import { services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} en Machala`,
    description: `${s.short} ${s.name} en ${site.fullName}, Machala, El Oro. Agenda tu valoración por WhatsApp.`,
    alternates: { canonical: `/servicios/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const index = services.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const s = services[index];
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-36 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-gold-light/35 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Link href="/#tratamientos" className="group mb-10 inline-flex items-center gap-2 text-sm text-stone hover:text-ink">
              <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
              Todos los tratamientos
            </Link>
            <Eyebrow>{s.kicker}</Eyebrow>
            <SplitWords
              as="h1"
              immediate
              delay={0.3}
              text={s.name}
              className="mt-6 font-serif text-[clamp(3rem,7vw,6.2rem)] font-light leading-[0.98] tracking-[-0.02em]"
            />
            <Reveal delay={0.6}>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-stone">{s.intro}</p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="#reservar" className="rounded-full bg-ink px-8 py-4 text-sm font-medium text-ivory transition-colors duration-500 hover:bg-gold-deep">
                  Agendar valoración
                </Link>
                <p className="text-sm text-stone">
                  <span className="block text-[11px] uppercase tracking-[0.25em] text-gold-deep">Duración estimada</span>
                  {s.duration}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="lg:col-span-5">
            <div className="arch relative mx-auto flex aspect-[4/5] max-w-sm items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-sand to-gold-light/70">
              <span className="absolute bottom-6 font-serif text-[10rem] italic leading-none text-ivory/50">{String(index + 1).padStart(2, "0")}</span>
              <ToothLine className="relative h-[55%] text-gold-deep" delay={0.8} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-cream/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Indicado para</Eyebrow>
            <SplitWords text="¿Es para ti?" className="mt-6 font-serif text-5xl font-light" />
          </div>
          <ul className="space-y-5 lg:col-span-7">
            {s.forWho.map((item, i) => (
              <Reveal key={item} delay={i * 0.08}>
                <li className="flex items-start gap-4 border-b border-ink/10 pb-5 text-lg">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ivory">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Eyebrow>Por qué con nosotros</Eyebrow>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-gold/20 bg-ivory p-8 transition-shadow duration-700 hover:shadow-[0_30px_60px_-30px_rgba(138,107,60,0.45)]">
                <p className="font-serif text-xl italic text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 font-serif text-3xl">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-ivory md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow light>El proceso</Eyebrow>
          <SplitWords text="Paso a paso." className="mt-6 font-serif text-5xl font-light md:text-6xl" />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ivory/10 md:grid-cols-4">
            {s.steps.map((st, i) => (
              <Reveal key={st.title} delay={i * 0.1} className="bg-ink p-8">
                <li className="list-none">
                  <span className="font-serif text-5xl font-light text-gold-light/60">{i + 1}</span>
                  <h3 className="mt-8 font-serif text-2xl">{st.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">{st.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Dudas frecuentes</Eyebrow>
          <SplitWords text={`Sobre ${s.name.toLowerCase()}.`} className="mt-6 font-serif text-5xl font-light leading-[1.02]" />
        </div>
        <Reveal delay={0.15} className="lg:col-span-8">
          <Faq items={s.faqs} />
        </Reveal>
      </section>

      <Booking defaultService={s.name} />

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Eyebrow>Otros tratamientos</Eyebrow>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.1}>
              <Link href={`/servicios/${o.slug}`} className="group block rounded-3xl border border-ink/10 p-8 transition-colors duration-500 hover:border-gold">
                <div className="flex items-start justify-between">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-stone">{o.kicker}</p>
                  <ArrowUpRight className="h-5 w-5 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-10 font-serif text-3xl">{o.name}</h3>
                <p className="mt-2 text-sm text-stone">{o.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
