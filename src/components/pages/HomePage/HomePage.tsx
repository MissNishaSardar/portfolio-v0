"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import CurtainIntro from "@/components/CurtainIntro";
import LiveClock from "@/components/LiveClock";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialLinks";
import { profile, socials, SocialIcon } from "@/data/portfolio";

const socialIcons: Record<
  SocialIcon,
  (props: { size?: number; className?: string }) => React.ReactNode
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: Mail,
};

let hasShownForThisHardReload = false;

const favorites = [
  { label: "Wandering new places", emoji: "🧭" },
  { label: "Growing things", emoji: "🌿" },
  { label: "Music till late", emoji: "🎵" },
] as const;

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

  const handleCurtainComplete = useCallback(() => {
    hasShownForThisHardReload = true;
    setHeroIntro(false);
  }, []);

  const isIntroActive = heroIntro === true && !shouldReduceMotion;
  const heroReady = !isIntroActive;
  const baseDelay = isIntroActive ? 5.35 : 0.12;

  const easeOut = [0.16, 1, 0.3, 1] as const;
  const resolved = heroIntro !== null;

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    animate:
      shouldReduceMotion || !resolved ? {}
      : heroReady ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 12 },
    transition: { delay, duration: 0.55, ease: easeOut },
  });

  return (
    <>
      {heroIntro === true ?
        <CurtainIntro onComplete={handleCurtainComplete} />
      : null}

      <section className="relative grid flex-1 grid-cols-1 content-center items-stretch gap-12 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
        />
        {/* Left: clock, portrait, name, actions, social */}
        <div className="relative z-10 flex flex-col items-center justify-start gap-5 text-center">
          <motion.div
            {...fadeUp(baseDelay)}
            className="-mt-[3px]">
            <LiveClock variant="pill" />
          </motion.div>

          <motion.div {...fadeUp(baseDelay + 0.08)}>
            <div className="rounded-full bg-[conic-gradient(from_210deg,#ffffff_0%,#6366f1_18%,#38bdf8_32%,#e2e8f0_55%,#ffffff_100%)] p-2 shadow-[0_0_40px_rgba(99,102,241,0.22)] dark:bg-[conic-gradient(from_210deg,#1c1c24_0%,#6366f1_16%,#38bdf8_28%,#1c1c24_42%,#1c1c24_100%)] dark:shadow-[0_0_50px_rgba(99,102,241,0.25)]">
              <div className="bg-muted overflow-hidden rounded-full">
                <Image
                  src="/nisha.jpg"
                  alt="Nisha Sardar, Full-Stack Developer"
                  width={576}
                  height={576}
                  priority
                  sizes="(max-width: 640px) 240px, 288px"
                  className="aspect-square size-60 h-auto w-full object-cover sm:size-72"
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            {...fadeUp(baseDelay + 0.14)}
            className="text-muted-foreground font-mono text-xs tracking-[3px] uppercase">
            Nisha Sardar{" "}
            <span className="text-sky-500 dark:text-sky-400">|</span> Kolkata,
            India
          </motion.p>

          <motion.div
            {...fadeUp(baseDelay + 0.2)}
            className="mt-auto flex w-full flex-wrap items-center justify-center gap-3 px-2 sm:px-4">
            <a
              href={`mailto:${profile.email}`}
              className="group text-foreground inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-[12px] tracking-wide whitespace-nowrap transition-all duration-300 hover:bg-white/[0.1] sm:text-[13px] dark:border-white/10">
              <Mail className="text-muted-foreground size-4 shrink-0" />
              Feel free to reach
              <ArrowUpRight className="text-muted-foreground size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
              {socials.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 sm:size-9">
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right: headline, bio, favorites */}
        <div className="relative z-10 flex w-full max-w-xl flex-col items-start justify-start gap-5 text-left">
          <motion.h1
            {...fadeUp(baseDelay + 0.16)}
            className="text-foreground/90 w-full text-justify font-mono text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.7] font-normal tracking-[0.01em]">
            A real thinker, creative soul who brings clarity and inspiration,
            standing out as a rare signature on the printed page of life.
          </motion.h1>

          <motion.p
            {...fadeUp(baseDelay + 0.22)}
            className="text-foreground/70 w-full text-justify text-[16.5px] leading-[1.75] font-light hyphens-auto dark:text-zinc-400">
            If I strip away the noise of the outside world and reflect on
            myself, I&apos;d say I&apos;m a nyctophile, as my name implies,
            moving to the rhythmic pulse of life, filled with a warm, magnetic
            energy. And thus I am turning my journey into more than just
            breathing.
          </motion.p>

          <motion.div
            {...fadeUp(baseDelay + 0.28)}
            className="border-glass-border bg-glass mt-auto w-full rounded-2xl border p-5 shadow-[var(--glass-shadow)] backdrop-blur-md">
            <h2 className="font-mono text-xs tracking-wide">
              My favorite ways to keep my soul vibrant and alive
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {favorites.map(({ label, emoji }) => (
                <li
                  key={label}
                  className="border-glass-border bg-card/60 flex flex-col items-center gap-3 rounded-xl border p-4 text-center">
                  <span
                    aria-hidden="true"
                    className="text-3xl leading-none">
                    {emoji}
                  </span>
                  <span className="text-muted-foreground text-xs leading-snug">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
