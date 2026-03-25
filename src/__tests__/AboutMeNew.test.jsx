import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutMeNew from '../components/about-me/AboutMeNew';

describe('AboutMeNew', () => {
  it('renders without crashing', () => {
    render(<AboutMeNew />);
  });

  it('renders the section heading', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the name and title', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Shubham Ayodhyavasi')).toBeInTheDocument();
    expect(screen.getByText('Backend Engineer · 4 YOE')).toBeInTheDocument();
  });

  it('renders availability status', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Available for opportunities')).toBeInTheDocument();
  });

  it('renders quick info items', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Indore, India')).toBeInTheDocument();
    expect(screen.getByText('B.Sc. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('shubhamgupta279@gmail.com')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Cloud & Infra')).toBeInTheDocument();
    expect(screen.getByText('Databases')).toBeInTheDocument();
    expect(screen.getByText('Architecture')).toBeInTheDocument();
  });

  it('renders skill items', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Go')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });

  it('renders the about section element', () => {
    const { container } = render(<AboutMeNew />);
    expect(container.querySelector('#about')).toBeInTheDocument();
  });
});
