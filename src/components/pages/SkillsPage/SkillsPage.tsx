"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import SectionHeading from "@/components/SectionHeading";
import SoftSkillsGrid from "@/components/SoftSkillsGrid";
import ToolkitGrid from "@/components/ToolkitGrid";
import { cn } from "@/lib/utils";

type Tab = "technologies" | "soft-skills";

const SkillsPage = () => {
  const [tab, setTab] = useState<Tab>("technologies");

  const isTech = tab === "technologies";

  return (
    <section
      aria-labelledby="toolkit-heading"
      className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-visible pt-4 pb-32 sm:pt-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />

      {/* iOS sliding pill toggle — right corner */}
      <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <div
          role="tablist"
          aria-label="Skill category"
          className="bg-muted border-border inline-flex items-center gap-1 rounded-full border p-1 shadow-sm">
          {(["technologies", "soft-skills"] as const).map((value) => {
            const isActive = tab === value;
            const label =
              value === "technologies" ? "Technologies" : "Soft Skills";
            return (
              <button
                key={value}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${value}`}
                id={`tab-${value}`}
                onClick={() => setTab(value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    setTab(isTech ? "soft-skills" : "technologies");
                  }
                }}
                className={cn(
                  "focus-visible:ring-ring relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:px-5 sm:py-2",
                  isActive ? "text-foreground" : (
                    "text-muted-foreground hover:text-foreground"
                  ),
                )}>
                {isActive && (
                  <motion.span
                    layoutId="skills-tab-indicator"
                    className="bg-background absolute inset-0 rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-8 pt-2 text-center sm:pt-0">
        <SectionHeading
          id="toolkit-heading"
          title={isTech ? "My Toolkit" : "Soft Skills"}
          subtitle={
            isTech ?
              "Tools and technologies I use daily 💻— and the rest I know how to search, learn, and apply."
            : "How I work with people and problems 🤝 — because great products take more than just code 💡"
          }
          className="items-center text-center"
        />

        <AnimatePresence mode="wait">
          {isTech ?
            <motion.div
              key="technologies"
              id="panel-technologies"
              role="tabpanel"
              aria-labelledby="tab-technologies"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}>
              <ToolkitGrid />
            </motion.div>
          : <motion.div
              key="soft-skills"
              id="panel-soft-skills"
              role="tabpanel"
              aria-labelledby="tab-soft-skills"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}>
              <SoftSkillsGrid />
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsPage;
