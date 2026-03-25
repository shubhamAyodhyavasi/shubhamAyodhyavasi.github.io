import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Stats from '../components/stats/Stats';

describe('Stats', () => {
  it('renders without crashing', () => {
    render(<Stats />);
  });

  it('renders all stat labels', () => {
    render(<Stats />);
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument();
    expect(screen.getByText('Companies')).toBeInTheDocument();
    expect(screen.getByText('Tech Tools')).toBeInTheDocument();
  });

  it('renders stat descriptions', () => {
    render(<Stats />);
    expect(screen.getByText('Building web and mobile apps')).toBeInTheDocument();
    expect(screen.getByText('Web and mobile applications')).toBeInTheDocument();
  });

  it('renders the stats section element', () => {
    const { container } = render(<Stats />);
    expect(container.querySelector('#stats')).toBeInTheDocument();
  });
});

