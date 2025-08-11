'use client';

import { useEffect, useMemo, useState } from 'react';
import { applyTheme, loadInitialTheme, saveTheme } from './theme-utils';

// A simple 2-position slider that snaps between light (0) and dark (1)
export default function ThemeSlider() {
  const [position, setPosition] = useState(0); // 0 = light, 1 = dark

  useEffect(() => {
    const initialTheme = loadInitialTheme();
    setPosition(initialTheme === 'dark' ? 1 : 0);
    applyTheme(initialTheme);
  }, []);

  const theme = useMemo(() => (position >= 0.5 ? 'dark' : 'light'), [position]);

  useEffect(() => {
    applyTheme(theme);
    saveTheme(theme);
  }, [theme]);

  const handleChange = (e) => {
    const val = Number(e.target.value);
    setPosition(val);
  };

  const handleMouseUp = () => {
    setPosition((prev) => (prev >= 0.5 ? 1 : 0));
  };

  return (
    <div className="flex items-center gap-3 select-none">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414" />
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
      </svg>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={position}
        onChange={handleChange}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        aria-label="Theme slider"
        className="range range-sm max-w-[140px]"
      />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z" />
      </svg>
    </div>
  );
}

