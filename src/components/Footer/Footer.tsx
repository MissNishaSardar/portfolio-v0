import Image from "next/image";

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
            className="text-base font-[var(--font-instrument-serif)] font-normal italic"
            role="img"
            aria-label="Nisha Sardar">
            <span className="text-muted-foreground/40">「</span>
            NS
            <span className="text-muted-foreground/40">」</span>
          </span>
          <span className="sr-only">Nisha Sardar</span>
          <span
            className="text-muted-foreground/30"
            aria-hidden="true">
            ·
          </span>
          <span className="text-muted-foreground text-sm">© {year}</span>
        </div>

        {/* Right: quote. Single row, hidden on mobile. */}
        <figure className="hidden min-w-0 flex-1 flex-row items-center justify-end gap-2 text-right sm:flex">
          <blockquote className="text-muted-foreground/60 truncate text-xs">
            &quot;Time is the one thing none of us can make more of, so it means
            a lot for spending a bit of yours here ✨.&quot;
          </blockquote>
          <figcaption className="shrink-0">
            <Image
              src="/signature.png"
              alt="Nisha Sardar"
              width={2048}
              height={881}
              className="h-6 w-auto opacity-70 invert dark:invert-0"
            />
          </figcaption>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
