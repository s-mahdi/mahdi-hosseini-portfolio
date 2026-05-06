import type { Metric, PortfolioLinks } from "@/content/types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const portfolioLinks: PortfolioLinks = {
  email: "matt.hosseini.dev@gmail.com",
  github: "https://github.com/matt-hosseini-dev",
  linkedin: "https://www.linkedin.com/in/matt--dev/",
  resume: `${basePath}/docs/Matt-Hosseini-Resume.pdf`,
  location: "Yerevan, Armenia",
  availability:
    "Available for senior frontend and product-minded platform roles across remote US and EU teams.",
  primaryCtaLabel: "View case studies",
  secondaryCtaLabel: "Contact me",
};

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const proofMetrics: Metric[] = [
  {
    value: "6+",
    label: "Years building React and Next.js products",
    evidence:
      "Enterprise SaaS delivery across product, platform, and desktop surfaces.",
  },
  {
    value: "40%",
    label: "Faster page loads",
    evidence: "Measured on Shop-Ware performance and rendering improvements.",
  },
  {
    value: "32%",
    label: "Faster build pipelines",
    evidence:
      "Combined CI and build feedback improvements across modern frontend stacks.",
  },
  {
    value: "30%",
    label: "Fewer production bugs",
    evidence:
      "Jamloop quality gates and typed workflows reduced regression risk.",
  },
  {
    value: "80%",
    label: "Higher deployment frequency",
    evidence:
      "Improved delivery confidence through CI, testing, and reusable UI foundations.",
  },
  {
    value: "4",
    label: "Electron desktop apps shipped",
    evidence: "Delivered in healthcare and collaboration product environments.",
  },
  {
    value: "1,000+",
    label: "Automated tests in CI",
    evidence: "Shop-Ware and related frontend quality workflows.",
  },
  {
    value: "2 + 7",
    label: "Next.js apps and shared packages",
    evidence: "Reolink Turborepo monorepo footprint at Neoxi.",
  },
];
