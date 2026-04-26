import { describe, expect, it } from "vitest";

import { caseStudies, featuredCaseStudySlugs } from "@/content/case-studies";

describe("portfolio content integrity", () => {
  it("includes the six required flagship case studies", () => {
    expect(caseStudies).toHaveLength(6);
    expect(caseStudies.map((study) => study.slug)).toEqual(
      expect.arrayContaining([
        "reolink-neoxi",
        "jamloop",
        "shop-ware",
        "mojito-mint",
        "coffee-uniplato",
        "satek",
      ]),
    );
  });

  it("keeps featured case studies aligned with the case study collection", () => {
    const slugs = new Set(caseStudies.map((study) => study.slug));

    expect(featuredCaseStudySlugs.every((slug) => slugs.has(slug))).toBe(true);
    expect(featuredCaseStudySlugs).toHaveLength(6);
  });
});
