"use client";

import { ArrowRight, Check, Copy } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import CurtainIntro from "@/components/CurtainIntro";
import CoffeeStain from "@/components/CoffeeStain";
import LiveClock from "@/components/LiveClock";
import { Button } from "@/components/shadcnui/button";
import { profile } from "@/data/portfolio";

let hasShownForThisHardReload = false;

const favorites = [
  { label: "Wandering new places", emoji: "🧭" },
  { label: "Growing things", emoji: "🌿" },
  { label: "Music till late", emoji: "🎵" },
] as const;

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();
  const [heroIntro, setHeroIntro] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const copyTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current !== null) {
        window.clearTimeout(copyTimer.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    let ok = false;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
        ok = true;
      } else {
        throw new Error("clipboard unavailable");
      }
    } catch {
      try {
        const area = document.createElement("textarea");
        area.value = profile.email;
        area.setAttribute("readonly", "");
        area.style.position = "absolute";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        const result = document.execCommand("copy");
        area.remove();
        ok = result !== false;
      } catch {
        ok = false;
      }
    }
    if (copyTimer.current !== null) {
      window.clearTimeout(copyTimer.current);
      copyTimer.current = null;
    }
    setCopied(ok);
    setCopyFailed(!ok);
    copyTimer.current = window.setTimeout(() => {
      setCopied(false);
      setCopyFailed(false);
      copyTimer.current = null;
    }, 2000);
  };

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

  const easeOut = [0.16, 1, 0.3, 1] as const;
  const resolved = heroIntro !== null;

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    animate: shouldReduceMotion || !resolved ? {} : { opacity: 1, y: 0 },
    transition: { delay, duration: 0.55, ease: easeOut },
  });

  return (
    <>
      {heroIntro === true ?
        <CurtainIntro onComplete={handleCurtainComplete} />
      : null}

      <section className="relative grid flex-1 grid-cols-1 items-center gap-12 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
        />
        {/* Coffee stain, carried over from About, desk mood */}
        <motion.div
          {...fadeUp(baseDelay + 0.05)}
          aria-hidden="true"
          className="pointer-events-none absolute right-2 bottom-2 z-0 hidden opacity-45 sm:block dark:opacity-45">
          <CoffeeStain
            size="small"
            className="opacity-100 dark:opacity-100"
          />
        </motion.div>
        <motion.div
          {...fadeUp(baseDelay + 0.05)}
          aria-hidden="true"
          className="pointer-events-none absolute right-1/2 bottom-0 z-0 translate-x-1/2 opacity-25 sm:hidden dark:opacity-30">
          <CoffeeStain
            size="small"
            className="scale-[0.85] opacity-40 dark:opacity-40"
          />
        </motion.div>

        {/* Left: clock, portrait, name, actions */}
        <div className="relative z-10 flex flex-col items-center gap-5 text-center">
          <motion.div {...fadeUp(baseDelay)}>
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
            className="flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/handbook#projects" />}
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
              type="button"
              onClick={handleCopyEmail}
              variant="outline"
              size="lg"
              aria-live="polite"
              title={profile.email}
              className="border-glass-border bg-glass hover:bg-glass gap-2 rounded-full px-7 py-5 text-[15px] backdrop-blur-md">
              {copied ?
                <Check
                  data-icon="inline-start"
                  className="size-4"
                />
              : <Copy
                  data-icon="inline-start"
                  className="size-4"
                />
              }
              {copied ?
                "Copied"
              : copyFailed ?
                "Copy failed"
              : "Copy Email"}
            </Button>
          </motion.div>
        </div>

        {/* Right: greeting, headline, bio, favorites */}
        <div className="relative z-10 flex flex-col items-start gap-5 text-left">
          <motion.p
            {...fadeUp(baseDelay + 0.1)}
            className="text-muted-foreground font-cursive text-3xl">
            hello there
          </motion.p>

          <motion.h1
            {...fadeUp(baseDelay + 0.16)}
            className="text-foreground max-w-[22ch] text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.15] font-bold tracking-[-0.015em] text-balance">
            A mind for impact, a spirit that embraced creativity, clarity and
            inspiration.
          </motion.h1>

          <motion.p
            {...fadeUp(baseDelay + 0.22)}
            className="text-foreground/70 max-w-xl text-[15px] leading-relaxed font-light text-pretty dark:text-zinc-400">
            If I strip away the noise of the outside world and reflect on
            myself, I&apos;d say I&apos;m a nyctophile, as my name implies,
            moving to the rhythmic pulse of life, filled with a warm, magnetic
            energy.
          </motion.p>

          <motion.div
            {...fadeUp(baseDelay + 0.28)}
            className="border-glass-border bg-glass w-full rounded-2xl border p-5 shadow-[var(--glass-shadow)] backdrop-blur-md">
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
