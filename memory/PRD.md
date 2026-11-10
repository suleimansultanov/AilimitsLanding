# AILIMITS — Product Requirements & Build Log

## Original problem statement
Production-ready marketing website for indie AI startup **AILIMITS** (domain suleimansultanov.com), to be submitted to AWS Activate (Founders tier). Tagline: "Autonomous AI agents that prove their work." Thesis: AI agents are powerful but untrustworthy for business-critical work; AILIMITS adds a verification + audit layer (verify before commit, escalate low-confidence steps, full audit trail). Beachhead: finance & back-office ops. Honest early-stage framing, no fake metrics. Dark, engineered, trustworthy B2B aesthetic.

## Architecture
- **Frontend**: React 19 (CRA + craco), Tailwind, framer-motion, lucide-react + react-icons/si. Routes: `/` (single-page site), `/founder`, `/login`, `/admin`.
- **Since 2026-11-10**: suleimansultanov.com root is the founder's CV site (`src/cv/`). The AILIMITS landing lives at `/projects/ailimits` (URL to use for AILIMITS everywhere). `/founder` redirects to the CV; `/login` and `/admin` are not routed on GitHub Pages (no backend deployed).
- **Backend**: FastAPI + MongoDB (motor). All routes under `/api`.
- **Auth**: Custom JWT (HS256, 12h), bcrypt hashing, single admin seeded from env, brute-force lockout. Token in localStorage + Bearer header.
- **i18n**: EN/RU toggle for main page (LanguageContext, persisted to localStorage). Founder page EN-only by decision.

## User personas
1. **Finance/ops buyer** — evaluating whether agentic automation is trustworthy/auditable enough.
2. **AWS Activate reviewer / investor** — assessing legitimacy and focus of the startup.
3. **Founder (admin)** — reviews/export waitlist signups via `/admin`.

## Core requirements (static)
- Single-page marketing site: nav, hero (dual CTA), problem, how-it-works (3 steps), use cases, track record, waitlist, footer.
- Waitlist POSTs to backend + persists in MongoDB; validates email; dedupes; success state.
- Protected admin to view waitlist (full login page).
- RU/EN toggle on main page. SEO: title, meta description, OG/Twitter tags, favicon.
- Dark engineered design, violet accent, audit-log visual motif, no stock photos.

## Implemented (2026-06-14)
- ✅ Full bilingual main page with audit-stream terminal motif, scroll reveals.
- ✅ /founder page: bio, stack badges (react-icons), project list.
- ✅ Waitlist API (validate + dedupe + persist) and form with success/error states.
- ✅ JWT admin auth (seeded admin), /login + /admin dashboard with count, refresh, CSV export.
- ✅ SEO meta + OG/Twitter + SVG favicon.
- ✅ Tested end-to-end (backend 100%, frontend 100%).

## Admin credentials
admin@ailimits.ai / AiLimits2026!  (env: ADMIN_EMAIL / ADMIN_PASSWORD — change before production)

## Backlog
- P1: Send confirmation email on signup (Resend) — currently on-screen only.
- P2: Bilingual founder page; sitemap.xml + robots.txt; rate-limit waitlist endpoint by IP.
- P2: Admin pagination/search when list grows; delete/notes per signup.

## Next tasks
- Point suleimansultanov.com at the deployment, update FRONTEND_URL/CORS, rotate admin password.
