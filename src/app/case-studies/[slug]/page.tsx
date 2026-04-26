import { notFound } from "next/navigation";

import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { buildCaseStudyMetadata } from "@/lib/metadata";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { CaseStudyHeader } from "@/components/sections/case-study-header";
import { CaseStudySummary } from "@/components/sections/case-study-summary";
import { ImpactGrid } from "@/components/sections/impact-grid";
import { RelatedProjects } from "@/components/sections/related-projects";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return undefined;
  }

  return buildCaseStudyMetadata({
    name: study.name,
    summary: study.summary,
    slug: study.slug,
  });
}

const sectionOrder = [
  "context",
  "challenge",
  "role",
  "technicalDecisions",
  "keyFeatures",
  "architectureHighlights",
  "impact",
  "techStack",
  "screenshots",
  "lessonsLearned",
] as const;

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="container py-14 sm:py-16">
      <div className="space-y-6">
        <CaseStudyHeader study={study} />
        <CaseStudySummary study={study} />
        <section className="space-y-4">
          <SectionHeading
            description="The highest-signal outcomes and measurable changes delivered on this engagement."
            eyebrow="Impact"
            title="Results at a glance"
          />
          <ImpactGrid items={study.measurableResults} />
        </section>
        <div className="grid gap-5 lg:grid-cols-2">
          {sectionOrder.map((key) => {
            const section = study.sections[key];

            return (
              <Card className="p-6" key={section.title}>
                <div className="space-y-4">
                  <h2 className="font-heading text-2xl tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <section className="space-y-4">
          <SectionHeading
            description="Additional projects that reinforce similar strengths in architecture, frontend systems, or cross-platform delivery."
            eyebrow="Related projects"
            title="Adjacent work"
          />
          <RelatedProjects slugs={study.relatedProjectSlugs} />
        </section>
      </div>
    </section>
  );
}
