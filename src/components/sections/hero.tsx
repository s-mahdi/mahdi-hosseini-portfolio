"use client";

import Link from "next/link";
import { FileText, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { portfolioLinks } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      id="hero"
      ref={ref}
    >
      {/* Parallax grid background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ y: gridY }}
      >
        <svg className="h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              height="32"
              id="hero-grid"
              patternUnits="userSpaceOnUse"
              width="32"
            >
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#38bdf8" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect fill="url(#hero-grid)" height="100%" width="100%" />
        </svg>
      </motion.div>

      {/* Glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Glowing dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[28%] top-[22%] h-1.5 w-1.5 rounded-full bg-sky-400"
        style={{ boxShadow: "0 0 10px #38bdf8" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-[55%] h-1 w-1 rounded-full bg-indigo-400"
        style={{ boxShadow: "0 0 8px #818cf8" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[25%] right-[38%] h-2 w-2 rounded-full bg-sky-400"
        style={{ boxShadow: "0 0 12px #38bdf8" }}
      />

      {/* Floating code snippet */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-16 top-1/3 hidden font-mono text-xs leading-relaxed text-sky-400 opacity-[0.07] xl:block"
      >
        <div>const Stack = () =&gt; [</div>
        <div>&nbsp;&nbsp;&quot;React&quot;, &quot;Next.js&quot;,</div>
        <div>&nbsp;&nbsp;&quot;TypeScript&quot;, &quot;Node&quot;</div>
        <div>]</div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400 before:h-px before:w-6 before:bg-sky-400">
              Available for new roles
            </span>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            <Badge>Senior Frontend Engineer</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
          </div>

          <h1 className="mb-6 font-heading text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Matt{" "}
            <span className="text-sky-400">Hosseini</span>
          </h1>

          <p className="mb-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            Senior frontend engineer with 6+ years building React and Next.js
            products for data-heavy SaaS teams — architecture, auth, design
            systems, testing, and reliable delivery.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {portfolioLinks.location}
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span>{portfolioLinks.availability}</span>
          </div>

          <div className="mb-4 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#work">View Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
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
        </motion.div>
      </div>
    </section>
  );
}
