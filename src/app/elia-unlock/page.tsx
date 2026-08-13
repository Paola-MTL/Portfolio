import type { Metadata } from "next";
import { Suspense } from "react";
import UnlockForm from "./UnlockForm";

export const metadata: Metadata = {
  title: "Protected project — Paola Cejoco",
  robots: { index: false, follow: false },
};

export default function EliaUnlockPage() {
  return (
    <Suspense fallback={null}>
      <UnlockForm />
    </Suspense>
  );
}
