import type { Metadata } from "next";
import ProjectsIndex from "@/components/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projects — Paola Cejoco",
  description: "Selected work by Paola Cejoco, UI/UX Designer based in Montreal.",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
