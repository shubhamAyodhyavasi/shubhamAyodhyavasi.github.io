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
    expect(screen.getByText('Real-Time Order Management System')).toBeInTheDocument();
    expect(screen.getByText('Multi-Tenant SaaS API Platform')).toBeInTheDocument();
    expect(screen.getByText('Cloud Cost Optimization Engine')).toBeInTheDocument();
    expect(screen.getByText('Distributed Cache Service')).toBeInTheDocument();
  });

  it('renders featured badges', () => {
    render(<Projects />);
    const badges = screen.getAllByText('Featured');
    expect(badges.length).toBe(2);
  });

  it('renders project metadata labels', () => {
    render(<Projects />);
    const problemLabels = screen.getAllByText('Problem:');
    const solutionLabels = screen.getAllByText('Solution:');
    const impactLabels = screen.getAllByText('Impact:');
    expect(problemLabels.length).toBe(4);
    expect(solutionLabels.length).toBe(4);
    expect(impactLabels.length).toBe(4);
  });

  it('renders GitHub and Live Demo links for each project', () => {
    render(<Projects />);
    const githubLinks = screen.getAllByText('GitHub');
    const demoLinks = screen.getAllByText('Live Demo');
    expect(githubLinks.length).toBe(4);
    expect(demoLinks.length).toBe(4);
  });

  it('renders tag chips', () => {
    render(<Projects />);
    expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Go').length).toBeGreaterThan(0);
  });

  it('renders the projects section element', () => {
    const { container } = render(<Projects />);
    expect(container.querySelector('#projects')).toBeInTheDocument();
  });
});
