import { Card } from "@/components/ui/card";

export function ImpactGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <Card className="p-5" key={item}>
          <p className="text-sm leading-6 text-foreground">{item}</p>
        </Card>
      ))}
    </div>
  );
}
