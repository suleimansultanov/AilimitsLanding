// CV content. Source of truth: Job-search/cv/cv.md — keep both in sync.
// Never name the client: always "a real-estate marketing agency".

export const profile = {
  name: "Suleiman Sultanov",
  title: "AI Engineer · Senior Python Backend Developer",
  location: "Pegnitz (Nuremberg area), Germany",
  workStatus: "Authorized to work in Germany",
  email: "suleimansultanov@gmail.com",
  founderEmail: "founder@suleimansultanov.com", // AILIMITS
  phone: "+49 151 41545791",
  phoneHref: "tel:+4915141545791",
  linkedin: "https://www.linkedin.com/in/suleiman-sultanov-292247202",
  github: "https://github.com/suleimansultanov",
  cvPdf: "/Suleiman_Sultanov_CV.pdf",
  photo: null, // e.g. "/suleiman.jpg" once the headshot is ready
};

export const summary =
  "AI Engineer and senior Python backend developer with 8+ years of experience shipping production systems end to end: data model, APIs, cloud infrastructure and LLM features. In 2026 I built a RAG knowledge base with AI agents, an AI proposal generator and AI sales reporting for a real-estate marketing agency, and led the technical side of a licensed brokerage platform.";

export const lookingFor =
  "A full-time AI/ML or backend role, remote in Germany or hybrid around Nuremberg, with English as the working language.";

export const stats = [
  { value: "8+", label: "Years in software", note: "Since December 2018" },
  { value: "4", label: "AI products in 2026", note: "RAG, agents, automation" },
  { value: "1.5", label: "M.Sc. thesis grade", note: "SRH Berlin · 1.0 = best" },
  { value: "4", label: "Languages", note: "EN · DE · RU · KY" },
];

export const focus = [
  "LLM applications: RAG with pgvector and embeddings, AI agents, Claude, OpenAI, Gemini and Mistral APIs",
  "Python backends: FastAPI, Django, Celery, SQLAlchemy; also C# / ASP.NET Core and TypeScript",
  "Cloud and DevOps: AWS, GCP, Hetzner, Vercel, Docker, GitHub Actions",
  "Automation and integrations: n8n, OAuth 2.0, Google Workspace, Slack, Notion, Canva Connect API",
  "Team lead experience: led a remote developer team at Bookinglane",
];

export const experience = [
  {
    role: "Software / Machine Learning Engineer",
    org: "Unit AI",
    place: "Remote",
    dates: "Apr 2024 – present",
    bullets: [
      "In 2026, built four AI products for a real-estate marketing agency client: a RAG knowledge base with AI agents, an AI proposal generator, AI sales reporting and a property-portal monitoring agent (see Projects).",
      "Integrated OpenAI and Gemini LLM APIs for automated test-case generation and log analysis, cutting bug-triage time.",
      "Built a distributed task-processing system with Celery and RabbitMQ for concurrent test execution and large-scale data processing.",
      "Architected and ran cloud infrastructure on AWS and GCP: EC2, load balancers, PostgreSQL replication for high availability.",
      "Built n8n business automations, including social-media auto-posting and invoice-collection pipelines.",
      "Developed UI test suites for React and Vue.js apps and automated Android performance monitoring via ADB.",
    ],
    tags: ["Python", "LLM APIs", "RAG", "Celery", "RabbitMQ", "AWS", "GCP", "n8n"],
  },
  {
    role: "Full-Stack Developer",
    org: "BeProTravel",
    place: "Tel Aviv, Israel · Remote",
    dates: "May 2022 – Apr 2024",
    bullets: [
      "Built and integrated an ML model for personalised travel recommendations, increasing user engagement.",
      "Developed full-stack applications in C# / ASP.NET Core and Python APIs for the core travel platform.",
      "Built CMS tools for travel agencies and a Python CRM integrated with Telegram bots.",
      "Developed native iOS apps in Swift.",
    ],
    tags: ["Python", "Machine learning", "C#", "ASP.NET Core", "Swift"],
  },
  {
    role: "Full-Stack Developer",
    org: "Bookinglane",
    place: "San Francisco, USA · Remote",
    dates: "Aug 2020 – Apr 2022",
    bullets: [
      "Led a remote team of developers and increased delivery speed by at least 20%.",
      "Built the taxi reservation platform, driver app and manager dashboard (Python, Django, React, ASP.NET Core).",
      "Deployed backend services on AWS and integrated Stripe and PayPal payments.",
      "Developed native iOS apps in Swift for the driver and manager roles.",
    ],
    tags: ["Team lead", "Django", "React", "AWS", "Stripe", "Swift"],
  },
  {
    role: "Software Engineer",
    org: "IROKEZ",
    place: "Bishkek, Kyrgyzstan",
    dates: "Dec 2018 – Aug 2020",
    bullets: [
      "Built C# / ASP.NET and WCF services, REST APIs and HTML/JavaScript front ends; designed database schemas.",
    ],
    tags: ["C#", "ASP.NET", "WCF", "REST APIs", "SQL"],
  },
];

