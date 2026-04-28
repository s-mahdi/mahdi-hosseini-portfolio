import { experience } from "@/content/experience";
import { caseStudies } from "@/content/case-studies";
import { WorkTimelineEntry } from "@/components/sections/work-timeline-entry";

export function WorkTimeline() {
  const studyMap = Object.fromEntries(caseStudies.map((s) => [s.slug, s]));

  return (
    <div className="relative border-l border-sky-400/15 pl-7 space-y-4">
      {experience.map((entry) => (
        <WorkTimelineEntry
          caseStudy={entry.caseStudySlug ? studyMap[entry.caseStudySlug] : undefined}
          entry={entry}
          key={`${entry.company}-${entry.period}`}
        />
      ))}
    </div>
  );
}
