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
    expect(screen.getByText('Users Impacted')).toBeInTheDocument();
    expect(screen.getByText('Cost Reduction')).toBeInTheDocument();
    expect(screen.getByText('Performance Gain')).toBeInTheDocument();
  });

  it('renders stat descriptions', () => {
    render(<Stats />);
    expect(screen.getByText('Building production systems')).toBeInTheDocument();
    expect(screen.getByText('Across all platforms')).toBeInTheDocument();
  });

  it('renders the stats section element', () => {
    const { container } = render(<Stats />);
    expect(container.querySelector('#stats')).toBeInTheDocument();
  });
});
