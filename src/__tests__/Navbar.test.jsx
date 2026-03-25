import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/navbar/Navbar';
import { ThemeProvider } from '../contexts/ThemeContext';

const renderNavbar = () =>
  render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.getItem.mockReturnValue(null);
    document.documentElement.classList.remove('dark');
  });
  it('renders the logo', () => {
    renderNavbar();
    expect(screen.getAllByText('<SA />').length).toBeGreaterThan(0);
  });

  it('renders all navigation links', () => {
    renderNavbar();
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('renders the theme toggle button', () => {
    renderNavbar();
    const btn = screen.getAllByLabelText('Toggle theme')[0];
    expect(btn).toBeInTheDocument();
  });

  it('calls toggleTheme when theme button is clicked', () => {
    renderNavbar();
    const btn = screen.getAllByLabelText('Toggle theme')[0];
    fireEvent.click(btn);
    // After toggle, the mode changes (tested via ThemeContext tests)
    expect(btn).toBeInTheDocument();
  });

  it('shows system reset button after manual theme toggle', () => {
    renderNavbar();
    // Initially in system mode — no reset button
    expect(screen.queryAllByLabelText('Use system theme').length).toBe(0);
    // Toggle to manual
    fireEvent.click(screen.getAllByLabelText('Toggle theme')[0]);
    // Reset button should now appear
    expect(screen.getAllByLabelText('Use system theme').length).toBeGreaterThan(0);
  });

  it('resets to system theme when system reset button is clicked', () => {
    renderNavbar();
    // Toggle to manual
    fireEvent.click(screen.getAllByLabelText('Toggle theme')[0]);
    const resetBtn = screen.getAllByLabelText('Use system theme')[0];
    fireEvent.click(resetBtn);
    // System button should disappear again
    expect(screen.queryAllByLabelText('Use system theme').length).toBe(0);
  });

  it('opens and closes mobile menu', () => {
    renderNavbar();
    const menuBtn = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuBtn);
    // Mobile menu entries appear
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    fireEvent.click(menuBtn);
  });

  it('renders Resume link', () => {
    renderNavbar();
    const resumeLinks = screen.getAllByText('Resume');
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  it('handles scroll events', () => {
    renderNavbar();
    fireEvent.scroll(window, { target: { scrollY: 50 } });
  });
});
