"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (
    pathname === "/" ||
    pathname === "/projects" ||
    pathname === "/projects/elia" ||
    pathname === "/projects/truxweb" ||
    pathname === "/projects/vf-immigration" ||
    pathname === "/about" ||
    pathname === "/elia-unlock"
  )
    return null;
  return <Footer />;
}
