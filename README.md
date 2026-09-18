# Series 65 Exam Prep Web

Public marketing and study-guide site for **Series 65 Prep by RushLabs** (`GLB-0001`). The app source remains separate and read-only.

Production: <https://mcyj.github.io/series-65-exam-prep-web/>

## Build and verify

```bash
npm run build
npm run check
```

The dependency-free generator writes `dist/`. GitHub Actions builds, checks and deploys that directory through the official Pages artifact workflow.

## Content

- `content/articles.mjs` — 13 original English study guides
- `scripts/build.mjs` — static HTML, metadata, structured data, sitemap and robots
- `scripts/check.mjs` — generated file, metadata and local reference checks
- `assets/` — app-owned icon/screenshots and the official English Google Play badge

Add content only after checking current primary sources. Do not publish recalled exam questions, unverified legal/tax claims, registration promises or stale fees.
