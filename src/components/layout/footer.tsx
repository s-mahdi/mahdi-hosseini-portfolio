import Link from "next/link";

import { navItems, portfolioLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-foreground">Mahdi Hosseini</p>
          <p className="max-w-md text-sm text-muted-foreground">
            Senior Frontend Engineer focused on React, Next.js, TypeScript,
            secure product flows, and scalable enterprise SaaS interfaces.
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Contact</p>
          <Link className="block hover:text-foreground" href={`mailto:${portfolioLinks.email}`}>
            {portfolioLinks.email}
          </Link>
          <Link className="block hover:text-foreground" href={portfolioLinks.github} target="_blank">
            GitHub
          </Link>
          <Link className="block hover:text-foreground" href={portfolioLinks.linkedin} target="_blank">
            LinkedIn
          </Link>
          <p>{portfolioLinks.location}</p>
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
        <p>© {new Date().getFullYear()} Mahdi Hosseini. All rights reserved.</p>
      </div>
    </footer>
  );
}
