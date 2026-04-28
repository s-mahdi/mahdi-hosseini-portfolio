import { buildPageMetadata } from "@/lib/metadata";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = buildPageMetadata({
  title: "Experience",
  description:
    "Experience timeline across Neoxi, Shop-Ware, Coffee, Satek, and earlier work.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <section className="container py-14 sm:py-16">
      <SectionHeading
        description="Reverse-chronological experience focused on the outcomes, technology choices, and case-study links that matter most."
        eyebrow="Experience"
        title="Delivery across enterprise SaaS, collaboration, healthcare, and platform work."
      />
      <div className="mt-8">
        <ExperienceTimeline />
      </div>
    </section>
  );
}
