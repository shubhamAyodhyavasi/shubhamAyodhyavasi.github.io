import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

const getSystemDark = () =>
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false;

export const ThemeProvider = ({ children }) => {
  // isSystemTheme: true when no manual user override stored (or stored value is invalid)
  const [isSystemTheme, setIsSystemTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      return stored !== 'dark' && stored !== 'light';
    } catch (_) {
      return true;
    }
  });

  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
    } catch (_) {
      // ignore localStorage errors
    }
    return getSystemDark();
  });

  // Sync dark class and persist manual preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    if (!isSystemTheme) {
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (_) {
        // ignore
      }
    }
  }, [isDark, isSystemTheme]);

  // Follow system theme changes when no user override.
  // The `active` flag guards against stale handler calls when the effect cleans up
  // (e.g., rapid isSystemTheme toggles or React StrictMode double-invocation).
  useEffect(() => {
    if (!isSystemTheme) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    let active = true;
    const handler = (e) => { if (active) setIsDark(e.matches); };
    mq.addEventListener('change', handler);
    return () => {
      active = false;
      mq.removeEventListener('change', handler);
    };
  }, [isSystemTheme]);

  // Toggle between light/dark and mark as manual override
  const toggleTheme = () => {
    setIsSystemTheme(false);
    setIsDark((prev) => !prev);
  };

  // Clear manual override and follow system again
  const resetToSystem = () => {
    setIsSystemTheme(true);
    setIsDark(getSystemDark());
    try {
      localStorage.removeItem('theme');
    } catch (_) {
      // ignore
    }
  };

  const theme = isDark ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isSystemTheme, resetToSystem, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export default ThemeContext;
