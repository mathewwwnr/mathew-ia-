# Jarvis — asesor de ventas de MinessUP.IA

Jarvis es [Harvey](https://github.com/ethanplusai/harvey) (licencia MIT, commit `8023a94`) configurado para MinessUP.IA. Busca negocios, lee sus webs, escribe correos en frío en español, los envía **solo cuando tú los apruebas** y responde a quienes contestan para conseguir una llamada contigo.

## Qué se cambió respecto a Harvey

| Cambio | Archivo |
|---|---|
| Nombre "Jarvis" en todos los prompts y en el arranque | `prompts/*.md`, `harvey/main.py` |
| Comando `jarvis` (además de `harvey`) | `pyproject.toml` |
| Correos y respuestas en español neutro, trato de "usted" | `prompts/writer.md`, `prompts/handler.md` |
| Reconoce bajas en español ("no gracias", "denme de baja", "no me escriba", "no me interesa"…) | `harvey/agents/handler.py`, `harvey/config.py` |
| Pruebas de las bajas en español | `tests/test_opt_out_es.py` |
| Configuración de MinessUP.IA | `harvey.local.yaml` |

## Configuración actual (`harvey.local.yaml`)

- **Persona:** Jarvis, asesor de ventas de MinessUP.IA.
- **Oferta:** Agente de Citas IA en WhatsApp, $500 pago único. Entrada: llamada de diagnóstico gratis de 15 minutos con Mathew Noblecilla.
- **Cliente ideal:** clínicas dentales de 1 a 30 empleados en Guayaquil, Quito, Cuenca y Machala. Dueño, odontólogo director, gerente o administrador.
- **Envío:** Gmail/Workspace, máximo 30 correos al día, de lunes a viernes de 08:00 a 17:00 hora del prospecto, **con aprobación obligatoria**.
- **Horario de silencio:** 21:00–07:00, hora de Ecuador.

## Instalación en Windows

Necesitas Python 3.11 o superior, Git y Claude Code con tu suscripción Pro o Max.

```powershell
git clone https://github.com/mathewwwnr/mathew-ia-.git
cd mathew-ia-
git checkout claude/brave-dirac-44r8rr
cd jarvis
py -3.13 -m venv .venv
.venv\Scripts\activate
pip install -e .
claude login
jarvis status --check
```

## Lo que falta para que envíe correos

1. **Dominio secundario y buzón.** Compra un dominio parecido al tuyo (no uses el principal) y crea un buzón de Google Workspace (~$7/mes). Pon ese correo en `persona.email` de `harvey.local.yaml`.
2. **Gmail.** Crea credenciales OAuth en Google Cloud, ponlas en `.env` (`GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`) y ejecuta `jarvis gmail auth`.
3. **Calentamiento.** Mínimo 14 días calentando el buzón antes del primer correo en frío. Pon la fecha de inicio en `channels.email.warmup.start_date`. Revisa con `jarvis warmup`.
4. **Verificador de correos.** Sin uno, Jarvis marca los correos como "guess" y **nunca los envía**. Reoon da 600 verificaciones gratis al mes: pon `REOON_API_KEY` en `.env`.
5. **Dirección física** de MinessUP.IA en `compliance.postal_address` (va al pie de cada correo en frío).

Copia `.env.example` a `.env` antes de llenar las claves.

## Uso diario

```powershell
jarvis signals --confirm free   # una sola vez: activa las 26 señales gratuitas
jarvis discover        # busca clínicas dentales (fuente gratuita: OpenStreetMap)
jarvis dashboard       # abre el panel en tu navegador
jarvis run             # Jarvis trabaja cada 15 minutos
jarvis outbox          # revisa y aprueba los correos antes de que salgan
```

La fuente gratuita (OpenStreetMap) solo distingue algunos rubros; entre los útiles para ti está `dentist`. Para otros rubros (clínicas estéticas, veterinarias, inmobiliarias) hace falta un proveedor de pago, por ejemplo DataForSEO (`jarvis discover --providers` muestra costos).
