import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

const Consumer = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="mode">{isDark ? 'dark' : 'light'}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    window.localStorage.getItem.mockReturnValue(null);
    document.documentElement.classList.remove('dark');
  });

  it('provides default light theme when no stored preference', () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('mode').textContent).toBe('light');
  });

  it('uses stored dark preference from localStorage', () => {
    window.localStorage.getItem.mockReturnValue('dark');
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('mode').textContent).toBe('dark');
  });

  it('toggles theme when button is clicked', () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: /toggle/i });
    fireEvent.click(button);
    expect(screen.getByTestId('mode').textContent).toBe('dark');
  });

  it('throws when useTheme is used outside provider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Consumer />)).toThrow();
    spy.mockRestore();
  });

  it('adds dark class to document when dark mode active', () => {
    window.localStorage.getItem.mockReturnValue('dark');
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
