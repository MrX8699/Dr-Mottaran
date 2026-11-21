/** @type {import('next').NextConfig} */

// The live site is a static export on GitHub Pages (no Node server), so the
// release build sets GITHUB_PAGES=true to get `output: "export"`. GitHub
// Pages can't send custom HTTP headers, so there is no headers() config
// here. See "Deployment" in README.md.
const isGithubPages = process.env.GITHUB_PAGES === "true";
// The site is served from the custom domain root (https://drlucamottaran.it/,
// see public/CNAME), not the default GitHub Pages project-page subpath
// (https://<user>.github.io/<repo>/). Leave this empty while that's true —
// a non-empty value here adds a "/<repoName>" prefix to every asset path,
// which 404s at the domain root. Set it back to "Dr-Mottaran" only if the
// custom domain is ever removed and the site reverts to the project-page URL.
const repoName = "";

const nextConfig = {
  outputFileTracingRoot: __dirname,
  poweredByHeader: false,
  // Lets src/app/global-not-found.tsx serve the 404 page: with two root
  // layouts ("/" Italian, "/en" English) there is no single layout for it.
  experimental: {
    globalNotFound: true,
  },
  // Exposed to client code (src/lib/basePath.ts) so hardcoded "/images/…"
  // paths — which next/image does NOT auto-prefix when unoptimized — can be
  // built with the right prefix for GitHub Pages project-page subpaths.
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages && repoName ? `/${repoName}` : "",
  },
  ...(isGithubPages && {
    output: "export",
    trailingSlash: true,
    ...(repoName && {
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
    }),
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
