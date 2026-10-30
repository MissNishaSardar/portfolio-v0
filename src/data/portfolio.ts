import type { Route } from "next";

export type SocialIcon = "github" | "linkedin" | "x" | "mail";

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
  bio: "Hello there,\nIt is nice that you have found me. If I had to strip away the noise of the outside world and reflect on myself, I would say that I'm a nyctophile, as my name implies, moving to the rhythmic pulse of life and filled with a warm, magnetic energy.\n\nThe year was 2021 when I first got a brief glance at programming. At the time, it just felt like a game; I was not yet aware of its vibrancy. I then immersed myself properly from 2023. With a deep interest in animal life, covering their physical structures, behaviors, and evolution, I am on track to graduate in 2026 in Zoology from WBSU.",
  email: "missnishasardar@gmail.com",
  location: "India",
};

export const navLinks: { label: string; href: Route }[] = [
  { label: "Home", href: "/" },
  { label: "Handbook", href: "/handbook" },
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
    label: "X",
    href: "https://x.com/MsNishaSardar",
    icon: "x",
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

export type JourneyMilestone = {
  eyebrow: string;
  title: string;
  text: string;
  tags: string[];
};

export const journey: JourneyMilestone[] = [
  {
    eyebrow: "2021",
    title: "It all started with a puzzle",
    text: "First contact with HTML and CSS, explored out of pure curiosity. It felt like solving a puzzle. No career plans. No roadmap.",
    tags: ["Curiosity", "Play"],
  },
  {
    eyebrow: "2022",
    title: "Another world on the side",
    text: "At WBSU, zoology joined the journey. A close look at how animals are formed, how they behave, and how they change over time.",
    tags: ["Zoology", "WBSU"],
  },
  {
    eyebrow: "2023",
    title: "Showing up every day",
    text: "Play turned into practice. Web development became the focus, with a little time given to it every day.",
    tags: ["Habit", "Web"],
  },
  {
    eyebrow: "Now",
    title: "Learning by making things",
    text: "Turning what has been learned into finished, working sites. Each practice project teaches something new about solving problems people actually have.",
    tags: ["Practice", "Shipping"],
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
