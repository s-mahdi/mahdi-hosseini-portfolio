"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { CaseStudy, ExperienceEntry } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface WorkTimelineEntryProps {
  entry: ExperienceEntry;
  caseStudy?: CaseStudy;
}

export function WorkTimelineEntry({ entry, caseStudy }: WorkTimelineEntryProps) {
  const [open, setOpen] = useState(false);

  const summary = caseStudy?.summary ?? entry.outcomes[0] ?? "";
  const measurableResults = caseStudy?.measurableResults ?? entry.outcomes;
  const technicalHighlights = caseStudy?.technicalHighlights ?? [];
  const stack = caseStudy?.stack ?? entry.stack;

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-[30px] top-[22px] h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_theme(colors.sky.400)]" />

      <button
        aria-expanded={open}
        className={cn(
          "w-full rounded-xl border p-5 text-left transition-colors duration-200",
          open
            ? "border-sky-400/60 bg-muted/30"
            : "border-border bg-muted/10 hover:border-sky-400/30 hover:bg-muted/20",
        )}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {entry.period} · {entry.location}
            </p>
            <h3 className="font-heading text-xl tracking-tight text-foreground">
              {entry.company}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">{entry.role}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{summary}</p>
          </div>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            className="mt-1 flex-shrink-0 text-sky-400"
            transition={{ duration: 0.2 }}
          >
            ▾
          </motion.span>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              className="overflow-hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="mt-5 space-y-4 border-t border-border pt-5">
                {measurableResults.length > 0 && (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                      Results
                    </p>
                    <ul className="space-y-1">
                      {measurableResults.map((result) => (
                        <li
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          key={result}
                        >
                          <span className="mt-1 text-sky-400">↑</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {technicalHighlights.length > 0 && (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Technical highlights
                    </p>
                    <ul className="space-y-1">
                      {technicalHighlights.map((highlight) => (
                        <li
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          key={highlight}
                        >
                          <span className="mt-1 text-sky-400/60">›</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 pt-1">
                  {stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
