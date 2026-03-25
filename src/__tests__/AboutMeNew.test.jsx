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
    expect(screen.getByText('Frontend Engineer · 6 YOE')).toBeInTheDocument();
  });

  it('renders availability status', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Available for opportunities')).toBeInTheDocument();
  });

  it('renders quick info items', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Bachelor of Engineering')).toBeInTheDocument();
    expect(screen.getByText('shubhamgupta279@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('6+ Years')).toBeInTheDocument();
  });

  it('renders summary text', () => {
    render(<AboutMeNew />);
    expect(screen.getByText(/Frontend-focused Software Engineer/i)).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Styling')).toBeInTheDocument();
  });

  it('renders skill items', () => {
    render(<AboutMeNew />);
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
  });

  it('renders the about section element', () => {
    const { container } = render(<AboutMeNew />);
    expect(container.querySelector('#about')).toBeInTheDocument();
  });
});

