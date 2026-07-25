"use client";

import { createContext, useCallback, useContext, useSyncExternalStore, type ReactNode } from "react";

type Theme = "light" | "dark";

let listeners: Array<() => void> = [];
let currentTheme: Theme = "light";

if (typeof window !== "undefined") {
  const stored = localStorage.getItem("couponly-theme");
  if (stored === "dark") {
    currentTheme = "dark";
  }
}

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribeTheme(callback: () => void) {
  listeners = [...listeners, callback];
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "light";
}

function setThemeValue(next: Theme) {
  currentTheme = next;
  localStorage.setItem("couponly-theme", next);
  document.documentElement.classList.toggle("dark", next === "dark");
  emitChange();
}

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    setThemeValue(currentTheme === "light" ? "dark" : "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
