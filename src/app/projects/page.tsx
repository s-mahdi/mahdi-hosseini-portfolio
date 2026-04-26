import { projects } from "@/content/projects";
import { buildPageMetadata } from "@/lib/metadata";
import { projectCategories } from "@/lib/projects";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Filterable project gallery covering flagship SaaS work, platform work, testing, infrastructure, mobile, and archived projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="container py-14 sm:py-16">
      <SectionHeading
        description="The project gallery mixes flagship case-study work with smaller platform, testing, infrastructure, and archive projects without pretending every item is the same kind of engagement."
        eyebrow="Projects"
        title="Filter by capability, domain, or maturity."
      />
      <div className="mt-8">
        <ProjectGallery categories={projectCategories} projects={projects} />
      </div>
    </section>
  );
}
