"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function UnlockForm() {
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(false);

    let res: Response;
    try {
      res = await fetch("/api/elia-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
    } catch {
      setError(true);
      setLoading(false);
      return;
    }

    if (res.ok) {
      const from = searchParams.get("from");
      const destination =
        from && from.startsWith("/") && !from.startsWith("//")
          ? from
          : "/projects/elia";
      // Full page load so the new cookie is sent and the middleware re-runs.
      // router.push would reuse the cached redirect back to this page.
      window.location.assign(destination);
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-white">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/50">
        Protected case study
      </p>
      <h1 className="font-display text-3xl italic sm:text-4xl">
        This project is password protected
      </h1>
      <p className="mt-3 max-w-sm text-sm text-white/60">
        Enter the password to view the Elia case study.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex w-full max-w-xs flex-col items-center gap-3"
      >
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError(false);
          }}
          placeholder="Password"
          autoFocus
          className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-center text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || password.length === 0}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Checking…" : "Unlock"}
        </button>
        {error && (
          <p className="text-sm text-red-300">
            That password isn&apos;t right — try again.
          </p>
        )}
      </form>

      <a
        href="/#projects"
        className="mt-10 text-sm text-white/50 transition-colors hover:text-white"
      >
        ← Back to projects
      </a>
    </section>
  );
}
