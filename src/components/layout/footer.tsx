import Link from "next/link";
import { Mail, MapPin, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { navItems, portfolioLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-foreground">Matt Hosseini</p>
          <p className="max-w-md text-sm text-muted-foreground">
            Senior Frontend Engineer focused on React, Next.js, TypeScript,
            secure product flows, and scalable enterprise SaaS interfaces.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{portfolioLinks.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5 shrink-0" />
            <span>Open to remote US &amp; EU roles</span>
          </div>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Contact</p>
          <Link className="flex items-center gap-2 hover:text-foreground" href={`mailto:${portfolioLinks.email}`}>
            <Mail className="h-3.5 w-3.5 shrink-0" />
            {portfolioLinks.email}
          </Link>
          <Link className="flex items-center gap-2 hover:text-foreground" href={portfolioLinks.github} target="_blank">
            <FaGithub className="h-3.5 w-3.5 shrink-0" />
            GitHub
          </Link>
          <Link className="flex items-center gap-2 hover:text-foreground" href={portfolioLinks.linkedin} target="_blank">
            <FaLinkedin className="h-3.5 w-3.5 shrink-0" />
            LinkedIn
          </Link>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Navigate</p>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link className="hover:text-foreground" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-8 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Matt Hosseini. All rights reserved.</p>
      </div>
    </footer>
  );
}
