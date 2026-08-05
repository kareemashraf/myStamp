export interface ChartTheme {
  primary: string;
  secondary: string;
  tertiary: string;
  outline: string;
  text: string;
  textStrong: string;
  grid: string;
  surface: string;
}

const lightFallback: ChartTheme = {
  primary: "#5445cf",
  secondary: "#5b52ad",
  tertiary: "#894d00",
  outline: "#787586",
  text: "#474554",
  textStrong: "#1c1b23",
  grid: "#c8c4d6",
  surface: "#ffffff",
};

const darkFallback: ChartTheme = {
  primary: "#c5c0ff",
  secondary: "#4be085",
  tertiary: "#ffb77a",
  outline: "#928fa0",
  text: "#c3c8dc",
  textStrong: "#e5e1ec",
  grid: "#474554",
  surface: "#060d21",
};

export function getChartTheme(isDark: boolean): ChartTheme {
  if (typeof window === "undefined") {
    return isDark ? darkFallback : lightFallback;
  }
  const styles = getComputedStyle(document.documentElement);
  const value = (name: string, fallback: string) =>
    styles.getPropertyValue(name).trim() || fallback;
  return {
    primary: value("--color-primary", lightFallback.primary),
    secondary: value("--color-secondary", lightFallback.secondary),
    tertiary: value("--color-tertiary", lightFallback.tertiary),
    outline: value("--color-outline", lightFallback.outline),
    text: value("--color-on-surface-variant", lightFallback.text),
    textStrong: value("--color-on-surface", lightFallback.textStrong),
    grid: value("--color-outline-variant", lightFallback.grid),
    surface: value("--color-surface-container-lowest", lightFallback.surface),
  };
}
