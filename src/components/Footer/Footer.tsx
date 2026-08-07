import Link from "next/link";

import SocialLinks from "@/components/SocialLinks";
import { navLinks, profile } from "@/data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      aria-label="app-footer">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}
        </p>

        <nav
          className="flex items-center gap-4"
          aria-label="footer-navigation">
          {navLinks
            .filter(({ href }) => href !== "/")
            .map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {label}
              </Link>
            ))}
        </nav>

        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
