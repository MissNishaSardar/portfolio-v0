"use client";

import { Code2, Database, Server, Wrench } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/shadcnui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { SkillCategory, SkillIcon } from "@/data/portfolio";
import { defaultSkillMeta, skillJokes, skillMeta } from "@/lib/skillsMeta";
import { cn } from "@/lib/utils";

const iconMap: Record<SkillIcon, typeof Code2> = {
  code: Code2,
  server: Server,
  database: Database,
  wrench: Wrench,
};

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
      <Card className="border-glass-border bg-glass ring-glass-ring relative h-full border shadow-[var(--glass-shadow)] ring-1 backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1 group-hover:shadow-[var(--glass-shadow-hover)]">
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
            {category.skills.map((skill, skillIndex) => {
              const { icon: SkillIcon, color } =
                skillMeta[skill] ?? defaultSkillMeta;
              const joke =
                skillJokes[skill] ?? "Makes the web go brrr \uD83D\uDE80";
              const rotation =
                skillIndex % 3 === 0 ?
                  "rotate-[-2deg] group-hover:rotate-[-1deg]"
                : skillIndex % 3 === 1 ?
                  "rotate-[1.5deg] group-hover:rotate-[0.5deg]"
                : "rotate-[-1deg] group-hover:rotate-[1deg]";

              return (
                <li
                  key={skill}
                  className="group/pill relative">
                  <span className="group/skill text-muted-foreground hover:text-foreground border-glass-border bg-glass-pill hover:bg-glass hover:border-glass-border inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-[15px] leading-none font-medium shadow-sm backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-md">
                    <SkillIcon
                      className={cn(
                        "text-muted-foreground size-[18px] shrink-0 opacity-50 grayscale transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/skill:opacity-100 group-hover/skill:grayscale-0",
                        color,
                      )}
                    />
                    {skill}
                  </span>

                  {/* Sticky note on hover */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-48 -translate-x-1/2 translate-y-1 transform-gpu opacity-0 transition-[opacity,transform] duration-150 ease-out will-change-transform group-hover/pill:pointer-events-auto group-hover/pill:translate-y-0 group-hover/pill:opacity-100 sm:block",
                    )}>
                    <div
                      className={cn(
                        "bg-card border-border relative rounded-sm border px-3 py-2.5 text-center shadow-md",
                        rotation,
                      )}>
                      <div className="absolute -top-1.5 left-1/2 h-3 w-10 -translate-x-1/2 rounded-sm bg-white/80 shadow-sm dark:bg-white/15" />
                      <div className="bg-muted-foreground/25 absolute -top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full" />
                      <p className="text-foreground font-mono text-[11px] leading-tight font-medium">
                        {joke}
                      </p>
                      <div className="from-border/40 absolute right-0 bottom-0 size-3 bg-gradient-to-tl to-transparent" />
                    </div>
                    <div className="bg-card border-border mx-auto h-2 w-2 -translate-y-[1px] rotate-45 border-r border-b" />
                  </div>
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
