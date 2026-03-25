import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../components/experience/Experience';

describe('Experience', () => {
  it('renders without crashing', () => {
    render(<Experience />);
  });

  it('renders the section heading', () => {
    render(<Experience />);
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });

  it('renders all company names', () => {
    render(<Experience />);
    expect(screen.getByText('Publicis Sapient')).toBeInTheDocument();
    expect(screen.getByText('App World Solution / Stackular')).toBeInTheDocument();
    expect(screen.getByText('Techment Technology')).toBeInTheDocument();
    expect(screen.getByText('Hiteshi Infotech')).toBeInTheDocument();
    expect(screen.getByText('ThirdEssential IT Solution')).toBeInTheDocument();
  });

  it('renders job roles', () => {
    render(<Experience />);
    expect(screen.getByText('Senior React / React Native Developer')).toBeInTheDocument();
    expect(screen.getByText('React / React Native Developer')).toBeInTheDocument();
    expect(screen.getByText('React Developer')).toBeInTheDocument();
  });

  it('renders employment types', () => {
    render(<Experience />);
    const fullTimeLabels = screen.getAllByText('Full-time');
    expect(fullTimeLabels.length).toBeGreaterThan(0);
  });

  it('renders achievement bullets', () => {
    render(<Experience />);
    expect(
      screen.getByText(/Led frontend development and mentored junior developers/i)
    ).toBeInTheDocument();
  });

  it('renders the experience section element', () => {
    const { container } = render(<Experience />);
    expect(container.querySelector('#experience')).toBeInTheDocument();
  });
});

