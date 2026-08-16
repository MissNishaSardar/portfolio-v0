"use client";

import {
  Atom,
  Boxes,
  Braces,
  Code2,
  Component,
  Database,
  GitBranch,
  GitFork,
  Layers,
  PenTool,
  Plug,
  Server,
  ShieldCheck,
  Wind,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/shadcnui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { SkillCategory, SkillIcon } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<SkillIcon, typeof Code2> = {
  code: Code2,
  server: Server,
  database: Database,
  wrench: Wrench,
};

const skillMeta: Record<string, { icon: LucideIcon; color: string }> = {
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

const defaultMeta = { icon: Code2, color: "group-hover/skill:text-primary" };

type SkillCardProps = {
  category: SkillCategory;
  index?: number;
};

const SkillCard = ({ category, index = 0 }: SkillCardProps) => {
  const Icon = iconMap[category.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative h-full">
      <Card className="relative h-full border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                  category.accent,
                )}>
                <Icon size={18} />
              </span>
              {category.title}
            </span>

            <Badge variant="secondary">{category.skills.length}</Badge>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="flex flex-wrap gap-3">
            {category.skills.map((skill) => {
              const { icon: SkillIcon, color } =
                skillMeta[skill] ?? defaultMeta;

              return (
                <li key={skill}>
                  <span className="group/skill text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-md">
                    <SkillIcon
                      className={cn(
                        "text-muted-foreground size-4 opacity-50 grayscale transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/skill:opacity-100 group-hover/skill:grayscale-0",
                        color,
                      )}
                    />
                    {skill}
                  </span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
