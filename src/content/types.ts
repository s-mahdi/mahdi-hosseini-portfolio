export type ProjectCategory =
  | "All"
  | "Frontend Architecture"
  | "Next.js"
  | "React"
  | "Design Systems"
  | "Authentication"
  | "Testing"
  | "CI/CD"
  | "Full-stack"
  | "Infrastructure"
  | "Data Visualization"
  | "Mobile"
  | "Legacy Modernization"
  | "Archive";

export type PortfolioLinks = {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  location: string;
  availability: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type Metric = {
  value: string;
  label: string;
  evidence?: string;
};

export type SectionCopy = {
  title: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  company: string;
  role: string;
  period: string;
  productType: string;
  domain: string;
  summary: string;
  stack: string[];
  mainChallenge: string;
  mainResult: string;
  technicalHighlights: string[];
  measurableResults: string[];
  summaryBox: {
    productType: string;
    teamContext: string;
    mainResponsibility: string;
    mainStack: string[];
    mainOutcome: string;
    evidenceMetrics: string[];
  };
  sections: {
    context: SectionCopy;
    challenge: SectionCopy;
    role: SectionCopy;
    technicalDecisions: SectionCopy;
    keyFeatures: SectionCopy;
    architectureHighlights: SectionCopy;
    impact: SectionCopy;
    techStack: SectionCopy;
    screenshots: SectionCopy;
    lessonsLearned: SectionCopy;
  };
  relatedProjectSlugs: string[];
};

export type Project = {
  slug: string;
  name: string;
  company?: string;
  role: string;
  period: string;
  domain: string;
  description: string;
  stack: string[];
  keyOutcomes: string[];
  tags: ProjectCategory[];
  archive?: boolean;
  links?: {
    demo?: string;
    github?: string;
  };
  caseStudySlug?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  outcomes: string[];
  caseStudySlug?: string;
};

export type SkillCategory = {
  title: string;
  intro: string;
  skills: string[];
  proof: string[];
};
