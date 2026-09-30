import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 text-center">
      <p className="font-serif text-[9rem] font-light leading-none text-gold-gradient">404</p>
      <p className="mt-4 font-serif text-3xl">Esta página no existe.</p>
      <Link href="/" className="mt-10 rounded-full bg-ink px-8 py-4 text-sm text-ivory">
        Volver al inicio
      </Link>
    </section>
  );
}
