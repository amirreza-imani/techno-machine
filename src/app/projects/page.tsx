import ProjectsCTA from "@/components/projects/ProjectsCTA";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </>
  );
}
