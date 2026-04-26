import { caseStudies } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/metadata";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = buildPageMetadata({
  title: "Case Studies",
  description:
    "Case studies covering frontend architecture, authentication, design systems, testing, CI/CD, and enterprise SaaS delivery.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <section className="container py-14 sm:py-16">
      <SectionHeading
        description="Each case study captures the product context, the technical decisions behind the work, and the impact that mattered."
        eyebrow="Case studies"
        title="Technical depth beyond the 30-second recruiter view."
      />
      <div className="mt-8 grid gap-5 xl:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard compact key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
