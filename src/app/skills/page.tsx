import { buildPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/sections/section-heading";
import { SkillMatrix } from "@/components/sections/skill-matrix";

export const metadata = buildPageMetadata({
  title: "Skills",
  description:
    "Capability-based skills across frontend architecture, design systems, data and state, authentication, testing, CI/CD, observability, and full-stack infrastructure.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <section className="container py-14 sm:py-16">
      <SectionHeading
        description="This page groups tools and technologies by the type of engineering problem they solve, then anchors each area to real project evidence."
        eyebrow="Skills"
        title="Capability-based rather than logo-based."
      />
      <div className="mt-8">
        <SkillMatrix />
      </div>
    </section>
  );
}
