"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import CurtainIntro from "@/components/CurtainIntro";
import { Button } from "@/components/shadcnui/button";
import { profile } from "@/data/portfolio";

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
        className="relative z-10 flex flex-col items-center gap-6 text-center opacity-0">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>
        <h2 className="text-2xl font-light text-zinc-400 sm:text-3xl">
          {profile.role}
        </h2>
        <p className="max-w-2xl leading-relaxed font-light text-zinc-400">
          {profile.tagline}
        </p>
      </div>
    : <div
        key={heroKey}
        className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay,
            duration: 0.7,
            ease: easeOut,
          }}
          className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + 0.12,
            duration: 0.6,
            ease: easeOut,
          }}
          className="text-2xl font-light text-zinc-400 sm:text-3xl">
          {profile.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + 0.24,
            duration: 0.6,
            ease: easeOut,
          }}
          className="max-w-2xl leading-relaxed font-light text-zinc-400">
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + 0.36,
            duration: 0.6,
            ease: easeOut,
          }}
          className="flex items-center gap-3 pt-2">
          <Button
            render={<Link href="/projects" />}
            nativeButton={false}
            size="lg"
            className="group gap-3 rounded-full px-8 py-6 text-lg shadow-md hover:shadow-lg">
            View Projects
            <ArrowRight
              data-icon="inline-end"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="border-glass-border bg-glass hover:bg-glass gap-3 rounded-full px-8 py-6 text-lg backdrop-blur-md">
            <Mail data-icon="inline-start" />
            Get in Touch
          </Button>
        </motion.div>
      </div>;

  return (
    <>
      {heroIntro === true ?
        <CurtainIntro onComplete={handleCurtainComplete} />
      : null}

      <section className="relative flex flex-1 flex-col justify-center overflow-hidden py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
        />

        {heroContent}
      </section>
    </>
  );
};

export default HomePage;
