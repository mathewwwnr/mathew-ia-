"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const KEY = "demo-banner-closed";

export default function DemoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(site.demo && sessionStorage.getItem(KEY) !== "1");
    } catch {
      setVisible(site.demo);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 flex max-w-[calc(100vw-7rem)] items-center gap-3 rounded-full border border-gold/30 bg-ivory/90 py-2 pl-4 pr-2 text-[11px] text-stone shadow-lg backdrop-blur md:bottom-8 md:left-8">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
      <span className="truncate">Sitio demostrativo · datos de ejemplo · {site.agency}</span>
      <button
        onClick={() => {
          setVisible(false);
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
        }}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-cream"
        aria-label="Cerrar aviso"
      >
        ×
      </button>
    </div>
  );
}
