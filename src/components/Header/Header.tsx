"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggleButton from "@/components/ThemeToggleButton";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className="bg-background fixed top-0 right-0 left-0 z-40 border-b shadow-sm"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            『NS』
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          {navLinks
            .filter(({ href }) => href !== "/")
            .map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "hover:text-foreground text-sm transition-colors",
                    isActive ?
                      "text-foreground font-medium"
                    : "text-muted-foreground",
                  )}>
                  {label}
                </Link>
              );
            })}

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
