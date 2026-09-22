"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";

const CASE_STUDY_PATHS = [
  "/projects/elia",
  "/projects/truxweb",
  "/projects/vf-immigration",
  "/projects/kc-rentals",
];

export default function ConditionalNav() {
  const pathname = usePathname();
  if (CASE_STUDY_PATHS.includes(pathname) || pathname === "/about" || pathname === "/elia-unlock") return null;
  return <Nav />;
}