export const projectGroups = [
  {
    title: "Own products",
    projects: [
      {
        name: "AILIMITS",
        tagline: "Verification layer for AI agents",
        meta: "Founder · Mar 2026 – present",
        text: "Verification and audit layer that checks every action of an AI agent before it commits, for finance and back-office automation.",
        tags: ["AI agents", "Verification", "Audit trail"],
        link: { label: "Project page", to: "/projects/ailimits" },
        contact: "founder@suleimansultanov.com",
        featured: true,
      },
    ],
  },
  {
    title: "Client work for a real-estate marketing agency (2026)",
    projects: [
      {
        name: "AI Brain",
        tagline: "Company knowledge base with RAG and AI agents",
        meta: "2026",
        text: "Private knowledge base and AI file manager: documents synced from Google Drive, Notion, Gmail and Slack, searchable through RAG chat and AI agents.",
        tags: ["Next.js 15", "React 19", "PostgreSQL + pgvector", "S3", "Claude", "OpenAI embeddings", "Inngest", "RBAC"],
      },
      {
        name: "AI Proposal Generator",
        tagline: "From sales call to branded proposal",
        meta: "2026",
        text: "Turns sales-call transcripts (Fathom API) into a pre-filled proposal and a branded PowerPoint deck, imports it into Canva as an editable design and exports PDF via the Canva Connect API (OAuth 2.0 with PKCE). Template library with placeholders, AI-generated designs and proposal history.",
        tags: ["Fathom API", "Canva Connect API", "OAuth 2.0 PKCE", "LLM"],
      },
      {
        name: "AI sales-performance reporting",
        tagline: "Weekly call reports in n8n",
        meta: "2026",
        text: "n8n workflows that build weekly call reports for inbound and outbound sales teams with AI analysis, store them in the knowledge base and email them to management.",
        tags: ["n8n", "LLM analysis", "Automation"],
      },
      {
        name: "Property-portal monitoring agent",
        tagline: "Listings collector with dashboard",
        meta: "2026",
        text: "Collector that crawls property portals, deduplicates listings and runs as background jobs, with a Next.js dashboard and authentication.",
        tags: ["TypeScript", "Next.js", "PostgreSQL", "Background jobs"],
      },
    ],
  },
  {
    title: "Other projects",
    projects: [
      {
        name: "Zaman Invest",
        tagline: "Digital brokerage platform",
        meta: "Technical Director · Jun 2026 – present",
        text: "Owned architecture and delivery for a licensed securities broker in Kyrgyzstan: public site with market quotes, client app (PWA) with online account opening and digital identity verification, and an internal back-office dashboard.",
        tags: ["Architecture", "PWA", "Identity verification", "Back office"],
        link: { label: "zamaninvest.kg", href: "https://zamaninvest.kg" },
      },
      {
        name: "LawMinded AI",
        tagline: "EU AI Act compliance platform",
        meta: "Backend & AI",
        text: "Built the backend, API and a RAG-based legal assistant that answers with citations.",
        tags: ["RAG", "Citations", "Backend", "API"],
        link: { label: "lawmindedai.com", href: "https://lawmindedai.com" },
      },
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science (Big Data & Artificial Intelligence)",
    school: "SRH Berlin University of Applied Sciences",
    dates: "Oct 2024 – Oct 2026",
    details: [
      "Thesis, grade 1.5 (German scale, 1.0 = best): Adaptive Hybrid Kernel SVMs: Dynamic Feature Weighting for Noisy, High-Dimensional IoT Healthcare Data.",
      "Human activity recognition on IoT healthcare data, evaluated on the OPPORTUNITY and CASAS datasets against SVM-RBF, linear SVM and static MKL baselines.",
    ],
  },
  {
    degree: "B.Sc. Computer Science",
    school: "International University of Innovation Technology, Bishkek, Kyrgyzstan",
    dates: "2019",
    details: [],
  },
];

export const certifications = [
  { name: "Data Science: Foundations using R", issuer: "Coursera" },
  { name: "Python in Data Science", issuer: "Coursera" },
  { name: "C# Developer Course", issuer: "Attractor School, Bishkek" },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "A2, actively learning" },
  { name: "Russian", level: "Native" },
  { name: "Kyrgyz", level: "Native" },
];

export const skills = [
  { group: "AI / LLM", items: ["RAG (pgvector, embeddings)", "AI agents", "Claude", "OpenAI", "Gemini", "Mistral"] },
  { group: "Machine learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "SVMs and kernel methods"] },
  { group: "Backend", items: ["Python", "FastAPI", "Django", "Celery", "SQLAlchemy", "Pytest", "C# / ASP.NET Core", "TypeScript", "REST APIs", "Microservices"] },
  { group: "Data & messaging", items: ["PostgreSQL", "MySQL", "MongoDB", "RabbitMQ", "Inngest background jobs"] },
  { group: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda, load balancers)", "GCP", "Hetzner", "Vercel", "Docker", "Jenkins", "GitHub Actions"] },
  { group: "Automation & integrations", items: ["n8n", "OAuth 2.0", "Google Workspace", "Slack", "Notion", "Canva Connect API", "Fathom API", "Stripe", "PayPal"] },
  { group: "Frontend & mobile", items: ["React", "Next.js", "Vue.js", "Swift (iOS)"] },
];
