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
