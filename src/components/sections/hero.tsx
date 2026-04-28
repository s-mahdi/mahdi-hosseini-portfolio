import Link from "next/link";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolioLinks } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/components/sections/motion-reveal";

export function Hero() {
  return (
    <section className="container py-14 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
        <MotionReveal>
          <Card className="h-full p-8 sm:p-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Senior Frontend Engineer</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Mahdi Hosseini
                </p>
                <h1 className="max-w-4xl text-balance font-heading text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Secure, scalable frontend systems for enterprise SaaS.
                </h1>
                <p className="max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">
                  Senior frontend engineer with 6+ years of experience building
                  React and Next.js products for data-heavy SaaS teams, with a
                  focus on architecture, authentication, design systems, testing,
                  and reliable delivery.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {portfolioLinks.location}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/case-studies">
                    {portfolioLinks.primaryCtaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">{portfolioLinks.secondaryCtaLabel}</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="ghost">
                  <a href={portfolioLinks.resume} rel="noreferrer" target="_blank">
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={portfolioLinks.github} rel="noreferrer" target="_blank">
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={portfolioLinks.linkedin} rel="noreferrer" target="_blank">
                    <FaLinkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <Card className="grid gap-6 p-8 sm:p-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Core focus
              </p>
              <div className="grid gap-3">
                {[
                  "Frontend architecture for complex product surfaces",
                  "Secure auth and identity flows with real operational constraints",
                  "Typed API integration, testing, CI/CD, and observability",
                  "Design systems and product-minded engineering for enterprise teams",
                ].map((item) => (
                  <div
                    className="rounded-2xl border border-border/70 bg-muted/35 px-4 py-4 text-sm leading-6 text-foreground"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </MotionReveal>
      </div>
    </section>
  );
}
