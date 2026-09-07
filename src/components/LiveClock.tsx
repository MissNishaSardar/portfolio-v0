"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Mood = {
  message: string;
};

function getMood(hour: number): Mood {
  // hour 0-23
  if (hour >= 6 && hour <= 10) {
    return { message: "Still dreaming in code... \uD83D\uDCA4" };
  }
  if (hour >= 13 && hour <= 15) {
    return { message: "Planning tonight's build \uD83D\uDCDD" };
  }
  if (hour >= 18 && hour <= 20) {
    return { message: "The golden hour. Almost time. \u2728" };
  }
  if (hour >= 22 && hour < 24) {
    return { message: "Peak flow state. Don't disturb. \uD83D\uDE80" };
  }
  if (hour >= 0 && hour < 3) {
    return { message: "Deep in code. The world is quiet. \uD83D\uDCBB" };
  }
  if (hour >= 3 && hour < 6) {
    return { message: "One more feature... then sleep. Maybe. \uD83E\uDD89" };
  }
  // Gap fillers that keep the rhythm
  if (hour === 11) {
    return { message: "Second coffee. Ideas brewing... \u2615" };
  }
  if (hour === 12) {
    return { message: "Midday momentum. Keep shipping! \u26A1" };
  }
  if (hour === 16 || hour === 17) {
    return { message: "Afternoon grind. Shipping soon. \uD83D\uDD27" };
  }
  if (hour === 21) {
    return { message: "Night owl warming up \uD83C\uDF19" };
  }
  return { message: "Building something cool \uD83D\uDEE0\uFE0F" };
}

function getHourInTimeZone(date: Date, timeZone?: string): number {
  if (!timeZone) return date.getHours();
  const hourStr = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    hour12: false,
  }).format(date);
  const parsed = Number.parseInt(hourStr, 10);
  return parsed === 24 ? 0 : parsed;
}

type LiveClockProps = {
  variant?: "default" | "footer";
  timeZone?: string;
  className?: string;
  hideDesktop?: boolean;
  hideMobile?: boolean;
};

export default function LiveClock({
  variant = "default",
  timeZone,
  className,
  hideDesktop = false,
  hideMobile = false,
}: LiveClockProps) {
  const effectiveTimeZone =
    timeZone ?? (variant === "footer" ? "Asia/Kolkata" : undefined);

  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    if (hideDesktop && hideMobile) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    // Align to next minute then tick every minute (hour+minute display only)
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const msToNextMinute = 60000 - (Date.now() % 60000);
    const timeoutId = setTimeout(() => {
      setNow(new Date());
      intervalId = setInterval(() => setNow(new Date()), 60000);
    }, msToNextMinute);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hideDesktop, hideMobile]);

  if (!now) {
    if (variant === "footer") {
      return (
        <div
          aria-hidden="true"
          className={cn(
            "bg-muted/40 inline-flex h-5 w-65 animate-pulse items-center gap-2 rounded-full",
            className,
          )}
        />
      );
    }
    return (
      <>
        {!hideDesktop && (
          <div
            aria-hidden="true"
            className="border-glass-border bg-glass absolute right-6 bottom-0 z-20 hidden h-17 w-58 translate-y-1/2 animate-pulse flex-col items-end justify-center gap-1 rounded-xl border px-4 py-2 shadow-sm backdrop-blur-md sm:flex"
          />
        )}
        {!hideMobile && (
          <div
            aria-hidden="true"
            className="border-glass-border bg-glass relative z-20 flex h-17 w-full max-w-70 animate-pulse flex-col items-center justify-center gap-1 rounded-xl border px-4 py-2 shadow-sm backdrop-blur-md sm:hidden"
          />
        )}
      </>
    );
  }

  const timeString = now.toLocaleTimeString("en-IN", {
    timeZone: effectiveTimeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const hour = getHourInTimeZone(now, effectiveTimeZone);
  const mood = getMood(hour);
  const labelMood = mood.message;

  const isIST = variant === "footer" && effectiveTimeZone === "Asia/Kolkata";
  const displayTime = isIST ? `${timeString} IST` : timeString;

  if (variant === "footer") {
    return (
      <div
        className={cn(
          "inline-flex flex-wrap items-center gap-1.5 font-mono text-xs leading-none sm:gap-2 sm:text-sm",
          className,
        )}
        aria-live="polite"
        aria-label={`Current time ${displayTime} (Indian Standard Time), ${labelMood}`}>
        <span className="inline-flex items-center gap-1.5 sm:gap-2">
          <span
            className="inline-block size-2 shrink-0 animate-pulse rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          <time
            dateTime={now.toISOString()}
            suppressHydrationWarning
            className="font-medium tracking-tight">
            {timeString}
          </time>
          {isIST ?
            <abbr
              title="Indian Standard Time (UTC+5:30)"
              className="cursor-help font-medium tracking-tight no-underline">
              IST
            </abbr>
          : null}
        </span>
        <span
          aria-hidden="true"
          className="text-muted-foreground/40 hidden sm:inline">
          ·
        </span>
        <span className="text-muted-foreground text-xs leading-tight font-normal sm:text-xs">
          {labelMood}
        </span>
      </div>
    );
  }

  const content = (
    <>
      <div className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight">
        <span
          className="inline-block size-2 animate-pulse rounded-full bg-emerald-500"
          aria-hidden="true"
        />
        <time
          dateTime={now.toISOString()}
          suppressHydrationWarning>
          {displayTime}
        </time>
      </div>
      <p className="text-muted-foreground max-w-55 text-xs leading-tight">
        {labelMood}
      </p>
    </>
  );

  return (
    <>
      {/* Desktop: shared equally on header and body - straddles header bottom */}
      {!hideDesktop && (
        <div
          className="border-glass-border bg-glass absolute right-6 bottom-0 z-20 hidden translate-y-1/2 flex-col items-end gap-1 rounded-xl border px-4 py-2 text-right shadow-sm backdrop-blur-md sm:flex"
          aria-live="polite"
          aria-label={`Current time ${displayTime}, ${labelMood}`}>
          {content}
        </div>
      )}
      {/* Mobile: centered above content */}
      {!hideMobile && (
        <div
          className="border-glass-border bg-glass relative z-20 flex w-full max-w-70 flex-col items-center gap-1 rounded-xl border px-4 py-2 text-center shadow-sm backdrop-blur-md sm:hidden"
          aria-live="polite"
          aria-label={`Current time ${displayTime}, ${labelMood}`}>
          {content}
        </div>
      )}
    </>
  );
}

// Export helper for testing
export { getHourInTimeZone, getMood };
