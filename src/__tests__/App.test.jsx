import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { ThemeProvider } from '../contexts/ThemeContext';

const renderWithTheme = (ui) =>
  render(<ThemeProvider>{ui}</ThemeProvider>);

describe('App', () => {
  it('renders without crashing', () => {
    renderWithTheme(<App />);
  });

  it('renders the Navbar', () => {
    renderWithTheme(<App />);
    // Navbar contains the logo <SA />
    expect(screen.getAllByText('<SA />').length).toBeGreaterThan(0);
  });

  it('renders the hero section', () => {
    renderWithTheme(<App />);
    const headings = screen.getAllByRole('heading', { name: /shubham/i });
    expect(headings.length).toBeGreaterThan(0);
  });

  it('applies dark class wrapper when isDark is true', () => {
    window.localStorage.getItem.mockReturnValue('dark');
    const { container } = renderWithTheme(<App />);
    expect(container.firstChild).toHaveClass('dark:bg-slate-950');
  });
});
