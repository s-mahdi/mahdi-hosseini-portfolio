import type { Project, ProjectCategory } from "@/content/types";

export const projectCategories: ProjectCategory[] = [
  "All",
  "Frontend Architecture",
  "Next.js",
  "React",
  "Design Systems",
  "Authentication",
  "Testing",
  "CI/CD",
  "Full-stack",
  "Infrastructure",
  "Data Visualization",
  "Mobile",
  "Legacy Modernization",
  "Archive",
];

export function filterProjects(projects: Project[], filter: ProjectCategory) {
  if (filter === "All") {
    return projects;
  }

  if (filter === "Archive") {
    return projects.filter((project) => project.archive);
  }

  return projects.filter((project) => project.tags.includes(filter));
}
