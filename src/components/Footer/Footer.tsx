import BackToTopButton from "@/components/BackToTopButton";
import CoffeeStain from "@/components/CoffeeStain";
import LiveClock from "@/components/LiveClock";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-glass-border bg-glass/80 supports-[backdrop-filter]:bg-glass/60 relative border-t shadow-[var(--glass-shadow)] backdrop-blur-md"
      aria-label="Site footer">
      {/* Shared coffee stain - small, full circle straddling body/footer seam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
        <CoffeeStain
          size="small"
          className="opacity-60 dark:opacity-60"
        />
      </div>
      {/* Mobile: slightly smaller and centered */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 sm:hidden">
        <CoffeeStain
          size="small"
          className="scale-[0.85] opacity-50 dark:opacity-50"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-4 sm:gap-4">
        {/* Quote - subtle above bottom bar */}
        <figure className="hidden w-full flex-col items-end gap-1 text-right sm:flex">
          <blockquote className="text-muted-foreground/60 text-xs">
            &quot;Your time is the only thing you can&apos;t make more of.
            Thanks for spending some here.&quot;
          </blockquote>
          <figcaption className="text-muted-foreground/50 text-[11px] italic">
            — Nisha
          </figcaption>
        </figure>

        {/* Bottom bar: ⌜NS⌟ · © year · India + live IST clock + mood · social icons · back-to-top */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          {/* Left: ⌜NS⌟ · © year · India */}
          <div className="flex items-center gap-2 text-sm">
            <span
              className="text-base font-semibold tracking-tight"
              role="img"
              aria-label="Nisha Sardar">
              ⌜NS⌟
            </span>
            <span className="sr-only">Nisha Sardar</span>
            <span
              className="text-muted-foreground/30"
              aria-hidden="true">
              ·
            </span>
            <span className="text-muted-foreground text-sm">© {year}</span>
            <span
              className="text-muted-foreground/30"
              aria-hidden="true">
              ·
            </span>
            <span className="text-muted-foreground text-sm">
              {profile.location}
            </span>
          </div>

          {/* Center: live IST clock + mood */}
          <div className="flex items-center sm:justify-center">
            <LiveClock
              variant="footer"
              timeZone="Asia/Kolkata"
            />
          </div>

          {/* Right: social icons · back-to-top */}
          <div className="flex items-center gap-3">
            <SocialLinks className="gap-3" />
            <span
              className="text-muted-foreground/20 hidden sm:inline"
              aria-hidden="true">
              ·
            </span>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
