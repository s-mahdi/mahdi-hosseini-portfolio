import type { CaseStudy } from "@/content/types";
import { Card } from "@/components/ui/card";
import { TechStackChips } from "@/components/sections/tech-stack-chips";

export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <Card className="p-8 sm:p-10">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          <span>{study.role}</span>
          <span>•</span>
          <span>{study.period}</span>
          <span>•</span>
          <span>{study.productType}</span>
        </div>
        <div className="space-y-3">
          <h1 className="max-w-4xl text-balance font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            {study.name}
          </h1>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
            Company: {study.company}
          </p>
          <p className="max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">
            {study.summary}
          </p>
        </div>
        <TechStackChips items={study.stack} />
      </div>
    </Card>
  );
}
