"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CurtainIntroProps = {
  onComplete?: () => void;
};

const CurtainIntro = ({ onComplete }: CurtainIntroProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [contentExiting, setContentExiting] = useState(false);
  const [lifting, setLifting] = useState(false);
  const timersRef = useRef<number[]>([]);
  const prevOverflowRef = useRef<string>("");

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
    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Content fades at 3.4s. The curtain lifts at 4s and finishes at 4.9s.
    const tContentExit = window.setTimeout(() => setContentExiting(true), 3400);
    const tLift = window.setTimeout(() => setLifting(true), 4000);
    const tDone = window.setTimeout(() => {
      setShouldShow(false);
      document.body.style.overflow = prevOverflowRef.current;
      onComplete?.();
    }, 4900);

    timersRef.current.push(tContentExit, tLift, tDone);

    return () => {
      timersRef.current.forEach(window.clearTimeout);
      document.body.style.overflow = prevOverflowRef.current;
    };
  }, [onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
    setContentExiting(true);
    setLifting(true);
    window.setTimeout(() => {
      setShouldShow(false);
      document.body.style.overflow = prevOverflowRef.current;
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
            className="bg-background fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 px-6 text-center">
            <Image
              src="/logo-mark.png"
              alt="Nisha Sardar"
              width={284}
              height={205}
              className="block h-[42px] w-auto dark:brightness-0 dark:invert"
            />
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed font-light">
              You have reached my web space. Happy to have you here. Feel free
              to explore! 🌐✨
            </p>
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

          {/* Blinds slats. Shade panels cover the screen and slide out left and right at 0.9s. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={`slat-${i}`}
                initial={{ x: 0 }}
                animate={{ x: i % 2 === 0 ? "-106%" : "106%" }}
                transition={{
                  delay: 0.9 + i * 0.05,
                  duration: 0.55,
                  ease: [0.7, 0, 0.3, 1],
                }}
                className="absolute bg-black/3 dark:bg-white/4"
                style={{
                  left: "-2%",
                  width: "104%",
                  top: `${i * 12.5}%`,
                  height: "12.5%",
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <motion.div
            animate={
              contentExiting ? { y: -16, opacity: 0 } : { y: 0, opacity: 1 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 flex flex-col items-center gap-5 text-center">
            {/* NS mark. Same artwork as the Header logo. */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center">
              <Image
                src="/logo-mark.png"
                alt="Nisha Sardar"
                width={284}
                height={205}
                priority
                className="block h-[42px] w-auto dark:brightness-0 dark:invert"
              />
            </motion.div>

            {/* Progress bar. Starts with the slats at 0.9s and completes when the content starts fading at 3.4s. */}
            <div className="bg-border h-0.5 w-[148px] overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 2.5, ease: "linear" }}
                className="h-full w-full origin-left rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
              />
            </div>

            {/* Subtitle. Same welcome note, same font-light muted style as before. */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.6, ease: "easeOut" }}
              className="text-muted-foreground max-w-sm text-sm leading-relaxed font-light">
              You have reached my web space. Happy to have you here. Feel free
              to explore! 🌐✨
            </motion.p>
          </motion.div>

          {/* Curved bottom edge. Keeps background continuity with hero. */}
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

          {/* Skip. Glass pill button, matches Header/Home outline buttons. */}
          <button
            type="button"
            onClick={handleSkip}
            className="border-glass-border bg-glass text-muted-foreground hover:bg-glass hover:text-foreground focus-visible:ring-ring absolute right-6 bottom-6 z-30 rounded-full border px-4 py-2 text-xs shadow-[var(--glass-shadow)] backdrop-blur-md transition-colors focus-visible:ring-2 focus-visible:outline-none">
            Skip, Esc
          </button>
        </motion.div>
      : null}
    </AnimatePresence>
  );
};

export default CurtainIntro;
