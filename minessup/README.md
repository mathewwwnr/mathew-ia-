# Minessup — web de la agencia

Landing de una página para Minessup (IA + Marketing). HTML, CSS y JS sin dependencias ni compilación.

## Ver en local

Abre `index.html` en el navegador, o ejecuta `npx http-server .` dentro de esta carpeta.

## Completar antes de publicar

Todo se edita en el bloque `CONFIG` al final de `index.html`:

| Campo | Qué poner |
|---|---|
| `whatsapp` | Número solo con dígitos y código de país (ej. `51987654321`). Activa el botón flotante. |
| `calendario` | Enlace de la página de reservas de Google Calendar (Agenda de citas) o Calendly. Vacío = el botón de agenda abre WhatsApp. No uses el enlace `?cid=` del calendario: ese sirve para suscribirse al calendario, no para reservar. |
| `correo`, `instagram`, `linkedin` | Datos de contacto del pie de página. |
| `formularioEndpoint` | URL que recibe los leads en JSON (Formspree, webhook de n8n o Make). Si queda vacío, el formulario abre WhatsApp con los datos. |
| `casos`, `testimonios`, `planes` | Datos reales. Todo texto entre `[corchetes]` se muestra con borde punteado amarillo hasta que lo reemplaces. |

Los testimonios y nombres de clientes requieren su autorización.

## Publicar

Es un sitio estático: sube la carpeta a Vercel, Netlify, Cloudflare Pages o Hostinger y apunta tu dominio.
