"use client";

import { motion } from "motion/react";

import { softSkills } from "@/data/portfolio";
import { defaultSoftSkillMeta, softSkillMeta } from "@/lib/skillsMeta";
import { cn } from "@/lib/utils";

export default function SoftSkillsGrid() {
  const row1 = softSkills.slice(0, 4);
  const row2 = softSkills.slice(4, 7);
  const rows = [row1, row2];

  return (
    <div className="relative flex w-full max-w-[740px] flex-col gap-2.5">
      {rows.map((row, rowIndex) => (
        <ul
          key={rowIndex}
          className="flex flex-wrap justify-start gap-2 sm:gap-2.5 lg:flex-nowrap lg:gap-2.5">
          {row.map((skill) => {
            const index = softSkills.indexOf(skill);
            const { icon: Icon, color } =
              softSkillMeta[skill.title] ?? defaultSoftSkillMeta;

            return (
              <motion.li
                key={skill.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative focus-within:z-20">
                <span
                  tabIndex={0}
                  aria-describedby={`tooltip-soft-${index}`}
                  className="group/skill text-muted-foreground hover:text-foreground focus-visible:text-foreground border-glass-border bg-glass-pill hover:bg-glass hover:border-glass-border focus-visible:border-glass-border focus-visible:bg-glass focus-visible:ring-ring inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] leading-none font-medium whitespace-nowrap shadow-sm backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-md focus-visible:-translate-y-1 focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:px-4 sm:py-2 sm:text-[13px]">
                  <Icon
                    className={cn(
                      "text-muted-foreground size-[16px] shrink-0 opacity-50 grayscale transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-focus-within:opacity-100 group-focus-within:grayscale-0 group-hover/skill:opacity-100 group-hover/skill:grayscale-0 sm:size-[18px]",
                      color,
                    )}
                  />
                  {skill.title}
                </span>

                <div
                  id={`tooltip-soft-${index}`}
                  role="tooltip"
                  className={cn(
                    "pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 translate-y-1 transform-gpu opacity-0 transition-[opacity,transform] duration-150 ease-out will-change-transform group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                    "hidden sm:block",
                  )}>
                  <div className="bg-card border-border relative rounded-lg border px-4 py-3 text-left shadow-md">
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {skill.description}
                    </p>
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
}
