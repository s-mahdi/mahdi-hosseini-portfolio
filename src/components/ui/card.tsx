import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-border/80 bg-card/80 shadow-panel backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
