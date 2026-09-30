import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { faqs, site } from "@/lib/site";
import BookingForm from "../BookingForm";
import Faq from "../Faq";
import { Eyebrow, Reveal, SplitWords } from "../motion";

export function FaqSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <Eyebrow>Preguntas frecuentes</Eyebrow>
        <SplitWords text="Lo que suelen preguntarnos." className="mt-6 font-serif text-5xl font-light leading-[1.02]" />
      </div>
      <Reveal delay={0.15} className="lg:col-span-8">
        <Faq items={faqs} />
      </Reveal>
    </section>
  );
}

export function Booking({ defaultService }: { defaultService?: string }) {
  return (
    <section id="reservar" className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-ivory md:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gold/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow light>Reserva</Eyebrow>
          <SplitWords text="Agenda tu valoración." className="mt-6 font-serif text-5xl font-light leading-[1.02] md:text-6xl" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-ivory/60">
              Completa el formulario y se abrirá WhatsApp con tu solicitud. Te confirmamos disponibilidad por el mismo medio.
            </p>
            <ul className="mt-12 space-y-6 text-sm">
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-4 w-4 text-gold-light" />
                <a href={`tel:+${site.whatsapp}`} className="hover:text-gold-light">{site.phoneDisplay}</a>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-4 w-4 text-gold-light" />
                <span>
                  {site.address.street}
                  <br />
                  <span className="text-ivory/50">
                    {site.address.city}, {site.address.region}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-4 w-4 text-gold-light" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days} <span className="text-ivory/50">· {h.time}</span>
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-[2rem] bg-ivory p-7 text-ink shadow-2xl md:p-12">
            <BookingForm defaultService={defaultService} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Location() {
  const q = encodeURIComponent(site.mapQuery);
  return (
    <section id="contacto" className="scroll-mt-24 bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Ubicación</Eyebrow>
            <SplitWords text="En el corazón de Machala." className="mt-6 font-serif text-5xl font-light leading-[1.02] md:text-6xl" />
          </div>
          <Reveal>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${q}`}
              target="_blank"
              className="group inline-flex items-center gap-2 text-sm text-gold-deep"
            >
              Abrir en Google Maps
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal>
          {process.env.NEXT_PUBLIC_NO_EMBED ? (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${q}`}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-[22rem] items-end overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-cream via-sand to-gold-light/60 p-8 md:h-[26rem] md:p-12"
            >
              <svg viewBox="0 0 800 400" className="absolute inset-0 h-full w-full text-gold/30" preserveAspectRatio="xMidYMid slice" aria-hidden>
                {Array.from({ length: 14 }).map((_, i) => (
                  <path key={i} d={`M-20 ${40 + i * 28} C 200 ${10 + i * 30}, 500 ${80 + i * 24}, 820 ${30 + i * 29}`} fill="none" stroke="currentColor" strokeWidth="1" />
                ))}
              </svg>
              <span className="absolute left-1/2 top-[42%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-gold-light shadow-2xl transition-transform duration-700 group-hover:-translate-y-[60%]">
                <MapPin className="h-6 w-6" />
              </span>
              <span className="relative">
                <span className="block font-serif text-3xl">{site.address.street}</span>
                <span className="mt-1 block text-sm text-stone">
                  {site.address.city}, {site.address.region} · Ver en Google Maps →
                </span>
              </span>
            </a>
          ) : (
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20">
              <iframe
                title={`Mapa de ${site.fullName}`}
                src={`https://www.google.com/maps?q=${q}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full grayscale-[0.85] sepia-[0.25] md:h-[32rem]"
              />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
