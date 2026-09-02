"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CurtainIntroProps = {
  onComplete?: () => void;
};

const WELCOME = "Welcome";

export default function CurtainIntro({ onComplete }: CurtainIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [contentExiting, setContentExiting] = useState(false);
  const [lifting, setLifting] = useState(false);
  const [count, setCount] = useState(0);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setShouldShow(true);

    if (shouldReduceMotion) {
      const t1 = window.setTimeout(() => {
        setLifting(true);
      }, 300);
      const t2 = window.setTimeout(() => {
        setShouldShow(false);
        onComplete?.();
      }, 700);
      timersRef.current.push(t1, t2);
      return () => {
        timersRef.current.forEach(window.clearTimeout);
      };
    }

    // Lock scroll during intro
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Counter 0 -> 100 from 1.1s to 4.4s (3.3s)
    const counterStart = window.setTimeout(() => {
      const start = Date.now();
      const duration = 3300;
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.round(progress * 100));
        if (progress < 1) {
          const id = window.setTimeout(tick, 16);
          timersRef.current.push(id);
        }
      };
      tick();
    }, 1100);

    const tContentExit = window.setTimeout(() => setContentExiting(true), 4400);
    const tLift = window.setTimeout(() => setLifting(true), 5000);
    const tDone = window.setTimeout(() => {
      setShouldShow(false);
      document.body.style.overflow = prevOverflow;
      onComplete?.();
    }, 5900);

    timersRef.current.push(counterStart, tContentExit, tLift, tDone);

    return () => {
      timersRef.current.forEach(window.clearTimeout);
      document.body.style.overflow = prevOverflow;
    };
  }, [onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
    setContentExiting(true);
    setLifting(true);
    window.setTimeout(() => {
      setShouldShow(false);
      document.body.style.overflow = "";
      onComplete?.();
    }, 450);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && shouldShow) handleSkip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldShow]);

  if (!mounted || !shouldShow) return null;

  if (shouldReduceMotion) {
    return (
      <AnimatePresence>
        {shouldShow && !lifting ?
          <motion.div
            key="curtain-reduced"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background fixed inset-0 z-[100] flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Welcome</p>
          </motion.div>
        : null}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {shouldShow ?
        <motion.div
          key="curtain"
          initial={{ y: 0 }}
          animate={{ y: lifting ? "-100%" : 0 }}
          transition={{
            duration: 0.9,
            ease: [0.87, 0, 0.13, 1],
          }}
          className="bg-background fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome intro">
          {/* Theme-matched radial glow, same as Home hero */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
          />
          {/* Subtle glass vignette border */}
          <div
            aria-hidden="true"
            className="border-glass-border pointer-events-none absolute inset-0 border-b shadow-[var(--glass-shadow)]"
          />

          {/* Center content */}
          <motion.div
            animate={
              contentExiting ? { y: -16, opacity: 0 } : { y: 0, opacity: 1 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 flex flex-col items-center text-center">
            {/* NS logo - same as Header */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="text-2xl font-semibold tracking-tight">
              &#x300C;NS&#x300D;
            </motion.div>

            {/* Welcome mask reveal - same extrabold tracking as hero name, About-matched sky→indigo gradient */}
            <div className="mt-3 flex overflow-hidden">
              {WELCOME.split("").map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.45 + i * 0.045,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl dark:from-sky-400 dark:to-indigo-400">
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Progress line - glass pill track, matches site glass tokens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.2 }}
              className="mt-8 flex flex-col items-center gap-2.5">
              <div className="border-glass-border bg-glass h-1 w-64 overflow-hidden rounded-full border shadow-[var(--glass-shadow)] backdrop-blur-md">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.1, duration: 3.3, ease: "linear" }}
                  className="bg-foreground h-full w-full origin-left rounded-full"
                />
              </div>
              <span className="text-muted-foreground font-mono text-xs tracking-widest tabular-nums">
                {String(count).padStart(2, "0")}%
              </span>
            </motion.div>

            {/* Subtitle - same font-light zinc-400/muted style as hero tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
              className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed font-light">
              You’ve reached my web space. Happy to have you here—feel free to
              explore! 🌐✨
            </motion.p>
          </motion.div>

          {/* Curved bottom edge - keeps background continuity with hero */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 left-0">
            <svg
              viewBox="0 0 1440 48"
              preserveAspectRatio="none"
              className="h-12 w-full"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 48 C 360 0 1080 0 1440 48 L1440 48 L0 48 Z"
                className="fill-background"
              />
            </svg>
          </div>

          {/* Skip - glass pill button, matches Header/Home outline buttons */}
          <button
            type="button"
            onClick={handleSkip}
            className="border-glass-border bg-glass text-muted-foreground hover:bg-glass hover:text-foreground focus-visible:ring-ring absolute right-6 bottom-6 rounded-full border px-4 py-2 text-xs shadow-[var(--glass-shadow)] backdrop-blur-md transition-colors focus-visible:ring-2 focus-visible:outline-none">
            Skip — Esc
          </button>
        </motion.div>
      : null}
    </AnimatePresence>
  );
}
