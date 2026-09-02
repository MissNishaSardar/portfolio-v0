"use client";

import { motion } from "motion/react";

import { softSkills } from "@/data/portfolio";
import { defaultSoftSkillMeta, softSkillMeta } from "@/lib/skillsMeta";
import { cn } from "@/lib/utils";

export default function SoftSkillsGrid() {
  return (
    <div className="relative w-full max-w-5xl">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {softSkills.map((skill, index) => {
          const { icon: Icon, color } =
            softSkillMeta[skill.title] ?? defaultSoftSkillMeta;
          const hoverColor = color.replace(
            "group-hover/skill:",
            "group-hover/card:",
          );

          return (
            <motion.li
              key={skill.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group/card h-full">
              <div className="border-glass-border bg-glass/60 hover:bg-glass relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border p-4 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                {/* quote mark accent */}
                <span
                  aria-hidden="true"
                  className="text-muted-foreground/15 pointer-events-none absolute top-3 left-3 font-serif text-3xl leading-none select-none">
                  “
                </span>

                <div className="relative flex items-start gap-3 pt-1">
                  <span className="border-glass-border bg-glass-pill flex size-9 shrink-0 items-center justify-center rounded-xl border backdrop-blur-sm">
                    <Icon
                      className={cn(
                        "size-[18px] shrink-0 opacity-70 grayscale transition-all duration-200 group-hover/card:opacity-100 group-hover/card:grayscale-0",
                        "text-muted-foreground",
                        hoverColor,
                      )}
                    />
                  </span>
                  <h3 className="pt-1.5 text-[14px] leading-tight font-semibold tracking-tight">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-muted-foreground relative text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
