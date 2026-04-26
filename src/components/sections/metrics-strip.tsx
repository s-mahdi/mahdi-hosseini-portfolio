import { proofMetrics } from "@/content/site";
import { Card } from "@/components/ui/card";

export function MetricsStrip() {
  return (
    <section className="container py-8 sm:py-10">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {proofMetrics.map((metric) => (
          <Card className="p-5" key={metric.label}>
            <div className="space-y-2">
              <p className="font-heading text-3xl tracking-tight text-foreground">
                {metric.value}
              </p>
              <p className="text-sm font-medium text-foreground">{metric.label}</p>
              {metric.evidence ? (
                <p className="text-sm leading-6 text-muted-foreground">
                  {metric.evidence}
                </p>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
