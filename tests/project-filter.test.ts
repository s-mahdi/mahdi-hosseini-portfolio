import { describe, expect, it } from "vitest";

import { filterProjects, projectCategories } from "@/lib/projects";
import { projects } from "@/content/projects";

describe("project filtering", () => {
  it("returns archived projects for the Archive filter", () => {
    const archiveProjects = filterProjects(projects, "Archive");

    expect(archiveProjects.length).toBeGreaterThan(0);
    expect(archiveProjects.every((project) => project.archive)).toBe(true);
  });

  it("returns all projects for the All filter", () => {
    expect(filterProjects(projects, "All")).toHaveLength(projects.length);
  });

  it("exposes the requested project categories", () => {
    expect(projectCategories).toContain("Authentication");
    expect(projectCategories).toContain("Legacy Modernization");
    expect(projectCategories[0]).toBe("All");
  });
});
