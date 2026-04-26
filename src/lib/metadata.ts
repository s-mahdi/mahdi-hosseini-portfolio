import type { Metadata } from "next";

const siteName = "Mahdi Hosseini";
const siteTitle = "Mahdi Hosseini | Senior Frontend Engineer";
const siteDescription =
  "Senior Frontend Engineer specializing in React, Next.js, TypeScript, enterprise SaaS, authentication, design systems, testing, and CI/CD.";
const siteUrl = "https://mahdi-hosseini.dev";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

type CaseStudyMetadataInput = {
  name: string;
  summary: string;
  slug: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function buildCaseStudyMetadata({
  name,
  summary,
  slug,
}: CaseStudyMetadataInput): Metadata {
  return buildPageMetadata({
    title: `${name} Case Study`,
    description: summary,
    path: `/case-studies/${slug}`,
  });
}

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
    },
  };
}
