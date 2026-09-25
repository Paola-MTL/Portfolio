"use client";

import { MotionConfig } from "framer-motion";

// Honors the OS "Reduce Motion" setting for every framer-motion animation
// (transforms/layout are skipped; opacity still fades), per Apple's HIG.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
