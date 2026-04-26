import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { experience } from "@/content/experience";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  return (
    <div className="space-y-5">
      {experience.map((item) => (
        <Card className="p-6" key={`${item.company}-${item.period}`}>
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span>{item.period}</span>
                <span>•</span>
                <span>{item.location}</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl tracking-tight text-foreground">
                  {item.company}
                </h3>
                <p className="text-sm font-medium text-foreground">{item.role}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              {item.caseStudySlug ? (
                <Link
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  href={`/case-studies/${item.caseStudySlug}`}
                >
                  Related case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
