import type { Route } from "next";

export type SocialIcon = "github" | "linkedin" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type SkillIcon = "code" | "server" | "database" | "wrench";

export type SkillCategory = {
  title: string;
  icon: SkillIcon;
  skills: string[];
  accent: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  accent: string;
  initials: string;
};

export const profile = {
  name: "Nisha Sardar",
  role: "Full-Stack Developer",
  tagline: "Building fast, accessible, and delightful web experiences.",
  bio: "I'm a full-stack developer specializing in Next.js, React, TypeScript, and Node.js, with PostgreSQL and Prisma for type-safe data access, and Zod + Jotai for validated, atomic UI state.\n\nMy philosophy is simple: write clean, maintainable code and design interfaces that feel intuitive and fast. I bridge the gap between backend logic and frontend aesthetics to deliver seamless digital products from concept to deployment.",
  email: "missnishasardar@gmail.com",
  location: "India",
};

export const navLinks: { label: string; href: Route }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },

  { label: "Contact", href: "/contact" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/MissNishaSardar",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nisha-sardar/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      "Jotai",
      "Zod",
    ],
    accent: "from-sky-500 to-indigo-600",
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "PostgreSQL", "SQLite", "Prisma", "REST APIs"],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Figma", "ESLint & Prettier"],
    accent: "from-violet-500 to-fuchsia-600",
  },
];

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A kanban-style task manager with drag-and-drop boards, real-time collaboration, Prisma + PostgreSQL for type-safe persistence, and Zod-validated APIs with Jotai-powered optimistic UI.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod", "Jotai"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/MissNishaSardar",
    accent: "from-sky-500 to-indigo-600",
    initials: "TF",
  },
  {
    title: "DevNotes",
    description:
      "A markdown-first note-taking app with syntax highlighting, code snippets, and full-text search — SQLite + Prisma with Zod schemas for offline-first storage.",
    tags: ["React", "Node.js", "SQLite", "Prisma", "Zod", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/MissNishaSardar",
    accent: "from-emerald-500 to-teal-600",
    initials: "DN",
  },
  {
    title: "PulseBoard",
    description:
      "A dashboard that aggregates analytics from multiple sources into one clean, real-time overview with REST APIs, Redis caching, and Zod-validated data pipelines.",
    tags: ["Next.js", "Zod", "REST APIs", "Redis", "Chart.js"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/MissNishaSardar",
    accent: "from-violet-500 to-fuchsia-600",
    initials: "PB",
  },
];
