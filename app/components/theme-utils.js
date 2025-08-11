export const THEME_STORAGE_KEY = 'theme-preference';

export function getSystemTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
  // Keep CSS vars in sync for places that read them directly
  const root = document.documentElement;
  if (theme === 'dark') {
    root.style.setProperty('--background', '#0a0a0a');
    root.style.setProperty('--foreground', '#ededed');
  } else {
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--foreground', '#171717');
  }
}

export function loadInitialTheme() {
  let initial = 'light';
  try {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(THEME_STORAGE_KEY) : null;
    initial = saved || getSystemTheme();
  } catch {
    initial = getSystemTheme();
  }
  return initial;
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

