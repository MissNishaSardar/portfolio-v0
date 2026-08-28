import { cn } from "@/lib/utils";

type CoffeeStainProps = {
  className?: string;
  size?: "small" | "large";
};

export default function CoffeeStain({
  className,
  size = "small",
}: CoffeeStainProps) {
  const isSmall = size === "small";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative select-none",
        isSmall ? "size-[150px]" : "size-[520px] max-w-[90vw]",
        className,
      )}>
      {/* New pattern: hand-drawn double ring with offset, crescent gap and scattered spray */}
      <svg
        viewBox="0 0 150 150"
        className="absolute inset-0 size-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring - slightly elliptical, uneven thickness via two strokes */}
        <g className="text-amber-900 dark:text-amber-200/90">
          <ellipse
            cx="75"
            cy="75"
            rx="68"
            ry="66"
            stroke="currentColor"
            strokeWidth={isSmall ? "5" : "14"}
            strokeLinecap="round"
            opacity={isSmall ? "0.07" : "0.05"}
            transform="rotate(-6 75 75)"
          />
          {/* Offset inner echo - cup shifted */}
          <ellipse
            cx="77"
            cy="73"
            rx="54"
            ry="52"
            stroke="currentColor"
            strokeWidth={isSmall ? "3" : "9"}
            strokeLinecap="round"
            opacity="0.045"
            className="dark:opacity-[0.065]"
            transform="rotate(-4 77 73)"
          />
        </g>

        {/* Broken crescent where cup handle lifted - subtle gap */}
        <path
          d="M 38 18 A 68 66 0 0 1 52 12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0"
          className="text-background"
        />
        {/* Fine inner ring */}
        <ellipse
          cx="75"
          cy="75"
          rx="39"
          ry="37"
          stroke="currentColor"
          className="text-amber-900 dark:text-amber-100"
          strokeWidth={isSmall ? "1" : "2.5"}
          opacity="0.055"
        />

        {/* Center wash - irregular blob, not circle */}
        <path
          d="M 58 72 C 58 54, 88 52, 92 71 C 92 90, 62 92, 58 72 Z"
          fill="currentColor"
          className="text-amber-900 dark:text-amber-600"
          opacity={isSmall ? "0.028" : "0.02"}
        />
        <ellipse
          cx="75"
          cy="75"
          rx="32"
          ry="30"
          fill="currentColor"
          className="text-amber-900 dark:text-amber-500"
          opacity="0.015"
        />

        {/* Spray - scattered micro droplets like real desk */}
        <g className="text-amber-900 dark:text-amber-200">
          <circle
            cx="108"
            cy="105"
            r={isSmall ? "2.2" : "5"}
            opacity="0.06"
            fill="currentColor"
          />
          <circle
            cx="115"
            cy="96"
            r={isSmall ? "1.4" : "3.2"}
            opacity="0.07"
            fill="currentColor"
          />
          <circle
            cx="102"
            cy="112"
            r={isSmall ? "1" : "2.2"}
            opacity="0.05"
            fill="currentColor"
          />
          <circle
            cx="118"
            cy="88"
            r={isSmall ? "0.9" : "2"}
            opacity="0.045"
            fill="currentColor"
          />
          {/* tiny drip tail */}
          <path
            d="M 107 106 Q 112 110 114 97"
            stroke="currentColor"
            strokeWidth={isSmall ? "0.8" : "1.6"}
            strokeLinecap="round"
            opacity="0.04"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
