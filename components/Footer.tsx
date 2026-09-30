import Link from "next/link";
import { services, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-24 text-ivory/80">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 border-b border-ivory/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-5xl text-ivory">{site.name}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">{site.tagline}.</p>
            <div className="mt-8 flex gap-3">
              {[
                { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: site.social.facebook, Icon: FacebookIcon, label: "Facebook" },
                { href: site.social.tiktok, Icon: TikTokIcon, label: "TikTok" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 transition-colors duration-500 hover:border-gold hover:text-gold-light"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold-light">Tratamientos</p>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="transition-colors hover:text-ivory">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold-light">Visítanos</p>
            <address className="space-y-1 text-sm not-italic">
              <p>{site.address.street}</p>
              <p>
                {site.address.city}, {site.address.region} · {site.address.country}
              </p>
            </address>
            <ul className="mt-5 space-y-1 text-sm">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-6 border-b border-ivory/5 py-1.5">
                  <span>{h.days}</span>
                  <span className="text-ivory/50">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <a href={`tel:+${site.whatsapp}`} className="hover:text-ivory">{site.phoneDisplay}</a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-ivory">{site.email}</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-xs text-ivory/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. Todos los derechos reservados.</p>
          <p>Diseño y desarrollo: {site.agency}</p>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-serif text-[28vw] leading-[0.75] text-ivory/[0.04]"
      >
        {site.name}
      </p>
    </footer>
  );
}
