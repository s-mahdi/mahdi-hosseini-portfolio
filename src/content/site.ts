import type { Metric, PortfolioLinks } from "@/content/types";

export const portfolioLinks: PortfolioLinks = {
  email: "mahdi.hoseini.dev@gmail.com",
  github: "https://github.com/s-mahdi",
  linkedin: "https://www.linkedin.com/in/mahdi--dev/",
  resume: "/docs/Mahdi-Hoseini-Resume.pdf",
  location: "Yerevan, Armenia",
  availability: "Available for senior frontend and product-minded platform roles across remote US and EU teams.",
  primaryCtaLabel: "View case studies",
  secondaryCtaLabel: "Contact me",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const proofMetrics: Metric[] = [
  { value: "6+", label: "Years building React and Next.js products", evidence: "Enterprise SaaS delivery across product, platform, and desktop surfaces." },
  { value: "40%", label: "Faster page loads", evidence: "Measured on Shop-Ware performance and rendering improvements." },
  { value: "32%", label: "Faster build pipelines", evidence: "Combined CI and build feedback improvements across modern frontend stacks." },
  { value: "30%", label: "Fewer production bugs", evidence: "Jamloop quality gates and typed workflows reduced regression risk." },
  { value: "80%", label: "Higher deployment frequency", evidence: "Improved delivery confidence through CI, testing, and reusable UI foundations." },
  { value: "4", label: "Electron desktop apps shipped", evidence: "Delivered in healthcare and collaboration product environments." },
  { value: "1,000+", label: "Automated tests in CI", evidence: "Shop-Ware and related frontend quality workflows." },
  { value: "2 + 7", label: "Next.js apps and shared packages", evidence: "Realink Turborepo monorepo footprint at Neoxi." },
];
