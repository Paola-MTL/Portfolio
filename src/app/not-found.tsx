import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="font-display text-3xl font-medium tracking-tightest sm:text-5xl">
        This page wandered off.
      </h1>
      <Link
        href="/"
        className="mt-4 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-105"
      >
        Back home
      </Link>
    </section>
  );
}
