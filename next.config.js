/** @type {import('next').NextConfig} */

// GitHub Pages serves static files only (no Node server), so a build for it
// needs `output: "export"` plus a `basePath`/`assetPrefix` matching the repo
// name (project pages are served from a /<repo> subpath). GitHub Pages also
// can't send custom HTTP headers, so the security headers below only apply
// on hosts that run the Next server (Netlify/Vercel) — see README for the
// GitHub Pages deployment notes.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Dr-Mottaran";

const nextConfig = {
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ["*.preview.same-app.com"],
  poweredByHeader: false,
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
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
