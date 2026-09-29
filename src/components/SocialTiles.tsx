import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialLinks";
import { SocialIcon, SocialLink, socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconStyles: Record<SocialIcon, string> = {
  github: "group-hover:text-[#24292f] dark:group-hover:text-white",
  linkedin: "group-hover:text-[#0A66C2]",
  x: "group-hover:text-foreground",
  mail: "group-hover:text-foreground",
};

const iconMap: Record<
  SocialIcon,
  (props: { size?: number; className?: string }) => React.ReactNode
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: Mail,
};

type SocialTilesProps = {
  links?: SocialLink[];
  className?: string;
};

const SocialTiles = ({ links = socials, className }: SocialTilesProps) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className,
      )}>
      {links.map(({ label, href, icon }) => {
        const Icon = iconMap[icon];
        const isMail = href.startsWith("mailto:");

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noreferrer noopener"}
            className="group inline-flex min-w-33 items-center justify-center gap-2 rounded-full border border-black/6 bg-white px-7 py-3 text-[15px] font-semibold text-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white dark:text-zinc-900">
            <Icon
              size={18}
              className={cn(
                "text-muted-foreground transition-colors duration-300",
                iconStyles[icon],
              )}
            />
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default SocialTiles;
