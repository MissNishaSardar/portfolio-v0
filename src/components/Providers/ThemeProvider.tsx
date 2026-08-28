"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextValue = {
  theme: string;
  setTheme: (theme: string) => void;
  resolvedTheme: string | undefined;
  themes: string[];
  systemTheme?: string;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
  resolvedTheme: "dark",
  themes: ["light", "dark", "system"],
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  themes?: string[];
  forcedTheme?: string;
};

const ThemeProvider = ({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = false,
  disableTransitionOnChange = false,
  storageKey = "theme",
  themes = ["light", "dark"],
  forcedTheme,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<string>(
    () => forcedTheme ?? defaultTheme,
  );
  const [resolvedTheme, setResolvedTheme] = useState<string | undefined>(
    forcedTheme ?? defaultTheme,
  );

  const applyTheme = useCallback(
    (value: string) => {
      const root = document.documentElement;
      const isClass = attribute === "class";
      const allThemes = themes;

      // Handle transition disable
      let transitionStyle: HTMLStyleElement | null = null;
      if (disableTransitionOnChange) {
        transitionStyle = document.createElement("style");
        transitionStyle.appendChild(
          document.createTextNode(
            "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
          ),
        );
        document.head.appendChild(transitionStyle);
      }

      if (isClass) {
        root.classList.remove(...allThemes);
        if (value) root.classList.add(value);
      } else {
        if (value) root.setAttribute(attribute, value);
        else root.removeAttribute(attribute);
      }

      // colorScheme
      if (["light", "dark"].includes(value)) {
        root.style.colorScheme = value;
      }

      setResolvedTheme(value);

      if (transitionStyle) {
        window.getComputedStyle(document.body);
        setTimeout(() => {
          document.head.removeChild(transitionStyle!);
        }, 1);
      }
    },
    [attribute, themes, disableTransitionOnChange],
  );

  useEffect(() => {
    let initial = forcedTheme ?? null;
    if (!initial) {
      try {
        const stored = localStorage.getItem(storageKey);
        initial = stored || defaultTheme;
      } catch {
        initial = defaultTheme;
      }
      if (initial === "system" && enableSystem) {
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        initial = mql.matches ? "dark" : "light";
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(initial);
    applyTheme(initial);
  }, [storageKey, defaultTheme, forcedTheme, enableSystem, applyTheme]);

  const setTheme = useCallback(
    (value: string | ((prev: string) => string)) => {
      const next =
        typeof value === "function" ?
          (value as (prev: string) => string)(theme)
        : value;
      setThemeState(next);
      try {
        localStorage.setItem(storageKey, next);
      } catch {}
      const toApply =
        next === "system" && enableSystem ?
          window.matchMedia("(prefers-color-scheme: dark)").matches ?
            "dark"
          : "light"
        : next;
      applyTheme(toApply);
    },
    [theme, storageKey, enableSystem, applyTheme],
  );

  // Listen for system changes when theme is system
  useEffect(() => {
    if (!enableSystem) return;
    if (theme !== "system" && forcedTheme !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      applyTheme(e.matches ? "dark" : "light");
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [theme, forcedTheme, enableSystem, applyTheme]);

  // Keep in sync if forcedTheme changes
  useEffect(() => {
    if (forcedTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeState(forcedTheme);
      applyTheme(forcedTheme);
    }
  }, [forcedTheme, applyTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        resolvedTheme,
        themes: enableSystem ? [...themes, "system"] : themes,
        systemTheme: enableSystem ? resolvedTheme : undefined,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
