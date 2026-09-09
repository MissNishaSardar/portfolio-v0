"use client";

import { Compass, Leaf, Music } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import CoffeeStain from "@/components/CoffeeStain";
import { profile } from "@/data/portfolio";

const favorites = [
  {
    title: "Explore",
    Icon: Compass,
    accent: "from-sky-500 to-indigo-600",
  },
  {
    title: "Plants",
    Icon: Leaf,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Music",
    Icon: Music,
    accent: "from-violet-500 to-fuchsia-600",
  },
] as const;

const AboutPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;
  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <section className="relative flex flex-1 flex-col items-start gap-10 overflow-hidden pt-4 pb-16 sm:pt-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />
      {/* Coffee stain - only on About, desk mood */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 bottom-2 z-0 hidden opacity-45 sm:block dark:opacity-45">
        <CoffeeStain
          size="small"
          className="opacity-100 dark:opacity-100"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/2 bottom-0 z-0 translate-x-1/2 opacity-25 sm:hidden dark:opacity-30">
        <CoffeeStain
          size="small"
          className="scale-[0.85] opacity-40 dark:opacity-40"
        />
      </div>

      {/* Page heading - studio header style */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut, delay: 0.08 }}
        className="relative z-10 flex w-full max-w-[720px] flex-col items-start gap-3 text-left">
        <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          About
        </span>
        <h1 className="text-foreground text-left text-[clamp(2rem,4.2vw,3rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance">
          Beyond the screen,{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text font-serif font-normal text-transparent italic dark:from-sky-400 dark:to-indigo-400">
              this is me.
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-400"
            />
          </span>
        </h1>
        <p className="text-muted-foreground max-w-xl text-left text-sm leading-relaxed sm:text-[15px]">
          Explore my roots, my natural curiosity, and how I bring ideas to life.
        </p>
        <span
          aria-hidden="true"
          className="h-px w-10 bg-gradient-to-r from-sky-500/40 to-indigo-600/40"
        />
      </motion.div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[180px_1fr] lg:gap-14">
        {/* Portrait, left column, reduced */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.14 }}
          className="relative w-full max-w-[160px]">
          <div className="border-glass-border bg-glass ring-glass-ring relative rounded-[1.5rem] border p-1.5 shadow-[var(--glass-shadow)] ring-1 backdrop-blur-md">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/nisha.jpg"
                alt="Nisha Sardar, Full-Stack Developer"
                width={280}
                height={350}
                priority
                sizes="160px"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Bio, right column */}
        <div className="flex w-full flex-col gap-5 text-left">
          {bioParagraphs.map((paragraph, index) => {
            const isFirst = index === 0;
            const isCursiveHello =
              isFirst && paragraph.startsWith("Hello there,");
            const displayParagraph =
              isCursiveHello ?
                paragraph.replace(/^Hello there,\n?/, "")
              : paragraph;
            return (
              <motion.div
                key={`${index}-${paragraph.slice(0, 20)}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: easeOut,
                  delay: 0.22 + index * 0.08,
                }}>
                {isCursiveHello && (
                  <p
                    className="mb-2 text-3xl leading-none font-[var(--font-cursive)] font-normal text-zinc-800 dark:text-zinc-100"
                    style={{ fontFamily: "var(--font-cursive)" }}>
                    Hello there,
                  </p>
                )}
                <p className="max-w-2xl text-left text-[15px] leading-relaxed font-light text-zinc-600 lg:max-w-none dark:text-zinc-400">
                  {displayParagraph}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Favorites - one line heading, studio section size, icons centered */}
      <div className="relative z-10 mt-6 flex w-full max-w-7xl flex-col items-start gap-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeOut, delay: 0.34 }}
          className="flex w-full max-w-7xl flex-col items-start text-left">
          <h2 className="text-left text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            My favorite way to keep my soul vibrant and alive
          </h2>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map(({ title, Icon, accent }, index) => (
            <motion.div
              key={title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: easeOut,
                delay: 0.4 + index * 0.07,
              }}
              aria-label={title}
              title={title}
              className="border-glass-border bg-glass/40 ring-glass-ring dark:bg-glass/30 flex min-h-[96px] items-center justify-center rounded-xl border p-5 shadow-[var(--glass-shadow)] ring-1 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[var(--glass-shadow-hover)]">
              <span
                aria-hidden="true"
                className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ${accent}`}>
                <Icon className="size-6" />
              </span>
              <span className="sr-only">{title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
