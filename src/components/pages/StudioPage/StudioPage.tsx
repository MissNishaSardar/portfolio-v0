"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import SoftSkillsGrid from "@/components/SoftSkillsGrid";
import ToolkitGrid from "@/components/ToolkitGrid";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SectionId = "toolkit" | "skills" | "projects";

const StudioPage = () => {
  const [active, setActive] = useState<SectionId>("toolkit");

  useEffect(() => {
    const ids: SectionId[] = ["toolkit", "skills", "projects"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = [...visible].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        setActive(topMost.target.id as SectionId);
      },
      {
        rootMargin: "-90px 0px -60% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkBase =
    "flex items-center gap-2 border-l-2 py-1.5 pl-3 text-sm transition-colors";
  const linkActive =
    "border-l-sky-500 bg-sky-500/5 text-foreground dark:bg-sky-500/10";
  const linkInactive =
    "border-l-transparent text-muted-foreground hover:text-foreground";

  return (
    <div className="flex flex-1 flex-col gap-10 pt-4 pb-16 sm:pt-6">
      {/* Page heading - left-aligned, max-width ~720px */}
      <div className="flex w-full max-w-[720px] flex-col items-start gap-3 text-left">
        <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          Studio
        </span>
        <h1
          id="studio-heading"
          className="text-foreground text-left text-[clamp(2rem,4.2vw,3rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance">
          What I use &{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text font-serif font-normal text-transparent italic dark:from-sky-400 dark:to-indigo-400">
              what I build.
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-400"
            />
          </span>
        </h1>
        <p className="text-muted-foreground max-w-xl text-left text-sm leading-relaxed sm:text-[15px]">
          Tools. Mindsets. Builds. Explore the work and the process behind it.
        </p>
        <span
          aria-hidden="true"
          className="h-px w-10 bg-gradient-to-r from-sky-500/40 to-indigo-600/40"
        />
      </div>

      {/* Two-column body */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[190px_1fr] lg:gap-16">
        {/* Left rail - sticky */}
        <nav
          aria-label="On this page"
          className="hidden h-fit self-start lg:sticky lg:top-[110px] lg:block">
          <div className="flex flex-col gap-4">
            <span className="text-muted-foreground/60 font-mono text-[10px] tracking-[0.2em] uppercase">
              On this page
            </span>
            <ul className="flex flex-col gap-1">
              {(
                [
                  { id: "toolkit", label: "Toolkit", num: "01" },
                  { id: "skills", label: "Soft Skills", num: "02" },
                  { id: "projects", label: "Projects", num: "03" },
                ] as const
              ).map(({ id, label, num }) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setActive(id)}
                      className={cn(
                        linkBase,
                        isActive ? linkActive : linkInactive,
                      )}>
                      <span className="text-muted-foreground/50 font-mono text-xs">
                        {num}
                      </span>
                      <span>{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Right content */}
        <div className="flex flex-col gap-16">
          {/* Section 01 - My Toolkit */}
          <section
            id="toolkit"
            className="flex scroll-mt-[90px] flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-muted-foreground/50 font-mono text-xs">
                  01
                </span>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  My Toolkit
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                Tools and technologies I use daily &#x1F4BB; and the rest I know
                how to search, learn, and apply.
              </p>
            </div>

            <ToolkitGrid />
          </section>

          {/* Section 02 - Soft Skills */}
          <section
            id="skills"
            className="flex scroll-mt-[90px] flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-muted-foreground/50 font-mono text-xs">
                  02
                </span>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Soft Skills
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                How I work with people and problems &#x1F91D;, because great
                products take more than just code &#x1F4A1;
              </p>
            </div>
            <SoftSkillsGrid />
          </section>

          {/* Hover hint */}
          <div className="flex flex-col items-end gap-3">
            <p className="text-muted-foreground/70 inline-flex items-center gap-1.5 text-right text-xs">
              <Sparkles
                className="size-3.5 opacity-60"
                aria-hidden="true"
              />
              Hover over the pills, i&apos;ve left something for you
              <Sparkles
                className="size-3.5 opacity-60"
                aria-hidden="true"
              />
            </p>
            <div
              aria-hidden="true"
              className="border-border/50 w-full border-t"
            />
          </div>

          {/* Section 03 - Projects */}
          <section
            id="projects"
            className="flex scroll-mt-[90px] flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-muted-foreground/50 font-mono text-xs">
                  03
                </span>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Projects
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                A collection of projects I&apos;ve loved working on, each
                solving a real problem and teaching me something new along the
                way.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudioPage;
