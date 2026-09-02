"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import CoffeeStain from "@/components/CoffeeStain";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";

const AboutPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;
  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-hidden pt-4 pb-16 sm:pt-6">
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

      {/* Page heading — full width, out of columns */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut, delay: 0.08 }}
        className="relative z-10 flex w-full max-w-7xl flex-col items-start gap-3 text-left">
        <SectionHeading
          title="Get to know me better"
          subtitle="Take a look around to see where I started, what keeps me curious, and how I approach building for the web."
          className="items-start gap-5 text-left"
        />
        <span
          aria-hidden="true"
          className="h-px w-12 bg-gradient-to-r from-sky-500/40 to-indigo-600/40"
        />
      </motion.div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[240px_1fr] lg:gap-14">
        {/* Left — portrait */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.14 }}
          className="relative w-full max-w-[200px] lg:max-w-none">
          <div className="border-glass-border bg-glass ring-glass-ring relative rounded-[1.5rem] border p-1.5 shadow-[var(--glass-shadow)] ring-1 backdrop-blur-md">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/nisha.jpg"
                alt="Nisha Sardar — Full-Stack Developer"
                width={280}
                height={350}
                priority
                sizes="(max-width:1024px) 50vw, 240px"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right — bio only */}
        <div className="flex flex-col gap-5 text-left">
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
                key={paragraph}
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
                <p
                  className={
                    isFirst ?
                      "text-foreground/90 max-w-2xl text-[17px] leading-relaxed font-normal lg:max-w-none"
                    : "max-w-2xl text-[15px] leading-relaxed font-light text-zinc-600 lg:max-w-none dark:text-zinc-400"
                  }>
                  {displayParagraph}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
