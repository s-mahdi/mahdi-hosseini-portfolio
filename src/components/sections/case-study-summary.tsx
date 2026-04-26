import type { CaseStudy } from "@/content/types";
import { Card } from "@/components/ui/card";

export function CaseStudySummary({ study }: { study: CaseStudy }) {
  const summary = study.summaryBox;

  return (
    <Card className="p-6">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Product type
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground">{summary.productType}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Team context
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground">{summary.teamContext}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Main responsibility
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground">
            {summary.mainResponsibility}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Main stack
          </p>
          <ul className="mt-2 space-y-1 text-sm leading-6 text-foreground">
            {summary.mainStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Main outcome
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground">{summary.mainOutcome}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Evidence metrics
          </p>
          <ul className="mt-2 space-y-1 text-sm leading-6 text-foreground">
            {summary.evidenceMetrics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
