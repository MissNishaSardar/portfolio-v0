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

export type SoftSkill = {
  title: string;
  description: string;
  icon: SoftSkillIcon;
};

export type SoftSkillIcon =
  | "saying-unknown"
  | "patience-messy"
  | "owning-mistakes"
  | "feedback-ego"
  | "calm-breaks"
  | "shipping-polishing"
  | "listening-question"
  | "doing-said";

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
  bio: "Hello there,\nThanks for stopping by! Here is a look at my work and what I do. Take a look around, and if anything catches your eye, let's talk.\n\nI first stepped into programming in 2021. Back then, I didn't realize how powerful it was. To me, it just felt like playing an engaging game. Things really shifted in 2023 when I immersed myself deeper. Now, I focus on full-stack web development, building applications end-to-end.\n\nI feel incredibly fortunate that what started as a hobby grew into my career. I truly believe that when you love what you do, work feels more like play. Every project brings new challenges to tackle. Whether the solution is simple or complex, the process is always engaging.\n\nOutside of code, I am happiest spending time outdoors and discovering new paths. Navigating a mountain trail or exploring a new city requires the same focus, curiosity, and adaptability that I bring to web development.\n\nWhen I'm stepped away from the screen, I love getting outdoors, surrounding myself with plants, working on hands-on craft projects, or just doing nothing with a good playlist on.",
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

export const softSkills: SoftSkill[] = [
  {
    title: 'Saying "I don\'t know"',
    description:
      "A wrong guess costs a day. A five-second question costs five seconds. Easy math, and pretending to know things just makes you the slow one on the team.",
    icon: "saying-unknown",
  },
  {
    title: "Patience with messy code",
    description:
      "Legacy code was someone's best decision at the time. I read it like history, not like an insult.",
    icon: "patience-messy",
  },
  {
    title: "Owning mistakes",
    description:
      "I've broken builds and pointed the finger at myself within the hour. Hunting for blame wastes everyone's energy; 'here's the fix' doesn't.",
    icon: "owning-mistakes",
  },
  {
    title: "Feedback without ego",
    description:
      "My reviews go after the code, never the coder. And when someone improves my PR into something better, that's a win I thank them for.",
    icon: "feedback-ego",
  },
  {
    title: "Calm when it breaks",
    description:
      "When prod goes down, panic spreads, and so does calm. I start with 'what changed recently?' and work backwards. Firefighting is a process, not a mood.",
    icon: "calm-breaks",
  },
  {
    title: "Shipping over polishing",
    description:
      "Perfectionism is procrastination in a nicer outfit. I polish what users actually touch and stop tinkering where nobody can tell.",
    icon: "shipping-polishing",
  },
  {
    title: "Listening for the real question",
    description:
      "People rarely ask for what they actually need. I dig one question deeper before building. It has saved me from shipping the wrong thing more than once.",
    icon: "listening-question",
  },
  {
    title: "Doing what I said",
    description:
      "If I say 'I'll look into it,' it goes on my list, not into the void. Nobody should have to ask twice to count on me.",
    icon: "doing-said",
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
      "A markdown-first note-taking app with syntax highlighting, code snippets, and full-text search with SQLite + Prisma and Zod schemas for offline-first storage.",
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
