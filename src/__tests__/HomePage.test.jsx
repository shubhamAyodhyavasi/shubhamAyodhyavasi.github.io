import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
  });

  it('renders the Hero section', () => {
    render(<HomePage />);
    const headings = screen.getAllByRole('heading', { name: /shubham/i });
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders the Stats section', () => {
    render(<HomePage />);
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
  });

  it('renders the About section', () => {
    render(<HomePage />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the Projects section', () => {
    render(<HomePage />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders the Experience section', () => {
    render(<HomePage />);
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });

  it('renders the Footer section', () => {
    render(<HomePage />);
    expect(screen.getByText("Let's Build Something")).toBeInTheDocument();
  });
});
