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
  const baseDelay = 0.12;

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

      {/* Top padding sits 20px under bottom on purpose. main clears the fixed header with pt-20 so the photo gets equal air above and below. */}
      <div className="flex flex-1 flex-col justify-center pt-5 pb-10 sm:pt-7 sm:pb-12">
        <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,45%)_minmax(0,55%)]">
          {/* Left: portrait. Light: framed photo card. Dark: melted into background */}
          <motion.div
            {...fadeUp(baseDelay)}
            className="relative h-72 lg:h-auto">
            <div className="absolute inset-6 overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.06] dark:shadow-none dark:ring-0">
              <Image
                src="/image.jpg"
                alt="Nisha Sardar, Full-Stack Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center grayscale dark:contrast-[1.05] dark:grayscale-[35%]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/15 dark:hidden"
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

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3.5 border border-[rgba(31,42,61,0.35)] dark:hidden"
            />
          </motion.div>

          {/* Right: copy, contact */}
          <div className="nocturne font-nocturne flex flex-col items-center justify-center gap-6 px-6 py-10 text-center sm:px-10 lg:px-14 lg:py-6">
            <motion.p
              {...fadeUp(baseDelay + 0.18)}
              className="border-nocturne-border text-nocturne-dim rounded-full border px-5 py-2 text-[10.5px] font-semibold tracking-[0.26em] whitespace-nowrap uppercase sm:text-[12px] sm:tracking-[0.3em]">
              {profile.name} | Kolkata, India
            </motion.p>

            <motion.p
              {...fadeUp(baseDelay + 0.3)}
              className="text-nocturne-text w-full text-[19px] leading-[1.7] font-medium sm:text-[25px]">
              If I had to strip away the noise of the outside world and{" "}
              <em className="text-nocturne-accent italic">reflect</em> on
              myself, I would describe myself as someone socially reserved. But
              that unique thoughtfulness is clearly reflected in every touch. I
              care deeply about what I love.
            </motion.p>

            <motion.p
              {...fadeUp(baseDelay + 0.36)}
              className="text-nocturne-text w-full text-[19px] leading-[1.7] font-medium sm:text-[25px]">
              And my favourite way to keep my soul alive is spending time with
              myself.
            </motion.p>

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
