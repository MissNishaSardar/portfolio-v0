"use client";

import { motion } from "motion/react";

import { skills } from "@/data/portfolio";
import { defaultSkillMeta, skillJokes, skillMeta } from "@/lib/skillsMeta";
import { cn } from "@/lib/utils";

const ToolkitGrid = () => {
  const allSkills = skills.flatMap((category) => category.skills);
  const row1 = allSkills.slice(0, 7);
  const row2 = allSkills.slice(7, 13);
  const row3 = allSkills.slice(13, 17);

  const rows = [row1, row2, row3];

  return (
    <div className="relative flex w-full max-w-[740px] flex-col gap-2.5">
      {rows.map((row, rowIndex) => (
        <ul
          key={rowIndex}
          className="flex flex-wrap justify-start gap-2 sm:gap-3 lg:flex-nowrap">
          {row.map((skill) => {
            const index = allSkills.indexOf(skill);
            const { icon: SkillIcon, color } =
              skillMeta[skill] ?? defaultSkillMeta;
            const joke =
              skillJokes[skill] ?? "Makes the web go brrr \uD83D\uDE80";
            const rotation =
              index % 3 === 0 ? "rotate-[-2deg] group-hover:rotate-[-1deg]"
              : index % 3 === 1 ? "rotate-[1.5deg] group-hover:rotate-[0.5deg]"
              : "rotate-[-1deg] group-hover:rotate-[1deg]";

            return (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative focus-within:z-20">
                <span
                  tabIndex={0}
                  aria-describedby={`tooltip-${skill.replace(/\s+/g, "-")}`}
                  className="group/skill text-muted-foreground hover:text-foreground focus-visible:text-foreground border-glass-border bg-glass-pill hover:bg-glass hover:border-glass-border focus-visible:border-glass-border focus-visible:bg-glass focus-visible:ring-ring inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] leading-none font-medium shadow-sm backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-md focus-visible:-translate-y-1 focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:px-4 sm:py-2 sm:text-[14px]">
                  <SkillIcon
                    className={cn(
                      "text-muted-foreground size-[16px] shrink-0 opacity-50 grayscale transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-focus-within:opacity-100 group-focus-within:grayscale-0 group-hover/skill:opacity-100 group-hover/skill:grayscale-0 sm:size-[18px]",
                      color,
                    )}
                  />
                  {skill}
                </span>

                <div
                  id={`tooltip-${skill.replace(/\s+/g, "-")}`}
                  role="tooltip"
                  className={cn(
                    "pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-48 -translate-x-1/2 translate-y-1 transform-gpu opacity-0 transition-[opacity,transform] duration-150 ease-out will-change-transform group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                    "hidden sm:block",
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
              </motion.li>
            );
          })}
        </ul>
      ))}
    </div>
  );
};

export default ToolkitGrid;
