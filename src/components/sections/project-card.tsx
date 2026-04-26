import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";

import type { Project } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>
          <h3 className="font-heading text-2xl tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="text-sm font-medium text-foreground">{project.domain}</p>
          <p className="text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Key outcomes
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
            {project.keyOutcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags
            .filter((tag) => tag !== "All")
            .map((tag) => (
              <Badge className="bg-background" key={tag}>
                {tag}
              </Badge>
            ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.caseStudySlug ? (
          <Button asChild variant="outline">
            <Link href={`/case-studies/${project.caseStudySlug}`}>
              <FolderOpen className="h-4 w-4" />
              Case study
            </Link>
          </Button>
        ) : null}
        {project.links?.github ? (
          <Button asChild variant="ghost">
            <Link href={project.links.github} rel="noreferrer" target="_blank">
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
        {project.links?.demo ? (
          <Button asChild variant="ghost">
            <Link href={project.links.demo} rel="noreferrer" target="_blank">
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
