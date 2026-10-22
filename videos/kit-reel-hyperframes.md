# Kit para reel estilo "exos.code" con HyperFrames

## 1. Qué tiene el video de referencia (análisis cuadro por cuadro)

Formato: vertical 9:16, 15.9 s, 60 fps. Es motion graphics puro: no hay persona en cámara. Voz en off + música de fondo, subtítulo palabra por palabra.

| Tiempo | Escena | Texto en pantalla | Efecto |
|---|---|---|---|
| 0.0–1.5 s | Hook | "¿Qué es lo *primero* que ven de tu web?" ("primero" en serif cursiva) | Texto entra con escala + fondo de palabras gigantes en outline "LO PRIMERO QUE VEN" girando en diagonal |
| 1.5–2.5 s | Mockup web | "¿LA PORTADA?" | Tarjeta de navegador (captura de la web) entra desde abajo con rebote |
| 2.5–3.0 s | Rechazo | "NO..." | Glitch: barras rojas/cyan, desplazamiento RGB, blur |
| 3.5 s | Rebobinado | "◀◀ REW" + timecode | Efecto VHS, scanlines, ruido |
| 4.0–7.5 s | Chat | "ANTES. CUANDO PIDE RECOMENDACIÓN… Y UN CONOCIDO LE PASA" | Mockup de chat: burbuja entra, "escribiendo…" (3 puntos), respuesta |
| 8.0–9.5 s | Link | "LINK. LO PRIMERO QUE VE ES" | Aparece la tarjeta de vista previa del link dentro del chat |
| 10–11 s | Payoff | "ESTO." (verde) | Zoom a la tarjeta de vista previa + flecha dibujada a mano |
| 11.5–12.5 s | Contraste | "Y SI TUYO SALE ASÍ… TU PORTADA NADIE." ("NADIE." rojo) | Tarjeta rota con borde rojo + ícono ⚠️ temblando |
| 13–15.9 s | Cierre | "MISMO NEGOCIO, MISMA WEB. ¿A CUÁL TOCARÍAS?" | Comparación lado a lado: la tarjeta mala se apaga (opacidad baja), la buena queda |

Constantes visuales:
- Fondo: casi negro `#141414` con textura de grano/scanlines.
- Texto principal: sans bold, blanco, mayúsculas, centrado en el tercio inferior.
- Acento positivo: verde `#22C55E`. Acento negativo: rojo `#EF4444`.
- Rótulo pequeño arriba a la izquierda en mayúsculas espaciadas ("CUANDO TE RECOMIENDAN", "LO PRIMERO QUE VEN", "MISMO NEGOCIO · MISMA WEB").
- Cambio de escena cada 1–2 s. Nunca hay más de 2 s sin movimiento.

Estructura narrativa (es la que hay que copiar, no el tema):
1. Pregunta con respuesta "obvia".
2. "No." (rompe la expectativa).
3. Rebobina a un momento anterior que el cliente no considera.
4. Muestra el caso bueno ("ESTO.").
5. Muestra el caso malo ("NADIE.").
6. Comparación + pregunta final.

---

## 2. Guion adaptado a tu agencia (IA B2B)

Mismo esqueleto, tema: respuesta automática por WhatsApp.

| # | Voz en off / subtítulo | Visual |
|---|---|---|
| 1 | "¿Qué es lo *primero* que recibe tu cliente cuando te escribe?" | Hook + fondo de palabras "LO PRIMERO QUE RECIBE" |
| 2 | "¿Tu catálogo?" | Mockup de catálogo PDF / web |
| 3 | "No…" | Glitch rojo/cyan |
| 4 | "Antes." | ◀◀ REW VHS |
| 5 | "Cuando escribe a las 11 de la noche preguntando precio…" | Chat de WhatsApp, hora 23:04, burbuja "Hola, ¿precio del servicio?" |
| 6 | "…lo primero que recibe es esto." | Respuesta inmediata del agente IA con precio + botón "Agendar" — "ESTO." en verde |
| 7 | "Y si el tuyo responde así… tu catálogo no lo ve nadie." | Mismo chat, dos ticks grises, "visto" a las 10:12 del día siguiente — "NADIE." en rojo |
| 8 | "Mismo negocio. Mismo precio. ¿A cuál le comprarías?" | Los dos chats lado a lado, el malo se apaga |

