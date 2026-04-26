import { skillCategories } from "@/content/skills";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillMatrix({ limit }: { limit?: number }) {
  const categories = typeof limit === "number" ? skillCategories.slice(0, limit) : skillCategories;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {categories.map((category) => (
        <Card className="p-6" key={category.title}>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl tracking-tight text-foreground">
                {category.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {category.intro}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Proof
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                {category.proof.map((proof) => (
                  <li key={proof}>{proof}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
