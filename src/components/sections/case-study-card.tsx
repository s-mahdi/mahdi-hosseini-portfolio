import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/content/types";
import { Card } from "@/components/ui/card";
import { TechStackChips } from "@/components/sections/tech-stack-chips";
import { Button } from "@/components/ui/button";

export function CaseStudyCard({
  study,
  compact = false,
}: {
  study: CaseStudy;
  compact?: boolean;
}) {
  return (
    <Card className="flex h-full flex-col p-6 sm:p-7">
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            <span>{study.role}</span>
            <span>•</span>
            <span>{study.period}</span>
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-2xl tracking-tight text-foreground">
              {study.name}
            </h3>
            <p className="text-sm font-medium text-foreground">{study.domain}</p>
            <p className="text-pretty text-sm leading-6 text-muted-foreground">
              {study.summary}
            </p>
          </div>
        </div>
        <TechStackChips items={compact ? study.stack.slice(0, 4) : study.stack.slice(0, 6)} />
        {compact ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Main challenge
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {study.mainChallenge}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Main result
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {study.mainResult}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Technical highlights
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                {study.technicalHighlights.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Results
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                {study.measurableResults.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6">
        <Button asChild variant="outline">
          <Link href={`/case-studies/${study.slug}`}>
            Read case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
