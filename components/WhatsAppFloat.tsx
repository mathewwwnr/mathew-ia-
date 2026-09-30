"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink("Hola, quisiera información para agendar una cita.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f55] text-white shadow-[0_18px_40px_-12px_rgba(31,143,85,0.6)] md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#1f8f55]/40 [animation-duration:2.6s]" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        ¿Tienes dudas? Escríbenos
      </span>
    </motion.a>
  );
}
