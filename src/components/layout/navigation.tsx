"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  CodeXml,
  FileText,
  Menu,
  MoveUpRight,
} from "lucide-react";
import { useState } from "react";

import { navItems, portfolioLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="container flex h-16 items-center justify-between gap-4"
      >
        <Link
          className="flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-foreground uppercase"
          href="/"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/60 text-xs font-semibold">
            MH
          </span>
          <span className="hidden sm:inline">Mahdi Hosseini</span>
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild size="icon" variant="outline">
            <Link
              aria-label="GitHub profile"
              href={portfolioLinks.github}
              rel="noreferrer"
              target="_blank"
            >
              <CodeXml className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="outline">
            <Link
              aria-label="LinkedIn profile"
              href={portfolioLinks.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <BriefcaseBusiness className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={portfolioLinks.resume} target="_blank">
              <FileText className="h-4 w-4" />
              Resume
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger asChild>
              <Button aria-label="Open menu" size="icon" variant="outline">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Navigation
                  </p>
                  <div className="mt-4 grid gap-2">
                    {navItems.map((item) => {
                      const active =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);

                      return (
                        <Link
                          className={cn(
                            "flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm transition-colors",
                            active
                              ? "border-border bg-muted text-foreground"
                              : "text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground",
                          )}
                          href={item.href}
                          key={item.href}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                          <MoveUpRight className="h-4 w-4" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="grid gap-3">
                  <Button asChild variant="outline">
                    <Link href={portfolioLinks.resume} target="_blank">
                      <FileText className="h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={portfolioLinks.github} rel="noreferrer" target="_blank">
                      <CodeXml className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href={portfolioLinks.linkedin}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BriefcaseBusiness className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
