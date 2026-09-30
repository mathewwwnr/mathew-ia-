"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { services, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const slots = ["Mañana", "Tarde", "Sábado"];

type Fields = { name: string; phone: string; service: string; date: string; slot: string; notes: string };

export default function BookingForm({ defaultService = "" }: { defaultService?: string }) {
  const [f, setF] = useState<Fields>({ name: "", phone: "", service: defaultService, date: "", slot: "Mañana", notes: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (f.name.trim().length < 3) next.name = "Escribe tu nombre completo";
    if (f.phone.replace(/\D/g, "").length < 9) next.phone = "Revisa tu número de celular";
    if (!f.service) next.service = "Selecciona un tratamiento";
    setErrors(next);
    if (Object.keys(next).length) return;

    const date = f.date ? new Date(f.date + "T12:00:00").toLocaleDateString("es-EC", { weekday: "long", day: "numeric", month: "long" }) : "a convenir";
    const msg = [
      "Hola, quiero agendar una cita.",
      `• Nombre: ${f.name.trim()}`,
      `• Celular: ${f.phone.trim()}`,
      `• Tratamiento: ${f.service}`,
      `• Fecha preferida: ${date} (${f.slot.toLowerCase()})`,
      f.notes.trim() ? `• Comentario: ${f.notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[28rem] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.15 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ivory"
            >
              <Check className="h-7 w-7" />
            </motion.span>
            <p className="mt-6 font-serif text-3xl">Solicitud lista</p>
            <p className="mt-3 max-w-sm text-sm text-stone">
              Abrimos WhatsApp con tus datos. Envía el mensaje y te confirmamos el horario disponible.
            </p>
            <button onClick={() => setSent(false)} className="mt-8 text-sm text-gold-deep underline underline-offset-4">
              Editar solicitud
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="Nombre completo" error={errors.name}>
                <input value={f.name} onChange={set("name")} autoComplete="name" className={inputCls} placeholder="Tu nombre" />
              </Field>
              <Field label="Celular" error={errors.phone}>
                <input value={f.phone} onChange={set("phone")} type="tel" inputMode="tel" autoComplete="tel" className={inputCls} placeholder="09X XXX XXXX" />
              </Field>
            </div>

            <Field label="Tratamiento de interés" error={errors.service}>
              <select value={f.service} onChange={set("service")} className={`${inputCls} appearance-none`}>
                <option value="">Selecciona una opción</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Valoración general">Aún no lo sé, quiero una valoración</option>
              </select>
            </Field>

            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="Fecha preferida">
                <input type="date" min={today} value={f.date} onChange={set("date")} className={inputCls} />
              </Field>
              <fieldset>
                <legend className={labelCls}>Horario</legend>
                <div className="mt-3 flex gap-2">
                  {slots.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setF((p) => ({ ...p, slot: s }))}
                      aria-pressed={f.slot === s}
                      className={`flex-1 rounded-full border px-3 py-2.5 text-sm transition-all duration-300 ${
                        f.slot === s ? "border-ink bg-ink text-ivory" : "border-ink/15 hover:border-gold"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <Field label="Comentario (opcional)">
              <textarea value={f.notes} onChange={set("notes")} rows={2} className={`${inputCls} resize-none`} placeholder="Cuéntanos brevemente tu caso" />
            </Field>

            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-ink py-5 text-sm font-medium tracking-wide text-ivory"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#1f8f55] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:scale-x-100" />
              <WhatsAppIcon className="relative h-5 w-5" />
              <span className="relative">Solicitar cita por WhatsApp</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
            <p className="text-center text-xs text-stone">Tus datos se usan únicamente para coordinar tu cita.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const labelCls = "text-[11px] font-semibold uppercase tracking-[0.25em] text-stone";
const inputCls =
  "mt-3 w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-stone/50 focus:border-gold";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-2 block text-xs text-red-700">
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
