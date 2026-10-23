"use client";

import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import CurtainIntro from "@/components/CurtainIntro";
import { Button } from "@/components/shadcnui/button";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialLinks";
import { profile, socials } from "@/data/portfolio";

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

      <div className="flex flex-1 flex-col py-10 sm:py-12">
        <div className="grid min-h-[75svh] flex-1 grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,45%)_minmax(0,55%)]">
          {/* Left: portrait. Light: framed photo card. Dark: melted into background */}
          <motion.div
            {...fadeUp(baseDelay)}
            className="relative h-72 lg:h-auto">
            <div className="absolute inset-6 overflow-hidden rounded-2xl shadow-[0_18px_48px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] dark:inset-0 dark:rounded-none dark:shadow-none dark:ring-0">
              <Image
                src="/nisha-2.jpg"
                alt="Nisha Sardar, Full-Stack Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center grayscale-[20%] dark:contrast-[1.05] dark:grayscale-[35%]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 hidden bg-[radial-gradient(75%_65%_at_34%_46%,rgba(30,58,98,0.16),transparent_75%)] dark:block"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 hidden bg-[radial-gradient(120%_115%_at_34%_46%,transparent_30%,var(--background)_92%)] dark:block"
              />

              <div
                aria-hidden="true"
                className="from-background/0 to-background absolute inset-0 hidden bg-gradient-to-r from-70% dark:block"
              />
              <div
                aria-hidden="true"
                className="from-background via-background/35 absolute inset-0 hidden bg-gradient-to-b via-14% to-transparent dark:block"
              />
              <div
                aria-hidden="true"
                className="from-background via-background/35 absolute inset-0 hidden bg-gradient-to-t via-14% to-transparent dark:block"
              />
              <div
                aria-hidden="true"
                className="from-background via-background/25 absolute inset-0 hidden bg-gradient-to-r via-10% to-transparent dark:block"
              />
            </div>
          </motion.div>

          {/* Right: copy, contact, favorites */}
          <div className="nocturne font-nocturne flex flex-col items-center justify-center gap-6 px-6 py-10 text-center sm:px-10 lg:px-14 lg:py-12">
            <motion.p
              {...fadeUp(baseDelay + 0.18)}
              className="border-nocturne-border text-nocturne-dim rounded-full border px-5 py-2 text-[10.5px] font-semibold tracking-[0.26em] whitespace-nowrap uppercase sm:text-[12px] sm:tracking-[0.3em]">
              {profile.name} | Kolkata, India
            </motion.p>

            <motion.p
              {...fadeUp(baseDelay + 0.3)}
              className="text-nocturne-text w-full text-[19px] leading-[1.72] font-medium sm:text-[25px]">
              If It had to strip away the noise of the outside world and{" "}
              <em className="text-nocturne-accent italic">mirror</em> me, then
              it would be better to say someone who maybe a less talkative but
              invests her reflection on everything she touches. And thus her
              journey turns into more than just breathing.
            </motion.p>

            <motion.div
              {...fadeUp(baseDelay + 0.36)}
              className="mt-2 flex w-full flex-col items-center gap-4 pt-2">
              <p className="text-nocturne-dim text-[11px] tracking-[0.3em] uppercase sm:text-[12px]">
                My favorite ways to keep my soul vibrant and alive
              </p>
              <div className="relative flex w-full flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-14">
                <span
                  aria-hidden="true"
                  className="via-nocturne-line absolute top-[23px] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent to-transparent sm:block"
                />
                {favorites.map((f, i) => (
                  <div
                    key={f.label}
                    className="relative flex flex-col items-center">
                    <span
                      aria-hidden="true"
                      className="text-base leading-none">
                      {f.emoji}
                    </span>
                    <span
                      style={{ animationDelay: `${i * 1.1}s` }}
                      className="animate-twinkle bg-nocturne-dot mt-1 size-[7px] rounded-full shadow-[0_0_12px_3px_var(--nocturne-glow)]"
                    />
                    <span className="text-nocturne-dim mt-2.5 text-[9.5px] tracking-[0.16em] whitespace-nowrap uppercase sm:text-[11px]">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(baseDelay + 0.42)}
              className="flex flex-wrap items-center justify-center gap-3">
              <Button
                render={<a href={`mailto:${profile.email}`} />}
                nativeButton={false}
                size="lg"
                className="nocturne-ghost border-nocturne-border text-nocturne-text hover:border-nocturne-accent/70 hover:text-foreground h-auto rounded-full bg-transparent px-6 py-3 text-[17px] italic shadow-none hover:bg-transparent">
                <Mail />
                Feel free to reach
              </Button>
              <div className="flex items-center gap-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="text-nocturne-dim hover:text-nocturne-accent inline-flex size-9 items-center justify-center rounded-full transition-colors">
                    {s.icon === "github" ?
                      <GithubIcon size={17} />
                    : null}
                    {s.icon === "linkedin" ?
                      <LinkedinIcon size={17} />
                    : null}
                    {s.icon === "x" ?
                      <XIcon size={17} />
                    : null}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
