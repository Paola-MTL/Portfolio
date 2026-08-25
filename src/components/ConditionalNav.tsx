"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";

export default function ConditionalNav() {
  const pathname = usePathname();
  if (pathname === "/projects/elia") return null;
  return <Nav />;
}
