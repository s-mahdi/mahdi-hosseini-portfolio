import Link from "next/link";
import {
  BriefcaseBusiness,
  CodeXml,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";

import { buildPageMetadata } from "@/lib/metadata";
import { portfolioLinks } from "@/content/site";
import { ContactForm } from "@/components/sections/contact-form";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Mahdi Hosseini for senior frontend engineering roles and product-focused React or Next.js opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="container py-14 sm:py-16">
      <SectionHeading
        description="The site includes a presentational contact form and direct ways to reach out for roles or consulting conversations."
        eyebrow="Contact"
        title="Open to senior frontend opportunities with product and platform depth."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6">
          <div className="space-y-5 text-sm text-muted-foreground">
            <p className="leading-7">{portfolioLinks.availability}</p>
            <div className="space-y-3">
              <Link className="flex items-center gap-3 hover:text-foreground" href={`mailto:${portfolioLinks.email}`}>
                <Mail className="h-4 w-4" />
                {portfolioLinks.email}
              </Link>
              <Link className="flex items-center gap-3 hover:text-foreground" href={portfolioLinks.github} target="_blank">
                <CodeXml className="h-4 w-4" />
                GitHub
              </Link>
              <Link className="flex items-center gap-3 hover:text-foreground" href={portfolioLinks.linkedin} target="_blank">
                <BriefcaseBusiness className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link className="flex items-center gap-3 hover:text-foreground" href={portfolioLinks.resume} target="_blank">
                <FileText className="h-4 w-4" />
                Resume
              </Link>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                {portfolioLinks.location}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}
