// Post-build step for GitHub Pages.
// GitHub Pages only serves real files, so deep links like /projects/ailimits used to
// fall back to 404.html (HTTP 404 + JS redirect). This writes a copy of index.html
// into each route folder, so every page answers 200 and has its own title/meta.
const fs = require("fs");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");
const ORIGIN = "https://suleimansultanov.com";
const template = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");

const CV_DESC =
  "Suleiman Sultanov: AI Engineer and senior Python backend developer with 8+ years of experience. RAG, AI agents, FastAPI, AWS/GCP. M.Sc. Computer Science (Big Data & AI), SRH Berlin. Based near Nuremberg, Germany.";
const CV_KEYWORDS =
  "Suleiman Sultanov, AI Engineer, Python backend developer, LLM, RAG, AI agents, FastAPI, Django, AWS, GCP, Nuremberg, Germany";

const cv = (route, title) => ({
  route,
  title,
  description: CV_DESC,
  keywords: CV_KEYWORDS,
  siteName: "Suleiman Sultanov",
  themeColor: "#203146",
});

const ROUTES = [
  cv("/", "Suleiman Sultanov — AI Engineer & Senior Python Backend Developer"),
  cv("/experience", "Experience — Suleiman Sultanov"),
  cv("/projects", "Projects — Suleiman Sultanov"),
  cv("/education", "Education — Suleiman Sultanov"),
  cv("/skills", "Skills — Suleiman Sultanov"),
  { route: "/projects/ailimits" }, // keeps the AILIMITS meta from public/index.html
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function render({ route, title, description, keywords, siteName, themeColor }) {
  const url = ORIGIN + (route === "/" ? "/" : `${route}/`);
  let html = template
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  if (!title) return html;
  const t = esc(title);
  const d = esc(description);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${d}" />`)
    .replace(/<meta name="keywords" content="[^"]*"\s*\/?>/, `<meta name="keywords" content="${esc(keywords)}" />`)
    .replace(/<meta name="theme-color" content="[^"]*"\s*\/?>/, `<meta name="theme-color" content="${themeColor}" />`)
    .replace(/<meta property="og:site_name" content="[^"]*"\s*\/?>/, `<meta property="og:site_name" content="${esc(siteName)}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${ORIGIN}/suleiman-sultanov.jpg" />`)
    .replace(/<meta name="twitter:card" content="[^"]*"\s*\/?>/, `<meta name="twitter:card" content="summary" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${d}" />`);
}

for (const r of ROUTES) {
  const out = r.route === "/" ? path.join(BUILD, "index.html") : path.join(BUILD, r.route, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(r));
  console.log("static route:", r.route, "->", path.relative(BUILD, out));
}
