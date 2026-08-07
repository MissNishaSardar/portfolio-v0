"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/shadcnui/button";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun className="-rotate-90 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0" />

      <MoonStar className="absolute -rotate-90 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100" />
    </Button>
  );
};

export default ThemeToggleButton;
