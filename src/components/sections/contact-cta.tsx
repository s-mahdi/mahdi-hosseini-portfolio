import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolioLinks } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactCta() {
  return (
    <Card className="p-8 sm:p-10">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Final CTA
          </p>
          <h2 className="max-w-3xl text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            Looking for a senior React/Next.js engineer who ships secure,
            scalable SaaS interfaces?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            {portfolioLinks.availability}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={portfolioLinks.resume} rel="noreferrer" target="_blank">
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href={portfolioLinks.github} target="_blank">
              <FaGithub className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={portfolioLinks.linkedin} target="_blank">
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
