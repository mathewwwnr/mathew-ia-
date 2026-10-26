# MinessUP.IA — Video "Dos restaurantes" (HyperFrames)

Anuncio vertical 1080×1920, 30 fps, 31,6 s. Compara un restaurante tradicional con uno que trabaja con agentes de IA y cierra con la marca MinessUP.IA.

**Video final:** `renders/minessup-restaurantes-ia.mp4`

## Estructura

| Archivo | Escena | Tiempo |
|---|---|---|
| `compositions/s1-intro.html` | Dos restaurantes, contraste | 0 – 3,7 s |
| `compositions/s2-tradicional.html` | Restaurante tradicional saturado | 3,7 – 10 s |
| `compositions/s3-transicion.html` | Del caos al orden | 10 – 13,1 s |
| `compositions/s4-agentes.html` | 4 agentes de IA | 13,1 – 22,2 s |
| `compositions/s5-comparacion.html` | Comparación final | 22,2 – 27 s |
| `compositions/s6-cierre.html` | Logo, CTA y cierre | 27 – 31,6 s |
| `compositions/fondo.html` | Fondo de marca (toda la pieza) | 0 – 31,6 s |
| `index.html` | Monta las escenas, la voz, la música y los efectos | |

Identidad visual tomada de la landing de Minessup (rama `claude/gifted-ritchie-rv5n0o`, carpeta `minessup/`): azul marino `#000a2e` / `#001240`, degradado cian `#9ad6f5 → #2bb6ea → #0a7fd0`, texto `#f4f8ff` / `#c6ddff`, tipografías Sora + Inter, y el logo original `assets/brand/minessup-logo.png` sin modificar.

## Audio

- **Voz:** ElevenLabs, voz "Adam - Dominant, Firm" (`pNInz6obpgDQGcFmaJgB`), modelo `eleven_multilingual_v2`. Se generaron 2 tomas; se usa `assets/audio/adam_take1.mp3` (la toma 2 queda como alternativa). La toma se corta en sus pausas y cada frase se coloca en su escena (`vo-1` … `vo-7` en `index.html`).
- **Transcripción por palabra:** `assets/transcript/voz-adam-palabras.json` (ElevenLabs Scribe).
- **Música:** ElevenLabs Music v2.5, instrumental, `assets/audio/musica-elevenlabs.mp3`. Baja a 0,18 bajo la voz y sube a ~0,4 en las pausas (`data-automation` del `<audio id="music">`).
- **Efectos:** `assets/sfx/` (Pixabay Content License, ver `assets/sfx/CREDITS.md`).
- Mezcla medida en el MP4: −17,3 LUFS integrados, pico −1,5 dBFS, sin clipping.

## Editar y volver a renderizar

Requisitos: Node.js 22+ y FFmpeg.

```bash
npx hyperframes@0.8.204 preview     # vista previa con edición en vivo
npx hyperframes@0.8.204 check       # validación
npx hyperframes@0.8.204 render --fps 30 --quality delivery -o renders/minessup-restaurantes-ia.mp4
```

- Textos: editar directamente en cada `compositions/sX-*.html`.
- Tiempos de animación: el `<script>` de cada escena (segundos locales a la escena).
- Tiempos de voz/efectos: atributos `data-start`, `data-media-start`, `data-duration`, `data-volume` en `index.html`.
- GSAP está incluido localmente en `assets/vendor/gsap.min.js` (el render no depende de internet).
