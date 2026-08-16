import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/SocialLinks";
import { SocialIcon, SocialLink, socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconStyles: Record<SocialIcon, string> = {
  github: "group-hover:text-[#24292f] dark:group-hover:text-white",
  linkedin: "group-hover:text-[#0A66C2]",
  mail: "group-hover:text-foreground",
};

const iconMap: Record<
  SocialIcon,
  (props: { size?: number; className?: string }) => React.ReactNode
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
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

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="group border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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
