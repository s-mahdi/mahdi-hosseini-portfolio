import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p
        className={cn(
          "max-w-3xl text-pretty text-base leading-7 text-muted-foreground",
          align === "center" && "mx-auto",
        )}
      >
        {description}
      </p>
    </div>
  );
}
