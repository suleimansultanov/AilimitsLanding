import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  certifications,
  education,
  experience,
  focus,
  languages,
  lookingFor,
  profile,
  projectGroups,
  skills,
  stats,
  summary,
} from "./data";

const TABS = [
  { to: "/", label: "About", title: "AI Engineer & Senior Python Backend Developer" },
  { to: "/experience", label: "Experience", title: "Experience" },
  { to: "/projects", label: "Projects", title: "Projects" },
  { to: "/education", label: "Education", title: "Education" },
  { to: "/skills", label: "Skills", title: "Skills" },
];

/* ---------- small building blocks ---------- */

const Chip = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 font-cvmono text-[11px] font-medium uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-100">
    {children}
  </span>
);

const Tag = ({ children }) => (
  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">{children}</span>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, children }) => (
  <div className="mb-5">
    {eyebrow && <p className="font-cvmono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-600">{eyebrow}</p>}
    <h2 className="mt-1 font-cvheading text-2xl font-bold text-slate-900">{children}</h2>
  </div>
);

const Initials = () => (
  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 font-cvheading text-4xl font-bold text-white">
    SS
  </div>
);

/* ---------- sidebar ---------- */

const ContactRow = ({ icon: Icon, href, children, external }) => (
  <li>
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
    >
      <Icon className="h-4 w-4 shrink-0 text-blue-300" aria-hidden="true" />
      <span className="min-w-0 break-words">{children}</span>
    </a>
  </li>
);

const Sidebar = () => (
  <aside className="no-scrollbar bg-[#203146] text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-80 lg:overflow-y-auto">
    <div className="flex flex-col items-center px-6 pb-8 pt-10 text-center lg:pt-14">
      <div className="h-36 w-36 overflow-hidden rounded-full ring-4 ring-blue-400/60 ring-offset-4 ring-offset-[#203146]">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
        ) : (
          <Initials />
        )}
      </div>
      <h1 className="mt-6 font-cvheading text-2xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-sm text-slate-300">{profile.title}</p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Open to full-time roles
      </div>
    </div>

    <div className="px-6 pb-10">
      <ul className="space-y-1">
        <ContactRow icon={Mail} href={`mailto:${profile.email}`}>{profile.email}</ContactRow>
        <ContactRow icon={Mail} href={`mailto:${profile.founderEmail}`}>
          {profile.founderEmail}
          <span className="block text-xs text-slate-400">AILIMITS</span>
        </ContactRow>
        <ContactRow icon={Phone} href={profile.phoneHref}>{profile.phone}</ContactRow>
        <ContactRow icon={MapPin} href="https://www.google.com/maps/search/?api=1&query=Pegnitz%2C%20Germany" external>
          {profile.location}
        </ContactRow>
        <ContactRow icon={Linkedin} href={profile.linkedin} external>LinkedIn</ContactRow>
        <ContactRow icon={Github} href={profile.github} external>GitHub</ContactRow>
      </ul>

      <a
        href={profile.cvPdf}
        download
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
      >
        <FileDown className="h-4 w-4" aria-hidden="true" />
        Download CV (PDF)
      </a>

      <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs text-slate-300">
        <BadgeCheck className="h-4 w-4 shrink-0 text-blue-300" aria-hidden="true" />
        {profile.workStatus}
      </div>
    </div>
  </aside>
);

/* ---------- sections ---------- */

