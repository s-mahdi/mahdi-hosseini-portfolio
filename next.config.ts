import path from "node:path";

import type { NextConfig } from "next";

const githubPagesBasePath = "/matt-hosseini-portfolio";
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPagesBuild ? githubPagesBasePath : "";

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ??
      `https://matt-hosseini-dev.github.io${githubPagesBasePath}`,
  },
  reactStrictMode: true,
  output: "export",
  outputFileTracingRoot: path.join(process.cwd()),
  trailingSlash: true,
};

export default nextConfig;
