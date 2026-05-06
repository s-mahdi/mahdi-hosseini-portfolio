import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolioLinks } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { WorkTimeline } from "@/components/sections/work-timeline";
import { SkillMatrix } from "@/components/sections/skill-matrix";
import { SectionHeading } from "@/components/sections/section-heading";
import { MotionReveal } from "@/components/sections/motion-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Senior Frontend Engineer specializing in React, Next.js, TypeScript, enterprise SaaS, authentication, design systems, testing, and CI/CD.",
  path: "/",
});

function SectionGrid() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          height="40"
          id="section-grid"
          patternUnits="userSpaceOnUse"
          width="40"
        >
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect fill="url(#section-grid)" height="100%" width="100%" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ① Hero */}
      <Hero />

      {/* ② Metrics */}
      <MetricsStrip />

      {/* ③ Work — merged experience + case studies */}
      <section
        className="relative overflow-hidden py-20 sm:py-28 [scroll-margin-top:4rem]"
        id="work"
      >
        <SectionGrid />
        {/* React atom watermark */}
        <svg
          aria-hidden
          className="pointer-events-none absolute right-16 top-16 opacity-[0.04]"
          height="260"
          viewBox="0 0 80 80"
          width="260"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" fill="#38bdf8" r="5" />
          <ellipse
            cx="40"
            cy="40"
            fill="none"
            rx="36"
            ry="14"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <ellipse
            cx="40"
            cy="40"
            fill="none"
            rx="36"
            ry="14"
            stroke="#38bdf8"
            strokeWidth="1.5"
            transform="rotate(60 40 40)"
          />
          <ellipse
            cx="40"
            cy="40"
            fill="none"
            rx="36"
            ry="14"
            stroke="#38bdf8"
            strokeWidth="1.5"
            transform="rotate(120 40 40)"
          />
        </svg>
        {/* Floating type snippet */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-16 right-16 hidden font-mono text-xs leading-relaxed text-sky-400 opacity-[0.07] xl:block"
        >
          <div>type WorkEntry = {"{"}</div>
          <div>&nbsp;&nbsp;company: string</div>
          <div>&nbsp;&nbsp;impact: string[]</div>
          <div>{"}"}</div>
        </div>
        <div className="container relative z-10">
          <MotionReveal>
            <SectionHeading
              description="Career history and project highlights — click any entry to expand details, outcomes, and technical decisions."
              eyebrow="Work"
              title="Experience and shipped work."
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="mt-12">
              <WorkTimeline />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* ④ Skills */}
      <section
        className="relative overflow-hidden py-20 sm:py-28 [scroll-margin-top:4rem]"
        id="skills"
      >
        <SectionGrid />
        <div className="container relative z-10">
          <MotionReveal>
            <SectionHeading
              description="Capability areas grouped around how work gets done in real products, not a generic logo wall."
              eyebrow="Skills"
              title="Evidence-backed senior frontend capabilities."
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="mt-12">
              <SkillMatrix />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* ⑤ About */}
      <section
        className="relative overflow-hidden py-20 sm:py-28 [scroll-margin-top:4rem]"
        id="about"
      >
        <SectionGrid />
        <div className="container relative z-10">
          <MotionReveal>
            <SectionHeading
              description="A grounded view of the engineering strengths behind the portfolio."
              eyebrow="About"
              title="Product-minded frontend engineering for complex teams."
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <Card className="p-6">
                <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                  <p>
                    Matt Hosseini is a senior frontend engineer focused on React,
                    Next.js, and TypeScript for enterprise SaaS products. His work
                    sits where interface quality, system architecture, and delivery
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
                    platforms, ad-tech, healthcare, collaboration tools, and
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
          </MotionReveal>
        </div>
      </section>

      {/* ⑥ Contact */}
      <section
        className="relative overflow-hidden py-20 sm:py-28 [scroll-margin-top:4rem]"
        id="contact"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
          }}
        />
        <SectionGrid />
        <div className="container relative z-10 text-center">
          <MotionReveal>
            <h2 className="mb-4 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mb-10 text-base leading-7 text-muted-foreground">
              {portfolioLinks.availability}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href={`mailto:${portfolioLinks.email}`}>
                  <Mail className="h-4 w-4" />
                  {portfolioLinks.email}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={portfolioLinks.resume} rel="noreferrer" target="_blank">
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={portfolioLinks.github} rel="noreferrer" target="_blank">
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={portfolioLinks.linkedin} rel="noreferrer" target="_blank">
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
