import { caseStudies, featuredCaseStudySlugs } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { SectionHeading } from "@/components/sections/section-heading";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { SkillMatrix } from "@/components/sections/skill-matrix";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Senior Frontend Engineer specializing in React, Next.js, TypeScript, enterprise SaaS, authentication, design systems, testing, and CI/CD.",
  path: "/",
});

export default function HomePage() {
  const featured = caseStudies.filter((study) =>
    featuredCaseStudySlugs.includes(study.slug as (typeof featuredCaseStudySlugs)[number]),
  );

  return (
    <>
      <Hero />
      <MetricsStrip />
      <section className="container py-10 sm:py-14">
        <SectionHeading
          description="Six case studies focused on architecture, secure product flows, data-heavy UI, quality systems, and measurable delivery outcomes."
          eyebrow="Featured work"
          title="Flagship case studies for product and engineering leaders."
        />
        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <section className="container py-10 sm:py-14">
        <SectionHeading
          description="Capability areas are grouped around how work gets done in real products, not around a generic logo wall."
          eyebrow="Skills preview"
          title="Evidence-backed senior frontend capabilities."
        />
        <div className="mt-8">
          <SkillMatrix limit={4} />
        </div>
      </section>
      <section className="container py-12 sm:py-16">
        <ContactCta />
      </section>
    </>
  );
}
