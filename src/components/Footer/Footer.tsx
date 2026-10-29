import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-glass-border bg-glass/80 supports-[backdrop-filter]:bg-glass/60 relative border-t shadow-[var(--glass-shadow)] backdrop-blur-md"
      aria-label="Site footer">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        {/* Left: NS logo mark · © year */}
        <div className="flex shrink-0 items-center gap-2 text-sm">
          <Image
            src="/logo-mark.png"
            alt="Nisha Sardar"
            width={284}
            height={205}
            className="h-6 w-auto dark:brightness-0 dark:invert"
          />
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