const About = () => (
  <div className="space-y-6">
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Chip>Profile</Chip>
        <span className="flex items-center gap-1.5 font-cvmono text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Nuremberg area, Germany
        </span>
      </div>
      <h2 className="mt-5 font-cvheading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        AI Engineer &amp; Senior Python Backend Developer
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{summary}</p>
      <p className="mt-3 text-base leading-relaxed text-slate-600">
        M.Sc. Computer Science (Big Data &amp; AI), SRH Berlin, 2026.
      </p>
    </Card>

    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-slate-200 border-t-blue-500 border-t-2 bg-white p-5 shadow-sm">
          <p className="font-cvheading text-3xl font-bold text-slate-900">{s.value}</p>
          <p className="mt-1 text-sm font-medium text-slate-700">{s.label}</p>
          <p className="mt-1 font-cvmono text-[11px] text-blue-600">{s.note}</p>
        </div>
      ))}
    </div>

    <Card>
      <SectionTitle eyebrow="Focus">What I work on</SectionTitle>
      <ul className="space-y-3">
        {focus.map((f) => (
          <li key={f} className="flex gap-3 text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </Card>

    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <SectionTitle eyebrow="Next step">Looking for</SectionTitle>
        <p className="text-slate-600">{lookingFor}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> Get in touch
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
          >
            See projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Card>
      <Card>
        <SectionTitle eyebrow="Linguistics">Languages</SectionTitle>
        <div className="grid grid-cols-2 gap-3">
          {languages.map((l) => (
            <div key={l.name} className="rounded-xl bg-slate-50 px-4 py-3">
              <p className="font-semibold text-slate-800">{l.name}</p>
              <p className="text-sm text-slate-500">{l.level}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

const Experience = () => (
  <div className="space-y-6">
    <SectionTitle eyebrow="Career">Professional experience</SectionTitle>
    <ol className="relative space-y-6 border-l-2 border-slate-200 pl-6 sm:pl-8">
      {experience.map((job) => (
        <li key={job.org + job.dates} className="relative">
          <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-white bg-blue-500 shadow sm:-left-[41px]" />
          <Card>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-cvheading text-lg font-bold text-slate-900">{job.role}</h3>
              <span className="font-cvmono text-xs text-slate-500">{job.dates}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-blue-700">
              {job.org} <span className="text-slate-400">·</span> <span className="text-slate-500">{job.place}</span>
            </p>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-slate-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Card>
        </li>
      ))}
    </ol>
  </div>
);

const ProjectLink = ({ link }) => {
  if (!link) return null;
  const cls = "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-500";
  if (link.to) {
    return (
      <Link to={link.to} className={cls}>
        {link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
};

const ProjectCard = ({ p }) => (
  <div
    className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${
      p.featured ? "border-violet-200 ring-1 ring-violet-100" : "border-slate-200"
    }`}
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="font-cvheading text-lg font-bold text-slate-900">{p.name}</h3>
        <p className="text-sm text-slate-500">{p.tagline}</p>
      </div>
      {p.featured && (
        <span className="rounded-full bg-violet-600 px-2.5 py-0.5 font-cvmono text-[10px] font-medium uppercase tracking-wider text-white">
          Own product
        </span>
      )}
    </div>
    <p className="mt-2 font-cvmono text-[11px] uppercase tracking-wider text-blue-600">{p.meta}</p>
    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">{p.text}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
    {p.contact && (
      <a
        href={`mailto:${p.contact}`}
        className="mt-4 flex w-fit items-center gap-2 text-sm text-slate-600 hover:text-blue-700"
      >
        <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
        {p.contact}
      </a>
    )}
    <ProjectLink link={p.link} />
  </div>
);

const Projects = () => (
  <div className="space-y-10">
    {projectGroups.map((g) => (
      <section key={g.title}>
        <SectionTitle eyebrow="Projects">{g.title}</SectionTitle>
        <div className={`grid gap-5 ${g.projects.length > 1 ? "md:grid-cols-2" : ""}`}>
          {g.projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>
    ))}
  </div>
);

const Education = () => (
  <div className="space-y-6">
    <SectionTitle eyebrow="Academic">Education</SectionTitle>
    {education.map((e) => (
      <Card key={e.degree}>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-cvheading text-lg font-bold text-slate-900">{e.degree}</h3>
          <span className="font-cvmono text-xs text-slate-500">{e.dates}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-blue-700">{e.school}</p>
        {e.details.length > 0 && (
          <ul className="mt-4 space-y-2">
            {e.details.map((d) => (
              <li key={d} className="flex gap-3 text-[15px] text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    ))}
    <Card>
      <SectionTitle eyebrow="Courses">Certifications</SectionTitle>
      <ul className="divide-y divide-slate-100">
        {certifications.map((c) => (
          <li key={c.name} className="flex flex-col py-3 sm:flex-row sm:justify-between">
            <span className="font-medium text-slate-800">{c.name}</span>
            <span className="text-sm text-slate-500">{c.issuer}</span>
          </li>
        ))}
      </ul>
    </Card>
  </div>
);

const Skills = () => (
  <div className="space-y-6">
    <SectionTitle eyebrow="Stack">Technical skills</SectionTitle>
    <div className="grid gap-5 md:grid-cols-2">
      {skills.map((s) => (
        <Card key={s.group} className="!p-6">
          <h3 className="font-cvheading text-base font-bold text-slate-900">{s.group}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.items.map((i) => (
              <span key={i} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm text-slate-700">
                {i}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const SECTIONS = {
  "/": About,
  "/experience": Experience,
  "/projects": Projects,
  "/education": Education,
  "/skills": Skills,
};

/* ---------- page ---------- */

export default function CvSite() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  const Section = SECTIONS[path] || About;
  const tab = TABS.find((t) => t.to === path) || TABS[0];

  useEffect(() => {
    document.documentElement.classList.add("cv-theme");
    return () => document.documentElement.classList.remove("cv-theme");
  }, []);

  useEffect(() => {
    document.title = path === "/" ? `${profile.name} — ${tab.title}` : `${tab.title} — ${profile.name}`;
    window.scrollTo(0, 0);
  }, [path, tab.title]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-cvsans text-slate-700 antialiased">
      <Sidebar />
      <div className="lg:ml-80">
        <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="no-scrollbar mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 sm:px-8">
            {TABS.map((t) => (
              <NavLink
                key={t.to}
                to={t.to}
                end
                className={({ isActive }) =>
                  `whitespace-nowrap border-b-2 px-3 py-4 text-sm font-medium transition-colors ${
                    isActive ? "border-blue-600 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-800"
                  }`
                }
              >
                {t.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
          <Section />
        </main>

        <footer className="mx-auto max-w-5xl px-4 pb-10 text-xs text-slate-400 sm:px-8">
          © 2026 {profile.name} · suleimansultanov.com
        </footer>
      </div>
    </div>
  );
}
