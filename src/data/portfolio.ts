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
  bio: "I turn ideas into functional, production-ready web applications. Driven by curiosity and a hands-on approach to modern technology. I specialize in full-stack web development using Next.js, React, Node.js, and relational databases. I thrive on the full lifecycle of a feature—from designing interactive dashboards and handling authentication flows to optimizing database queries. I'm dedicated to clean code, continuous growth, and creating digital products that deliver real value.",
  email: "nisha@example.com",
  location: "India",
};

export const navLinks: { label: string; href: Route }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
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
    href: "https://www.linkedin.com/in/MissNishaSardar",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:nisha@example.com",
    icon: "mail",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "PostgreSQL", "Prisma", "REST APIs"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "Docker", "CI/CD", "Figma"],
  },
];

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A kanban-style task manager with drag-and-drop boards, real-time collaboration, and keyboard-first navigation.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/MissNishaSardar",
    accent: "from-sky-500 to-indigo-600",
    initials: "TF",
  },
  {
    title: "DevNotes",
    description:
      "A markdown-first note-taking app with syntax highlighting, code snippets, and full-text search across the whole library.",
    tags: ["React", "Node.js", "SQLite", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/MissNishaSardar",
    accent: "from-emerald-500 to-teal-600",
    initials: "DN",
  },
  {
    title: "PulseBoard",
    description:
      "A dashboard that aggregates analytics from multiple sources into one clean, real-time overview with custom widgets.",
    tags: ["Next.js", "Chart.js", "REST APIs", "Redis"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/MissNishaSardar",
    accent: "from-violet-500 to-fuchsia-600",
    initials: "PB",
  },
];
