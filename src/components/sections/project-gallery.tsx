"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory } from "@/content/types";
import { filterProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/sections/project-card";
import { MotionReveal } from "@/components/sections/motion-reveal";

export function ProjectGallery({
  categories,
  projects,
}: {
  categories: ProjectCategory[];
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const visibleProjects = useMemo(
    () => filterProjects(projects, activeCategory),
    [activeCategory, projects],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            className="rounded-full"
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
            variant={activeCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <MotionReveal delay={index * 0.03} key={project.slug}>
            <ProjectCard project={project} />
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}
