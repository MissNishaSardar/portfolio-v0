import {
  Atom,
  Boxes,
  Braces,
  ClipboardCheck,
  Code2,
  Component,
  Database,
  Flame,
  GitBranch,
  GitFork,
  Layers,
  MessageCircle,
  MessageCircleQuestion,
  MessageSquareHeart,
  PenTool,
  Plug,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Wind,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const skillMeta: Record<string, { icon: LucideIcon; color: string }> = {
  React: { icon: Atom, color: "group-hover/skill:text-sky-500" },
  "Next.js": { icon: Boxes, color: "group-hover/skill:text-foreground" },
  TypeScript: { icon: Braces, color: "group-hover/skill:text-blue-600" },
  "Tailwind CSS": { icon: Wind, color: "group-hover/skill:text-cyan-500" },
  Bootstrap: { icon: Boxes, color: "group-hover/skill:text-purple-500" },
  "shadcn/ui": { icon: Component, color: "group-hover/skill:text-foreground" },
  Jotai: { icon: Atom, color: "group-hover/skill:text-rose-500" },
  Zod: { icon: ShieldCheck, color: "group-hover/skill:text-sky-600" },
  "Node.js": { icon: Server, color: "group-hover/skill:text-emerald-500" },
  PostgreSQL: { icon: Database, color: "group-hover/skill:text-sky-700" },
  SQLite: { icon: Database, color: "group-hover/skill:text-blue-400" },
  Prisma: { icon: Layers, color: "group-hover/skill:text-teal-500" },
  "REST APIs": { icon: Plug, color: "group-hover/skill:text-amber-500" },
  Git: { icon: GitBranch, color: "group-hover/skill:text-orange-600" },
  GitHub: { icon: GitFork, color: "group-hover/skill:text-foreground" },
  "CI/CD": { icon: Workflow, color: "group-hover/skill:text-emerald-500" },
  Figma: { icon: PenTool, color: "group-hover/skill:text-pink-500" },
  "ESLint & Prettier": {
    icon: Braces,
    color: "group-hover/skill:text-violet-500",
  },
};

export const defaultSkillMeta = {
  icon: Code2,
  color: "group-hover/skill:text-primary",
};

export const softSkillMeta: Record<
  string,
  { icon: LucideIcon; color: string }
> = {
  'Saying "I don\'t know"': {
    icon: MessageCircleQuestion,
    color: "group-hover/skill:text-sky-500",
  },
  "Patience with messy code": {
    icon: Code2,
    color: "group-hover/skill:text-violet-500",
  },
  "Owning mistakes": {
    icon: ShieldCheck,
    color: "group-hover/skill:text-amber-500",
  },
  "Feedback without ego": {
    icon: MessageSquareHeart,
    color: "group-hover/skill:text-rose-500",
  },
  "Calm when it breaks": {
    icon: Flame,
    color: "group-hover/skill:text-orange-500",
  },
  "Shipping over polishing": {
    icon: Rocket,
    color: "group-hover/skill:text-emerald-500",
  },
  "Listening for the real question": {
    icon: Search,
    color: "group-hover/skill:text-indigo-500",
  },
  "Doing what I said": {
    icon: ClipboardCheck,
    color: "group-hover/skill:text-blue-500",
  },
};

export const defaultSoftSkillMeta = {
  icon: MessageCircle,
  color: "group-hover/skill:text-primary",
};

export const skillJokes: Record<string, string> = {
  React: "React made me believe in reusable relationships \u26A1\uFE0F",
  "Next.js":
    "Next.js never ghosts you \u2014 it always SSR's back \uD83D\uDE0F",
  TypeScript: "'any' is a bad word here. TypeScript said so \uD83E\uDD2D",
  "Tailwind CSS":
    "47 Tailwind classes later... just one more div! \uD83C\uDFA8",
  Bootstrap:
    "Bootstrap held my first layout together like duct tape \uD83D\uDCAA",
  "shadcn/ui": "Copy, paste, pretend I designed it \u2014 shhh \uD83E\uDD2B",
  Jotai: "So atomic even physics is jealous \u269B\uFE0F",
  Zod: "Zod validates my life choices too \u2705",
  "Node.js": "Runs on caffeine and event loops \u2615",
  PostgreSQL: "Never forgets. Like my linter \uD83D\uDC18",
  SQLite: "Whole DB in one file. Wild \uD83D\uDCC1",
  Prisma: "Makes SQL feel like TypeScript magic \u2728",
  "REST APIs": "Still RESTing, never stressed \u2014 200 OK \uD83D\uDE0C",
  Git: "git commit -m 'fix: fixed the fix' \uD83D\uDD01",
  GitHub: "My second home. Stars are rent \u2B50",
  "CI/CD": "Push, pray, green tick, repeat \uD83D\uDE4F",
  Figma: "Where pixels become promises \u270F\uFE0F",
  "ESLint & Prettier":
    "ESLint yells, Prettier fixes. Perfect couple \uD83D\uDC85",
};
