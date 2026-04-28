import type { CaseStudy } from "@/content/types";

export const featuredCaseStudySlugs = [
  "reolink-neoxi",
  "jamloop",
  "shop-ware",
  "mojito-mint",
  "coffee-uniplato",
  "satek",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "reolink-neoxi",
    name: "Realink",
    company: "Neoxi",
    role: "Senior Frontend Engineer",
    period: "2024 to present",
    productType: "Secure cloud platform and marketing/cloud monorepo",
    domain: "Enterprise SaaS / Security",
    summary:
      "Built and standardized a secure Next.js 15 monorepo that supports Realink cloud and marketing surfaces with shared packages, localization, and modern authentication flows.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript 5",
      "pnpm",
      "Turborepo",
      "Ory Kratos",
      "React Query",
      "Zustand",
      "next-intl",
      "Vitest",
      "Playwright",
      "Docker",
    ],
    mainChallenge:
      "Move multiple product surfaces onto a cohesive platform while tightening auth and security posture without slowing delivery.",
    mainResult:
      "Consolidated shared frontend infrastructure, cut duplicated config and reduced build and fetch overhead across the platform.",
    technicalHighlights: [
      "Implemented Ory Kratos flows with MFA, Twilio Verify, Resend, and hardened browser security headers.",
      "Split two Next.js apps and seven shared packages into a maintainable Turborepo with localization and shared frontend primitives.",
    ],
    measurableResults: [
      "Reduced duplicated configuration by 60% and cut build feedback loops by 30%.",
      "Reduced redundant client fetches by 50%, manual verification requests by 25%, and expanded localization to three languages.",
    ],
    summaryBox: {
      productType: "Cloud SaaS platform and growth site monorepo",
      teamContext: "Remote international product and platform collaboration",
      mainResponsibility: "Frontend architecture, auth flows, shared packages, localization, and quality tooling",
      mainStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Ory Kratos",
        "React Query",
        "Turborepo",
      ],
      mainOutcome:
        "A secure and faster multi-app frontend platform with lower duplication and smoother product delivery.",
      evidenceMetrics: [
        "60% less duplicated configuration",
        "30% faster build feedback",
        "50% fewer redundant client fetches",
        "25% fewer manual verification requests",
      ],
    },
    sections: {
      context: {
        title: "Context",
        body: [
          "Realink needed a frontend platform that could support both cloud product surfaces and marketing experiences without fragmenting implementation patterns across teams.",
          "The work sat at the intersection of product delivery, platform consistency, localization, and authentication hardening.",
        ],
      },
      challenge: {
        title: "Challenge",
        body: [
          "The main technical challenge was reducing duplication while preserving enough flexibility for separate apps to move at different speeds.",
          "At the same time, authentication flows needed to be more secure and easier to operate across MFA, verification, and localized UX.",
        ],
      },
      role: {
        title: "My role",
        body: [
          "I led the frontend architecture for the monorepo shape, shared package boundaries, client data flows, and secure identity-related interactions.",
          "I also contributed the testing and verification foundations needed to keep delivery confidence high as the surface area grew.",
        ],
      },
      technicalDecisions: {
        title: "Technical decisions",
        body: [
          "Standardized on Next.js 15, React 19, TypeScript, pnpm, and Turborepo so apps and packages could share conventions rather than re-solving the same setup repeatedly.",
          "Used React Query and Zustand selectively: server-state concerns stayed in query layers while session and local UX state remained lightweight and predictable.",
        ],
      },
      keyFeatures: {
        title: "Key features shipped",
        body: [
          "Localized marketing and cloud application surfaces across three languages.",
          "Secure sign-in, verification, and recovery flows with MFA and Twilio-backed verification steps.",
        ],
      },
      architectureHighlights: {
        title: "Architecture highlights",
        body: [
          "Two Next.js apps and seven shared packages organized around app-level ownership plus reusable primitives for auth, configuration, and UI foundations.",
          "Hardened headers and policies including CSP, HSTS, and CORS handling to reduce avoidable security regressions in the browser layer.",
        ],
      },
      impact: {
        title: "Impact",
        body: [
          "The monorepo structure reduced duplicated configuration by 60% and cut build feedback loops by 30%.",
          "Query and state refinements reduced redundant client fetches by 50% and lowered manual verification requests by 25%.",
        ],
      },
      techStack: {
        title: "Tech stack",
        body: [
          "Next.js 15, React 19, TypeScript 5, pnpm, Turborepo, Ory Kratos, MFA, Twilio Verify, Resend, React Query, Zustand, next-intl, Vitest, Playwright, Docker.",
        ],
      },
      screenshots: {
        title: "Screenshots placeholder",
        body: [
          "Reserved for authenticated cloud flows, localized states, and shared monorepo UI surfaces once publishable product images are available.",
        ],
      },
      lessonsLearned: {
        title: "Lessons learned",
        body: [
          "Shared packages help most when their ownership lines are explicit; otherwise monorepos can hide coupling instead of reducing it.",
          "Auth UX quality improves when security and product ergonomics are designed together instead of sequenced after the fact.",
        ],
      },
    },
    relatedProjectSlugs: ["jamloop", "mojito-mint", "infrastructure-as-code"],
  },
  {
    slug: "jamloop",
    name: "Jamloop",
    company: "Neoxi",
    role: "Senior Frontend Engineer",
    period: "2024",
    productType: "Self-service ad-tech platform",
    domain: "Ad-tech SaaS",
    summary:
      "Built a strongly typed App Router frontend for a self-service advertising product with better onboarding speed, stronger CI quality gates, and clearer production observability.",
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "React Hook Form",
      "Zod",
      "Storybook",
      "Vitest",
      "Playwright",
      "Sentry",
      "Better Stack",
      "Pino",
      "Semantic Release",
    ],
    mainChallenge:
      "Support fast product iteration in an ad-tech domain without sacrificing type safety, test coverage, or incident visibility.",
    mainResult:
      "Created a frontend setup that shipped faster, broke less often, and made issue triage meaningfully faster for the team.",
    technicalHighlights: [
      "Nearly 100% type coverage across roughly 450 TypeScript modules with typed API integration and form validation.",
      "Built PDF reporting across five chart sections while keeping CI and release workflows automated and observable.",
    ],
    measurableResults: [
      "Cut onboarding and scaffold time by 80% with around 10 automated CI checks per pull request.",
      "Reduced production bugs by 30% and reduced incident triage time by 30%.",
    ],
    summaryBox: {
      productType: "Self-service ad-tech analytics and reporting platform",
      teamContext: "Product-led remote collaboration with frequent shipping",
      mainResponsibility: "Frontend foundations, typed integration patterns, testing, and observability",
      mainStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Clerk",
        "Storybook",
        "Playwright",
      ],
      mainOutcome:
        "A faster and safer shipping workflow with better typed integration discipline and production visibility.",
      evidenceMetrics: [
        "80% faster onboarding and scaffold time",
        "Nearly 100% type coverage across about 450 modules",
        "10 automated CI checks per pull request",
        "30% fewer production bugs",
      ],
    },
    sections: {
      context: { title: "Context", body: ["Jamloop needed a reliable self-service frontend that supported advertiser workflows, analytics views, and reporting without relying on heavy manual QA.", "The product had to move fast, but the team also needed stronger release confidence than a typical startup-style shipping loop provides."] },
      challenge: { title: "Challenge", body: ["The main challenge was to make the platform easier to extend while keeping the cost of mistakes low in a data-heavy domain.", "That meant tightening types, validation, testing, and observability in parallel rather than treating them as separate initiatives."] },
      role: { title: "My role", body: ["I shaped the frontend implementation patterns around typed APIs, forms, Storybook-driven UI work, and CI quality gates.", "I also helped make production issues easier to detect and faster to triage through better logging and monitoring integration."] },
      technicalDecisions: { title: "Technical decisions", body: ["Used Clerk for auth, Zod plus React Hook Form for predictable validation, and a typed API boundary to keep feature work from drifting into weakly typed ad-hoc integrations.", "Added Storybook, Vitest, Playwright, Codecov, and semantic release conventions so teams could ship frequently without guessing about quality."] },
      keyFeatures: { title: "Key features shipped", body: ["Self-service onboarding flows, validated campaign setup interfaces, and PDF exports across five chart sections.", "UI foundations for repeatable product delivery instead of one-off feature implementation."] },
      architectureHighlights: { title: "Architecture highlights", body: ["A typed module structure across roughly 450 TypeScript files, supported by layered CI checks per pull request.", "Instrumentation with Sentry, Better Stack, and Pino to reduce the gap between frontend incidents and actionable debugging signals."] },
      impact: { title: "Impact", body: ["Onboarding and scaffold time dropped by 80%, which made new feature work and contributor ramp-up materially faster.", "The quality stack contributed to 30% fewer production bugs and 30% faster incident triage."] },
      techStack: { title: "Tech stack", body: ["Next.js App Router, TypeScript, Tailwind CSS, Clerk, React Hook Form, Zod, Storybook, Vitest, Playwright, Sentry, Better Stack, Pino, Codecov, Semantic Release."] },
      screenshots: { title: "Screenshots placeholder", body: ["Reserved for advertiser dashboard, reporting, and PDF export views when public-safe product images are available."] },
      lessonsLearned: { title: "Lessons learned", body: ["Typed frontend systems pay off most when they cover forms, transport, and UI boundaries together.", "Observability becomes far more useful when logs and error monitoring are designed around the actual questions engineers ask during incidents."] },
    },
    relatedProjectSlugs: ["reolink", "test-driven-development-and-playwright-automation", "atmosphere"],
  },
  {
    slug: "shop-ware",
    name: "Shop-Ware",
    company: "Shop-Ware",
    role: "Frontend Engineer",
    period: "2022 to 2024",
    productType: "Enterprise SaaS for automotive repair shops",
    domain: "Automotive SaaS",
    summary:
      "Modernized a large Rails and Backbone product toward a more scalable React and TypeScript frontend while improving performance, delivery speed, translation workflows, and CI costs.",
    stack: [
      "React 17",
      "TypeScript",
      "Rails",
      "Storybook",
      "Webpack",
      "Ant Design",
      "CircleCI",
      "Jest",
      "RSpec",
      "Pusher",
      "Redis",
      "Heroku",
    ],
    mainChallenge:
      "Incrementally modernize a legacy enterprise UI without disrupting core shop operations or slowing feature delivery.",
    mainResult:
      "Improved performance and development velocity while reducing UI regressions and CI waste in a large production application.",
    technicalHighlights: [
      "Led Backbone-to-React modernization work with Storybook-supported UI consistency and better TypeScript adoption.",
      "Improved real-time collaboration and translation workflows without destabilizing the Rails product core.",
    ],
    measurableResults: [
      "Improved initial load time by 20%, page load time by 40%, and UI delivery speed by 25%.",
      "Reduced UI regressions by 25%, translation turnaround by 50%, and CI costs by 20% while running 1,000+ automated tests in CI.",
    ],
    summaryBox: {
      productType: "Legacy enterprise SaaS platform",
      teamContext: "Cross-functional product, design, and backend collaboration",
      mainResponsibility: "Legacy modernization, performance, reusable UI, and CI quality improvements",
      mainStack: [
        "React",
        "TypeScript",
        "Rails",
        "Storybook",
        "CircleCI",
        "Jest",
      ],
      mainOutcome:
        "A faster and more maintainable frontend surface inside a large legacy product.",
      evidenceMetrics: [
        "20% faster initial load time",
        "40% faster page load time",
        "25% faster UI delivery speed",
        "1,000+ automated tests in CI",
      ],
    },
    sections: {
      context: { title: "Context", body: ["Shop-Ware served automotive repair businesses with a large production SaaS product that had grown across Rails, Backbone, and newer React code.", "The team needed modernization that improved day-to-day delivery rather than a rewrite that paused product work."] },
      challenge: { title: "Challenge", body: ["The challenge was to upgrade the frontend incrementally while protecting a business-critical product used by real shops every day.", "Every improvement had to work inside existing deployment, testing, translation, and realtime collaboration constraints."] },
      role: { title: "My role", body: ["I contributed modernization work from Backbone toward React and TypeScript, built reusable UI patterns, and improved performance and CI reliability.", "I also supported real-time communication features and translation workflows that affected global product quality."] },
      technicalDecisions: { title: "Technical decisions", body: ["Chose incremental migration patterns with Storybook-backed UI surfaces rather than risky broad rewrites.", "Focused on bottlenecks that would improve both end-user performance and developer iteration, including Webpack tuning and CI pipeline waste reduction."] },
      keyFeatures: { title: "Key features shipped", body: ["Modernized interface slices, reusable UI building blocks, real-time chat and notification integrations, and localization workflow improvements.", "Improved component confidence through Jest, RSpec, and CI coverage instead of relying on manual regression checking."] },
      architectureHighlights: { title: "Architecture highlights", body: ["Balanced a hybrid Rails and React system while keeping migration boundaries understandable.", "Used Storybook and typed component contracts to reduce drift during the modernization process."] },
      impact: { title: "Impact", body: ["Initial load time improved by 20% and page load time improved by 40%.", "UI delivery speed improved by 25%, UI regressions dropped by 25%, translation turnaround dropped by 50%, and CI costs dropped by 20%."] },
      techStack: { title: "Tech stack", body: ["React 17, TypeScript, Rails, Storybook, Webpack, Ant Design, CircleCI, Jest, RSpec, Stream Chat, Pusher, Sidekiq, Redis, Transifex, Heroku."] },
      screenshots: { title: "Screenshots placeholder", body: ["Reserved for enterprise workflow views, repair order UI, and reusable component examples when publishable captures are available."] },
      lessonsLearned: { title: "Lessons learned", body: ["Legacy modernization succeeds when delivery teams can see immediate value from each migration slice.", "Performance work and UI architecture work reinforce each other when shared components replace duplicated custom patterns."] },
    },
    relatedProjectSlugs: ["jamloop", "satek", "green-house"],
  },
  {
    slug: "mojito-mint",
    name: "Mojito Mint",
    company: "Neoxi",
    role: "Frontend Engineer",
    period: "2022",
    productType: "NFT marketplace management platform",
    domain: "Web3 / Marketplace",
    summary:
      "Built a multi-tenant Next.js management frontend with stronger auth flows, typed GraphQL integration, and more reliable routing and release workflows.",
    stack: [
      "Next.js 12",
      "React 17",
      "TypeScript",
      "Apollo Client",
      "GraphQL Code Generator",
      "Auth0",
      "Material UI",
      "React Hook Form",
      "Yup",
      "Sentry",
      "Datadog",
      "Docker",
      "Kubernetes",
      "Netlify",
    ],
    mainChallenge:
      "Support multi-tenant marketplace management experiences without routing leaks, auth confusion, or brittle GraphQL integration.",
    mainResult:
      "Improved tenant-safe routing, reduced repeated UI work, and lowered auth and integration-related support issues.",
    technicalHighlights: [
      "Used GraphQL Code Generator and Apollo patterns to reduce integration drift in a data-heavy product.",
      "Strengthened Auth0-based flows so tenant isolation and authentication edge cases became much less error-prone.",
    ],
    measurableResults: [
      "Reduced cross-tenant routing issues to zero and cut duplicate UI code by 55%.",
      "Lowered API integration bugs by 35%, reduced 401-related tickets by 70%, shortened deployment status time by 40%, and cut release time by 60%.",
    ],
    summaryBox: {
      productType: "Multi-tenant marketplace management SaaS",
      teamContext: "Product engineering collaboration across frontend, backend, and DevOps",
      mainResponsibility: "Routing architecture, auth handling, shared UI, and typed GraphQL integration",
      mainStack: [
        "Next.js",
        "TypeScript",
        "Apollo Client",
        "Auth0",
        "Material UI",
      ],
      mainOutcome:
        "A safer and faster management experience with fewer auth and routing failures.",
      evidenceMetrics: [
        "Zero cross-tenant routing issues",
        "55% less duplicate UI code",
        "35% fewer API integration bugs",
        "70% fewer 401-related tickets",
      ],
    },
    sections: {
      context: { title: "Context", body: ["Mojito Mint operated in a multi-tenant product space where tenant boundaries, auth states, and contract-related visibility had to stay correct at all times.", "The frontend needed to handle operational complexity without leaking that complexity into the user experience."] },
      challenge: { title: "Challenge", body: ["Routing and auth errors were especially costly because they could create confusing or invalid cross-tenant experiences.", "GraphQL-heavy product surfaces also needed stronger contracts so feature work would not degrade reliability over time."] },
      role: { title: "My role", body: ["I focused on tenant-aware frontend flows, Auth0-driven access behavior, and typed GraphQL integration patterns.", "I also reduced duplicated UI work by pushing toward more reusable component structures."] },
      technicalDecisions: { title: "Technical decisions", body: ["Combined Apollo Client with GraphQL Code Generator so frontend state and API integration work stayed strongly typed across feature surfaces.", "Reworked routing and auth decisions around explicit tenant awareness instead of letting pages infer context indirectly."] },
      keyFeatures: { title: "Key features shipped", body: ["Tenant-safe management flows, form-driven admin interfaces, contract deployment status visibility, and reusable UI primitives.", "Operational visibility improvements through Sentry and Datadog-backed monitoring."] },
      architectureHighlights: { title: "Architecture highlights", body: ["Routing rules built around tenant context reduced an entire class of product errors to zero.", "Reusable Material UI-based foundations reduced duplicated UI code by 55%."] },
      impact: { title: "Impact", body: ["Cross-tenant routing issues dropped to zero, duplicate UI code dropped by 55%, and API integration bugs dropped by 35%.", "401-related tickets dropped by 70%, contract deployment status time improved by 40%, and release time improved by 60%."] },
      techStack: { title: "Tech stack", body: ["Next.js 12, React 17, TypeScript, Apollo Client, GraphQL Code Generator, Auth0, Material UI, React Hook Form, Yup, Sentry, Datadog, Docker, Kubernetes, Netlify, Jest, React Testing Library."] },
      screenshots: { title: "Screenshots placeholder", body: ["Reserved for admin console, multi-tenant routing examples, and deployment status views when public-safe imagery exists."] },
      lessonsLearned: { title: "Lessons learned", body: ["Multi-tenant frontend systems benefit from explicit tenant context in routing and data access rather than implicit assumptions.", "Strong typed API contracts can reduce both shipping risk and debugging time in products with frequent backend evolution."] },
    },
    relatedProjectSlugs: ["reolink", "i-read", "infrastructure-as-code"],
  },
  {
    slug: "coffee-uniplato",
    name: "Coffee / Uniplato",
    company: "Coffee / Uniplato",
    role: "Frontend Engineer",
    period: "2021 to 2022",
    productType: "Collaboration suite",
    domain: "Productivity / Collaboration",
    summary:
      "Built collaboration experiences across web and Electron surfaces covering meetings, chat, scheduling, tasks, and settings inside a unified product ecosystem.",
    stack: [
      "React",
      "Electron",
      "Redux Toolkit",
      "React Query",
      "WebSockets",
      "Mediasoup",
      "Storybook",
      "Material UI",
      "Emotion",
      "Sentry",
      "Bitbucket Pipelines",
      "Google Maps API",
    ],
    mainChallenge:
      "Unify multiple collaboration workflows into a coherent product while keeping realtime experiences dependable.",
    mainResult:
      "Delivered a unified product surface that improved engagement, deployment speed, and perceived reliability.",
    technicalHighlights: [
      "Integrated realtime workflows across video, chat, and collaborative settings using WebSockets and Mediasoup-backed interfaces.",
      "Used Storybook and shared UI patterns to keep a broad product surface more consistent across Electron and web views.",
    ],
    measurableResults: [
      "Built a unified collaboration platform covering meetings, chat, scheduling, tasks, and settings.",
      "Improved user engagement by 20%, reduced UI bugs by 15%, reduced deployment time by 20%, and improved reliability by 20%.",
    ],
    summaryBox: {
      productType: "Collaboration suite across desktop and web",
      teamContext: "Realtime product collaboration with design and backend teams",
      mainResponsibility: "Frontend implementation across collaboration surfaces, shared UI, and release workflows",
      mainStack: [
        "React",
        "Electron",
        "Redux Toolkit",
        "React Query",
        "WebSockets",
      ],
      mainOutcome:
        "A broader collaboration product with stronger UX consistency and better operational reliability.",
      evidenceMetrics: [
        "20% higher user engagement",
        "15% fewer UI bugs",
        "20% faster deployment time",
        "20% better reliability",
      ],
    },
    sections: {
      context: { title: "Context", body: ["Coffee and Uniplato focused on connected collaboration experiences rather than a single narrow workflow.", "That meant the frontend had to support video, chat, task and scheduling surfaces as one coherent product."] },
      challenge: { title: "Challenge", body: ["Realtime interaction quality and consistency across desktop-style product surfaces are hard to maintain when features span many domains.", "The system had to feel cohesive without oversimplifying the specialized workflows users relied on."] },
      role: { title: "My role", body: ["I implemented and refined UI across the collaboration suite, especially where shared patterns could reduce inconsistency across product areas.", "I also contributed to release process improvements and reliability-oriented frontend work."] },
      technicalDecisions: { title: "Technical decisions", body: ["Used Redux Toolkit and React Query together to separate local product workflows from server-backed data concerns.", "Leaned on Storybook and shared component conventions to scale UI consistency across Electron and web surfaces."] },
      keyFeatures: { title: "Key features shipped", body: ["Meetings, chat, scheduling, tasks, settings, and supporting maps or realtime collaboration views.", "More coherent and reusable UI patterns across a wide collaboration surface area."] },
      architectureHighlights: { title: "Architecture highlights", body: ["Combined realtime communication layers with product state management without letting every screen reinvent transport or caching behavior.", "Shared UI and release process discipline kept the broad feature set from becoming visually fragmented."] },
      impact: { title: "Impact", body: ["The unified collaboration platform improved user engagement by 20%.", "UI bugs dropped by 15%, deployment time dropped by 20%, and reliability improved by 20%."] },
      techStack: { title: "Tech stack", body: ["React, Electron, Redux Toolkit, React Query, WebSockets, Mediasoup, Storybook, Material UI, Emotion, Sentry, Bitbucket Pipelines, i18n, Google Maps API."] },
      screenshots: { title: "Screenshots placeholder", body: ["Reserved for meetings, task management, scheduling, and settings workflows when publishable images are available."] },
      lessonsLearned: { title: "Lessons learned", body: ["Broad product suites need sharper information architecture than single-purpose apps to avoid feeling stitched together.", "Realtime collaboration UX depends as much on graceful state handling as it does on transport-level technology."] },
    },
    relatedProjectSlugs: ["satek", "atmosphere", "english-training-app-for-kids"],
  },
  {
    slug: "satek",
    name: "Satek",
    company: "Satek / Dadeh Kavan",
    role: "Frontend Engineer",
    period: "2019 to 2021",
    productType: "Healthcare information systems and desktop apps",
    domain: "Healthcare / Desktop / Mobile",
    summary:
      "Built healthcare information system interfaces across Electron and mobile surfaces, improved bundle efficiency, sped up releases, and mentored junior teammates.",
    stack: [
      "React",
      "Electron",
      "React Native",
      "Expo",
      "Redux",
      "Apollo",
      "GraphQL",
      "Webpack",
      "Styled Components",
      "Sass",
      "Figma",
      "Adobe XD",
    ],
    mainChallenge:
      "Support healthcare workflows across desktop and mobile products while improving performance and release predictability.",
    mainResult:
      "Delivered multiple production applications with faster release cycles, smaller bundles, and more stable mobile behavior.",
    technicalHighlights: [
      "Shipped four Electron desktop apps and supported cross-platform product delivery in a healthcare environment.",
      "Combined frontend engineering with UI design collaboration and mentorship for newer engineers.",
    ],
    measurableResults: [
      "Shipped 4 Electron desktop apps, reduced release cycle by 25%, and reduced bundle size by 30%.",
      "Increased mobile stability by 40%, improved workflow efficiency by 35%, and mentored 3 interns.",
    ],
    summaryBox: {
      productType: "Healthcare information system product suite",
      teamContext: "Product delivery across desktop, mobile, and design collaboration",
      mainResponsibility: "Frontend implementation, design collaboration, and mentoring",
      mainStack: ["React", "Electron", "React Native", "Apollo", "GraphQL"],
      mainOutcome:
        "Reliable cross-platform product delivery with better release speed and stability.",
      evidenceMetrics: [
        "4 Electron desktop apps shipped",
        "25% shorter release cycle",
        "30% smaller bundle size",
        "40% better mobile stability",
      ],
    },
    sections: {
      context: { title: "Context", body: ["Satek and Dadeh Kavan projects involved healthcare information system work where stability and workflow clarity mattered more than visual novelty.", "The product set spanned desktop and mobile, which made consistency and release discipline especially important."] },
      challenge: { title: "Challenge", body: ["Healthcare interfaces often carry dense workflows and high expectations for reliability.", "The challenge was to ship usable desktop and mobile experiences while steadily improving performance, release timing, and team capability."] },
      role: { title: "My role", body: ["I built frontend functionality across Electron, React, and React Native surfaces, collaborated on UI design, and supported experimentation and mentorship.", "I also helped reduce bundle and release inefficiencies that affected product delivery."] },
      technicalDecisions: { title: "Technical decisions", body: ["Used React and Electron for desktop delivery, React Native and Expo for mobile, and Apollo with GraphQL where typed data integration helped product velocity.", "Treated design tooling as a delivery input rather than a handoff artifact, which made implementation closer to real workflows."] },
      keyFeatures: { title: "Key features shipped", body: ["Four Electron desktop applications, mobile features, healthcare workflow views, and UI experiments backed by A/B testing.", "Team improvement through mentorship and repeatable UI implementation patterns."] },
      architectureHighlights: { title: "Architecture highlights", body: ["Focused on smaller bundles, more dependable release processes, and shared UX conventions across platforms.", "Product work crossed engineering and design, which helped keep implementation practical and user-centered."] },
      impact: { title: "Impact", body: ["Shipped four Electron desktop apps, shortened release cycles by 25%, and reduced bundle size by 30%.", "Mobile stability improved by 40%, workflow efficiency improved by 35%, and three interns were mentored."] },
      techStack: { title: "Tech stack", body: ["React, Electron, React Native, Expo, Redux, Apollo, GraphQL, Webpack, Styled Components, Sass, Figma, Adobe XD, A/B testing."] },
      screenshots: { title: "Screenshots placeholder", body: ["Reserved for desktop healthcare flows and mobile screens where product imagery can be shared safely."] },
      lessonsLearned: { title: "Lessons learned", body: ["Cross-platform delivery benefits from clear UX conventions more than from piling on platform-specific customization.", "Mentoring raises overall team throughput when it is tied directly to real product work instead of abstract training."] },
    },
    relatedProjectSlugs: ["coffee", "english-training-app-for-kids", "airport-management-algorithm"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
