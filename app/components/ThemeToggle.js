'use client';

import { useEffect, useState } from 'react';
import { applyTheme, loadInitialTheme, saveTheme } from './theme-utils';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const initial = loadInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    saveTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="btn btn-ghost btn-sm gap-2"
    >
      {theme === 'dark' ? (
        // Sun icon for switching to light
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414" />
          <circle cx="12" cy="12" r="4" strokeWidth="2" />
        </svg>
      ) : (
        // Moon icon for switching to dark
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z" />
        </svg>
      )}
      <span className="hidden sm:inline text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}

