import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

const Consumer = () => {
  const { isDark, toggleTheme, isSystemTheme, resetToSystem, theme } = useTheme();
  return (
    <div>
      <span data-testid="mode">{isDark ? 'dark' : 'light'}</span>
      <span data-testid="theme">{theme}</span>
      <span data-testid="is-system">{isSystemTheme ? 'system' : 'manual'}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={resetToSystem}>Reset</button>
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

  it('exposes theme string matching isDark state', () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
    fireEvent.click(screen.getByRole('button', { name: /toggle/i }));
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('defaults to isSystemTheme=true when no stored preference', () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('is-system').textContent).toBe('system');
  });

  it('sets isSystemTheme=false when stored preference exists', () => {
    window.localStorage.getItem.mockReturnValue('light');
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('is-system').textContent).toBe('manual');
  });

  it('marks theme as manual after toggleTheme', () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('is-system').textContent).toBe('system');
    fireEvent.click(screen.getByRole('button', { name: /toggle/i }));
    expect(screen.getByTestId('is-system').textContent).toBe('manual');
  });

  it('resets to system theme when resetToSystem is called', () => {
    window.localStorage.getItem.mockReturnValue('dark');
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('is-system').textContent).toBe('manual');
    fireEvent.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByTestId('is-system').textContent).toBe('system');
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('theme');
  });

  it('listens to system theme changes when isSystemTheme is true', () => {
    let mqHandler;
    window.matchMedia.mockReturnValue({
      matches: false,
      addEventListener: vi.fn((_, handler) => {
        mqHandler = handler;
      }),
      removeEventListener: vi.fn(),
    });

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('mode').textContent).toBe('light');

    act(() => {
      mqHandler({ matches: true });
    });

    expect(screen.getByTestId('mode').textContent).toBe('dark');
  });

  it('does not follow system changes after manual override', () => {
    let mqHandler;
    window.matchMedia.mockReturnValue({
      matches: false,
      addEventListener: vi.fn((_, handler) => {
        mqHandler = handler;
      }),
      removeEventListener: vi.fn(),
    });

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    // Manually toggle → now in manual mode
    fireEvent.click(screen.getByRole('button', { name: /toggle/i }));
    expect(screen.getByTestId('is-system').textContent).toBe('manual');

    // System changes should NOT affect theme
    act(() => {
      if (mqHandler) mqHandler({ matches: false });
    });

    expect(screen.getByTestId('mode').textContent).toBe('dark');
  });
});
