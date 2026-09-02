"use client";

import { motion } from "motion/react";

import { skills } from "@/data/portfolio";
import { defaultSkillMeta, skillJokes, skillMeta } from "@/lib/skillsMeta";
import { cn } from "@/lib/utils";

export default function ToolkitGrid() {
  const allSkills = skills.flatMap((category) => category.skills);

  return (
    <div className="relative w-full max-w-3xl">
      <ul className="relative flex flex-wrap justify-center gap-4 gap-y-5 sm:gap-5 sm:gap-y-6">
        {allSkills.map((skill, index) => {
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
              className="group relative">
              <span className="group/skill text-muted-foreground hover:text-foreground border-glass-border bg-glass-pill hover:bg-glass hover:border-glass-border inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-[15px] leading-none font-medium shadow-sm backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-md sm:px-[22px] sm:py-[11px]">
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
                  "pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-48 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                  "hidden sm:block",
                )}>
                <div
                  className={cn(
                    "relative rounded-sm border border-amber-200/60 bg-[#fef08a] px-3 py-2.5 text-center shadow-[0_4px_12px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] dark:border-amber-300/50 dark:bg-[#fef9c3]",
                    rotation,
                  )}>
                  {/* Tape */}
                  <div className="absolute -top-1.5 left-1/2 h-3 w-10 -translate-x-1/2 rounded-sm bg-white/60 shadow-sm backdrop-blur-sm dark:bg-white/70" />
                  {/* Pin dot */}
                  <div className="absolute -top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber-400/60 dark:bg-amber-500/50" />
                  <p className="font-mono text-[11px] leading-tight font-medium text-amber-900">
                    {joke}
                  </p>
                  {/* Little folded corner */}
                  <div className="absolute right-0 bottom-0 size-3 bg-gradient-to-tl from-amber-200/80 to-transparent dark:from-amber-300/60" />
                </div>
                {/* Arrow */}
                <div className="mx-auto h-2 w-2 -translate-y-[1px] rotate-45 border-r border-b border-amber-200/60 bg-[#fef08a] dark:border-amber-300/50 dark:bg-[#fef9c3]" />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
