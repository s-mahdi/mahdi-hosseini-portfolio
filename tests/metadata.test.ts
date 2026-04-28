import { describe, expect, it } from "vitest";

import { buildPageMetadata, buildCaseStudyMetadata } from "@/lib/metadata";

describe("metadata helpers", () => {
  it("builds page metadata with portfolio defaults", () => {
    const metadata = buildPageMetadata({
      title: "Projects",
      description: "Selected frontend engineering work.",
      path: "/projects",
    });

    expect(metadata.title).toBe("Projects | Mahdi Hosseini");
    expect(metadata.description).toBe("Selected frontend engineering work.");
    expect(metadata.openGraph?.url).toBe("https://mahdi-hosseini.dev/projects");
  });

  it("builds case study metadata from project details", () => {
    const metadata = buildCaseStudyMetadata({
      name: "Jamloop",
      summary: "Self-service ad-tech platform case study.",
      slug: "jamloop",
    });

    expect(metadata.title).toBe("Jamloop Case Study | Mahdi Hosseini");
    expect(metadata.description).toContain("Self-service ad-tech platform");
    expect(metadata.twitter).toEqual(
      expect.objectContaining({ card: "summary_large_image" }),
    );
  });
});
