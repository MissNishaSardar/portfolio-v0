"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import CurtainIntro from "@/components/CurtainIntro";
import LiveClock from "@/components/LiveClock";
import { Button } from "@/components/shadcnui/button";

let hasShownForThisHardReload = false;

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();
  const [heroIntro, setHeroIntro] = useState<boolean | null>(null);

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      PerformanceNavigationTiming | undefined;
    const legacyNav = (
      window.performance as unknown as { navigation?: { type: number } }
    ).navigation;
    const isReload = nav?.type === "reload" || legacyNav?.type === 1;
    // Only when Home itself was hard-refreshed: nav entry URL must match current Home URL
    const navUrl = (nav as unknown as { name?: string })?.name ?? "";
    let navPath = "";
    try {
      navPath = navUrl ? new URL(navUrl).pathname : "";
    } catch {
      navPath = "";
    }
    const isHomeHardReload =
      isReload && navPath === "/" && window.location.pathname === "/";
    const should = isHomeHardReload && !hasShownForThisHardReload;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeroIntro(should);
  }, []);

  const handleCurtainComplete = () => {
    hasShownForThisHardReload = true;
  };

  const isIntroActive = heroIntro === true && !shouldReduceMotion;
  const baseDelay = isIntroActive ? 5.35 : 0.12;
  const heroKey =
    heroIntro === null ? "pending"
    : isIntroActive ? "intro"
    : "no-intro";

  const easeOut = [0.16, 1, 0.3, 1] as const;

  // Keep hero hidden until we know if intro will play, then animate once
  const heroContent =
    heroIntro === null ?
      <div
        aria-hidden="true"
        className="relative z-10 flex flex-col items-start gap-4 text-left opacity-0">
        <span className="text-muted-foreground font-mono text-xs tracking-[3px] uppercase">
          NISHA SARDAR <span className="text-sky-500 dark:text-sky-400">|</span>{" "}
          WEB DEVELOPER{" "}
          <span className="text-indigo-600 dark:text-indigo-400">|</span>{" "}
          KOLKATA, INDIA
        </span>
        <h1 className="max-w-[14ch] text-[clamp(3.2rem,9.6vw,7.8rem)] leading-[0.99] font-extrabold tracking-[-0.035em]">
          <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(212,212,216,0.95)] max-[640px]:[-webkit-text-stroke:1px_rgba(212,212,216,0.95)] dark:[-webkit-text-stroke:1.5px_rgba(82,82,91,0.95)] dark:max-[640px]:[-webkit-text-stroke:1px_rgba(82,82,91,0.95)]">
            Innovate
          </span>
          <span className="text-foreground block">with intent,</span>
          <span className="text-foreground block">
            deliver with{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text font-[var(--font-instrument-serif)] font-normal text-transparent italic dark:from-sky-400 dark:to-indigo-400">
              impact.
            </span>
          </span>
        </h1>
        <p className="text-foreground/70 max-w-xl text-[17px] leading-relaxed font-normal text-pretty dark:text-zinc-400">
          A mind for impact, a spirit that embraced creativity, and a presence
          that left behind clarity and inspiration.
        </p>
        <p className="text-foreground/70 max-w-xl text-[15px] leading-relaxed font-light text-pretty dark:text-zinc-400">
          Explore my skills, projects, and journey. If we align, feel free to
          reach.
        </p>
      </div>
    : <div
        key={heroKey}
        className="relative z-10 flex flex-col items-start gap-4 text-left">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay,
            duration: 0.5,
            ease: easeOut,
          }}
          className="text-muted-foreground font-mono text-xs tracking-[3px] uppercase">
          NISHA SARDAR <span className="text-sky-500 dark:text-sky-400">|</span>{" "}
          WEB DEVELOPER{" "}
          <span className="text-indigo-600 dark:text-indigo-400">|</span>{" "}
          KOLKATA, INDIA
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + 0.08,
            duration: 0.7,
            ease: easeOut,
          }}
          className="max-w-[14ch] text-[clamp(3.2rem,9.6vw,7.8rem)] leading-[0.99] font-extrabold tracking-[-0.035em]">
          <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(212,212,216,0.95)] max-[640px]:[-webkit-text-stroke:1px_rgba(212,212,216,0.95)] dark:[-webkit-text-stroke:1.5px_rgba(82,82,91,0.95)] dark:max-[640px]:[-webkit-text-stroke:1px_rgba(82,82,91,0.95)]">
            Innovate
          </span>
          <span className="text-foreground block">with intent,</span>
          <span className="text-foreground block">
            deliver with{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text font-[var(--font-instrument-serif)] font-normal text-transparent italic dark:from-sky-400 dark:to-indigo-400">
              impact.
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + 0.18,
            duration: 0.6,
            ease: easeOut,
          }}
          className="text-foreground/70 max-w-xl text-[17px] leading-relaxed font-normal text-pretty dark:text-zinc-400">
          A mind for impact, a spirit that embraced creativity, and a presence
          that left behind clarity and inspiration.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + 0.22,
            duration: 0.6,
            ease: easeOut,
          }}
          className="text-foreground/60 max-w-xl text-[15px] leading-relaxed font-light text-pretty dark:text-zinc-400">
          Explore my skills, projects, and journey. If we align, feel free to
          reach.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: baseDelay + 0.24,
            duration: 0.4,
            ease: easeOut,
          }}
          aria-hidden="true"
          className="h-px w-10 origin-left bg-gradient-to-r from-sky-500/40 to-indigo-600/40"
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + 0.32,
            duration: 0.6,
            ease: easeOut,
          }}
          className="flex flex-wrap items-center justify-start gap-3 pt-4">
          <Button
            render={<Link href="/studio" />}
            nativeButton={false}
            size="lg"
            className="group gap-2 rounded-full px-7 py-5 text-[15px] shadow-md hover:shadow-lg">
            View Projects
            <ArrowRight
              data-icon="inline-end"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="border-glass-border bg-glass hover:bg-glass gap-2 rounded-full px-7 py-5 text-[15px] backdrop-blur-md">
            <Mail
              data-icon="inline-start"
              className="size-4"
            />
            Get in Touch
          </Button>
        </motion.div>
      </div>;

  return (
    <>
      {heroIntro === true ?
        <CurtainIntro onComplete={handleCurtainComplete} />
      : null}
      <div className="relative z-20 flex w-full justify-center pt-2 sm:hidden">
        <LiveClock hideDesktop />
      </div>

      <section className="relative flex flex-1 flex-col justify-center overflow-hidden py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
        />

        {heroContent}
      </section>
    </>
  );
};

export default HomePage;
