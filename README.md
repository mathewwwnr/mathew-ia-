# Áurea Clínica Dental — sitio demo (Machala, Ecuador)

Sitio de clínica dental de gama alta, construido como pieza demostrativa para prospectos.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · Motion (Framer Motion) · Lenis (scroll suave)

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Despliegue recomendado: Vercel (importar el repo, sin configuración adicional).

## Qué incluye

- Home: hero con titular animado palabra por palabra, arco con parallax y diente dibujado en línea dorada, marquee, contadores, tratamientos, manifiesto que se ilumina con el scroll, comparador antes/después, proceso, equipo, testimonios, FAQ, reserva y mapa.
- 6 páginas de tratamiento (`/servicios/[slug]`) con metadatos SEO locales ("... en Machala").
- Reserva: formulario con validación que abre WhatsApp con el mensaje prellenado.
- Botón flotante de WhatsApp, transición entre páginas, menú móvil animado.
- SEO: JSON-LD `Dentist`, `sitemap.xml`, `robots.txt`.
- Respeta `prefers-reduced-motion`.

## Adaptarlo a una clínica real

Todo el contenido está en **`lib/site.ts`**:

1. Cambia `demo: true` a `false` (activa indexación en Google y oculta el aviso de demo).
2. Reemplaza nombre, WhatsApp, dirección, horarios, redes, `url` y `mapQuery`.
3. Sustituye `stats`, `team` y `testimonials` (hoy son datos de ejemplo).
4. Revisa los textos de cada tratamiento con el odontólogo responsable.
5. Fotos: sustituye `PortraitPlaceholder` (equipo) y `SmileArt` (antes/después) en `components/art.tsx` por imágenes reales con `next/image`, colocándolas en `public/`. Las fotos de pacientes requieren su autorización.

## Exportación estática

```bash
STATIC_EXPORT=1 NEXT_PUBLIC_NO_EMBED=1 npm run build   # genera /out
```

`NEXT_PUBLIC_NO_EMBED=1` reemplaza el mapa embebido de Google por una tarjeta con enlace (para hostings que bloquean iframes).
