import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../components/projects/Projects';

describe('Projects', () => {
  it('renders without crashing', () => {
    render(<Projects />);
  });

  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders all project titles', () => {
    render(<Projects />);
    expect(screen.getByText('Stock Trading Platform')).toBeInTheDocument();
    expect(screen.getByText('Teletherapy Platform')).toBeInTheDocument();
  });

  it('renders GitHub and Live Demo links for each project', () => {
    render(<Projects />);
    const githubLinks = screen.getAllByText('GitHub');
    const demoLinks = screen.getAllByText('Live Demo');
    expect(githubLinks.length).toBeGreaterThan(0);
    expect(demoLinks.length).toBeGreaterThan(0);
  });

  it('renders tag chips', () => {
    render(<Projects />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Redux').length).toBeGreaterThan(0);
  });

  it('renders the projects section element', () => {
    const { container } = render(<Projects />);
    expect(container.querySelector('#projects')).toBeInTheDocument();
  });
});

