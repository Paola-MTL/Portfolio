import Hero from "@/components/Hero";
import ProjectsIndex from "@/components/ProjectsIndex";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsIndex id="projects" enableHomeGesture={false} />
    </>
  );
}
