import { buildPageMetadata } from "@/lib/metadata";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "About Mahdi Hosseini, a senior frontend engineer focused on React, Next.js, TypeScript, secure auth flows, testing, CI/CD, and enterprise SaaS.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="container py-14 sm:py-16">
      <SectionHeading
        description="A grounded view of the engineering strengths behind the portfolio."
        eyebrow="About"
        title="Product-minded frontend engineering for complex teams and codebases."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>
              Mahdi Hosseini is a senior frontend engineer focused on React,
              Next.js, and TypeScript for enterprise SaaS products. His work sits
              where interface quality, system architecture, and delivery
              reliability meet.
            </p>
            <p>
              He is comfortable with complex codebases, legacy modernization,
              authentication and security flows, typed integrations, design
              systems, and CI/CD-heavy product environments.
            </p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>
              He has worked with remote international teams across cloud
              platforms, ad-tech, healthcare, collaboration tools, and other
              data-heavy applications. The through-line is product-minded
              engineering: building maintainable systems that help teams ship
              faster without weakening quality.
            </p>
            <p>
              Based in Yerevan, Armenia, he is especially strong in secure user
              flows, testing strategy, observability, and frontend architecture
              that scales beyond a single feature team.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
