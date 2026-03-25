import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../components/skills/Skills';

describe('Skills', () => {
  it('renders without crashing', () => {
    render(<Skills />);
  });

  it('renders the section heading', () => {
    render(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('State Management')).toBeInTheDocument();
    expect(screen.getByText('Styling')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
  });

  it('renders skill items as badges', () => {
    render(<Skills />);
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('React Native')).toBeInTheDocument();
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
    expect(screen.getByText('Redux Toolkit')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
  });

  it('renders the skills section element', () => {
    const { container } = render(<Skills />);
    expect(container.querySelector('#skills')).toBeInTheDocument();
  });
});
