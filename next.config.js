/** @type {import('next').NextConfig} */

// GitHub Pages serves static files only (no Node server), so a build for it
// needs `output: "export"`. GitHub Pages also can't send custom HTTP
// headers, so the security headers below only apply on hosts that run the
// Next server (Netlify/Vercel) — see README for the GitHub Pages deployment
// notes.
const isGithubPages = process.env.GITHUB_PAGES === "true";
// The site is served from the custom domain root (https://whodriving.com/,
// see public/CNAME), not the default GitHub Pages project-page subpath
// (https://<user>.github.io/<repo>/). Leave this empty while that's true —
// a non-empty value here adds a "/<repoName>" prefix to every asset path,
// which 404s at the domain root. Set it back to "Dr-Mottaran" only if the
// custom domain is ever removed and the site reverts to the project-page URL.
const repoName = "";

const nextConfig = {
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ["*.preview.same-app.com"],
  poweredByHeader: false,
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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // headers() is unsupported with output: "export" and has no effect on
  // GitHub Pages anyway, so it's only added for server-based hosts.
  ...(!isGithubPages && {
    async headers() {
      // All routes here are statically prerendered at build time, so the CSP
      // can't use a per-request nonce (there's no per-request render to embed
      // it into) — 'unsafe-inline' on script-src is required for Next's own
      // hydration bootstrap scripts to run.
      const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https://images.unsplash.com",
        "font-src 'self' data:",
        "connect-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
        "upgrade-insecure-requests",
      ].join("; ");

      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
            },
            {
              key: "Strict-Transport-Security",
              value: "max-age=63072000; includeSubDomains; preload",
            },
            { key: "Content-Security-Policy", value: csp },
          ],
        },
      ];
    },
  }),
};

module.exports = nextConfig;
