import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/sections/project-card";

export function RelatedProjects({ slugs }: { slugs: string[] }) {
  const related = projects.filter((project) => slugs.includes(project.slug));

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {related.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