---

## 3. Instalación de HyperFrames

Requisitos: Node.js 22+ y FFmpeg.

```bash
# Opción A: como plugin de Claude Code
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes

# Opción B: solo las skills
npx skills add heygen-com/hyperframes

# Proyecto
npx hyperframes init reel-whatsapp
cd reel-whatsapp
npx hyperframes preview   # vista previa con recarga en vivo
npx hyperframes render    # exporta MP4
```

Bloques del catálogo útiles para este estilo (catálogo: https://hyperframes.heygen.com/catalog). Busca por categoría: transitions, overlays, titles, kinetic type, captions.

---

## 4. Prompt maestro (pegar en Claude Code con las skills de HyperFrames instaladas)

```
Usa HyperFrames para crear un reel vertical 1080x1920, 30 fps, duración 16 segundos.

ESTILO
- Fondo #141414 con capa de grano animado y scanlines horizontales sutiles (opacidad 6%).
- Detrás de todo, texto gigante en outline (stroke 2px, color #2A2A2A, sin relleno) que repite "LO PRIMERO QUE RECIBE ·" en 6 filas, rotado -12°, cada fila moviéndose en dirección alterna lento (marquee infinito).
- Tipografía principal: "Inter Tight" weight 800, mayúsculas, blanco, 96px, centrada en y=1350.
- Palabra destacada del hook en "Instrument Serif" italic.
- Rótulo de sección arriba a la izquierda (x=60, y=180): "Inter" 600, 26px, mayúsculas, letter-spacing 0.12em, color #BDBDBD.
- Acento positivo #22C55E, negativo #EF4444.
- Subtítulos palabra por palabra sincronizados con el audio voz.mp3 (usa transcripción con timestamps de palabras). Cada palabra entra con scale 0.85→1 y opacity 0→1 en 0.12s, ease "back.out(2)".

AUDIO
- voz.mp3 en pista 1, data-volume 1.
- musica.mp3 en pista 2, data-volume 0.18, con fade out en los últimos 0.8s.
- Efectos en pista 3 (ver lista de timestamps abajo), data-volume 0.6.

ESCENAS
1) 0.0–1.6s HOOK: "¿Qué es lo primero que recibe tu cliente cuando te escribe?" en 3 líneas, "primero" en serif italic. Entra con scale 1.15→1 y blur 12px→0 en 0.35s. SFX: whoosh.mp3 en 0.0s.
2) 1.6–2.6s: imagen catalogo.png dentro de un marco de navegador (barra con 3 puntos y URL), radio 18px, sombra grande. Entra desde y+400 con ease "back.out(1.4)". Subtítulo "¿TU CATÁLOGO?". SFX pop.mp3 en 1.6s.
3) 2.6–3.3s GLITCH: sobre la tarjeta, 3 barras horizontales (roja #EF4444 y cyan #22D3EE) que saltan de posición cada 2 frames, split RGB de la tarjeta (desplazamiento ±8px), jitter de posición. Subtítulo "NO…". SFX glitch.mp3 en 2.6s.
4) 3.3–4.0s REWIND: overlay VHS con texto "◀◀ REW" arriba a la izquierda y timecode "00:05" arriba a la derecha, fuente monoespaciada, ruido de líneas, todo el frame se desplaza rápido hacia atrás. Subtítulo "ANTES.". SFX rewind.mp3 en 3.3s.
5) 4.0–8.0s CHAT: rótulo "CUANDO TE ESCRIBE". Mockup de WhatsApp oscuro (header con avatar gris, nombre "Cliente", estado "en línea", hora 23:04). Burbuja del cliente entra a 4.3s: "Hola, ¿cuánto cuesta el servicio?". Indicador "escribiendo…" con 3 puntos animados de 5.5s a 6.6s. SFX: message-sent.mp3 en 4.3s, typing.mp3 en 5.5s.
6) 8.0–10.8s ESTO: respuesta del negocio entra a 6.7s (SFX message-received.mp3): "¡Hola! El plan inicial es S/ 450. ¿Te agendo una llamada mañana?" + botón "Agendar". A las 8.6s zoom de cámara (scale 1→1.25) hacia esa respuesta. Flecha dibujada a mano (SVG con stroke-dashoffset animado) apuntando a la respuesta. Subtítulo "ESTO." en #22C55E a las 9.8s. SFX ding.mp3 en 9.8s.
7) 10.8–12.8s NADIE: mismo chat, la respuesta desaparece; aparece "visto" con ticks grises y hora "10:12 (al día siguiente)". Tarjeta con borde 3px #EF4444 e ícono de alerta triangular rojo que tiembla (shake ±4px). Subtítulo "Y SI EL TUYO RESPONDE ASÍ…" y luego "NADIE." en #EF4444 a 12.0s. SFX error.mp3 en 11.0s, impacto bass-hit.mp3 en 12.0s.
8) 12.8–16.0s CIERRE: rótulo "MISMO NEGOCIO · MISMO PRECIO". Los dos chats lado a lado escalados al 45%. A 13.8s el chat malo baja a opacidad 0.25. Subtítulo palabra por palabra "MISMO NEGOCIO. MISMO PRECIO. ¿A CUÁL LE COMPRARÍAS?". SFX whoosh.mp3 en 12.8s, riser corto que termina en 15.2s.

Entre cada escena usa transición de corte con micro-zoom (scale 1.04→1, 0.15s). Nada debe quedarse quieto más de 1.5 s.
Al final ejecuta lint y render a output/reel.mp4.
```

---

## 5. Imágenes que necesitas

Todos los mockups (navegador, chat, tarjetas) se construyen en HTML/CSS dentro de HyperFrames; no necesitas imágenes para ellos. Solo necesitas:

| Archivo | Qué es | Cómo conseguirlo |
|---|---|---|
| `catalogo.png` | Captura de un catálogo/web de un cliente (1200x800) | Captura real de un cliente (con permiso) o una web de ejemplo que armes tú |
| `logo.png` | Tu logo en blanco, PNG transparente | El tuyo |
| `avatar.png` (opcional) | Foto de perfil del chat | Dejarlo como círculo gris, como en el original |

Fuentes (gratis en Google Fonts): Inter Tight, Inter, Instrument Serif, JetBrains Mono (para el "REW" y timecode). Son aproximaciones al estilo del video, no las fuentes exactas confirmadas.

---

## 6. Efectos de sonido

Fuentes gratis con licencia de uso comercial: Pixabay Sound Effects (https://pixabay.com/sound-effects/) y Freesound (https://freesound.org, revisa que la licencia sea CC0 o CC-BY).

| Archivo | Término de búsqueda | Momento |
|---|---|---|
| `whoosh.mp3` | "whoosh short" | 0.0 s, 12.8 s |
| `pop.mp3` | "ui pop" | 1.6 s |
| `glitch.mp3` | "glitch digital" | 2.6 s |
| `rewind.mp3` | "vhs rewind" / "tape rewind" | 3.3 s |
| `message-sent.mp3` | "message sent" / "swoosh notification" | 4.3 s |
| `typing.mp3` | "typing bubble" / "phone typing" | 5.5 s |
| `message-received.mp3` | "notification pop" | 6.7 s |
| `ding.mp3` | "success ding" | 9.8 s |
| `error.mp3` | "error buzz ui" | 11.0 s |
| `bass-hit.mp3` | "bass impact" / "boom hit" | 12.0 s |
| `riser.mp3` | "short riser" | 13.8–15.2 s |
| `musica.mp3` | "dark minimal beat" / "tech background" | Todo el video, volumen bajo |

---

## 7. Voz en off

- Graba tú con el celular en un cuarto sin eco, o genera la voz con ElevenLabs.
- Ritmo rápido: el guion de arriba debe durar 14–15 s.
- Para los subtítulos palabra por palabra necesitas timestamps por palabra: transcribe con Whisper (`word_timestamps=True`) y pásale el JSON a Claude junto con el prompt.

---

## 8. Checklist

- [ ] Node 22+ y FFmpeg instalados
- [ ] Skills de HyperFrames instaladas
- [ ] `voz.mp3` grabada + transcripción con timestamps
- [ ] `musica.mp3` + 11 efectos descargados en `assets/sfx/`
- [ ] `catalogo.png` y `logo.png`
- [ ] Pegar el prompt maestro
- [ ] `npx hyperframes preview` → ajustar tiempos
- [ ] `npx hyperframes render`
