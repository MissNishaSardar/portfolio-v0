import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-glass-border bg-glass/80 supports-[backdrop-filter]:bg-glass/60 relative border-t shadow-[var(--glass-shadow)] backdrop-blur-md"
      aria-label="Site footer">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        {/* Left: ⌜NS⌟ · © year · India */}
        <div className="flex shrink-0 items-center gap-2 text-sm">
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

        {/* Center: quote - single row, hidden on mobile */}
        <figure className="hidden min-w-0 flex-1 flex-row items-center justify-center gap-2 text-center sm:flex">
          <blockquote className="text-muted-foreground/60 truncate text-xs">
            &quot;Time is the one thing none of us can make more of, so it means
            a lot for spending a bit of yours here 🌿.&quot;
          </blockquote>
          <figcaption className="text-muted-foreground/50 shrink-0 text-[11px] italic">
            - Nisha
          </figcaption>
        </figure>

        {/* Right: social icons */}
        <div className="flex shrink-0 items-center gap-3">
          <SocialLinks className="gap-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
