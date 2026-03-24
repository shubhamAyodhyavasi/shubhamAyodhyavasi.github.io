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
    expect(screen.getByText('Tech Corp India')).toBeInTheDocument();
    expect(screen.getByText('Startup XYZ')).toBeInTheDocument();
    expect(screen.getByText('thirdEssential IT Solution')).toBeInTheDocument();
    expect(screen.getByText('WebOnlyWeb IT Solution')).toBeInTheDocument();
  });

  it('renders all job roles', () => {
    render(<Experience />);
    expect(screen.getByText('Senior Backend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Backend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('renders employment types', () => {
    render(<Experience />);
    const fullTimeLabels = screen.getAllByText('Full-time');
    expect(fullTimeLabels.length).toBe(4);
  });

  it('renders achievement bullets', () => {
    render(<Experience />);
    expect(
      screen.getByText(/Architected microservices platform handling 100K\+ daily/i)
    ).toBeInTheDocument();
  });

  it('renders tech stack for each role', () => {
    render(<Experience />);
    expect(screen.getAllByText('Go').length).toBeGreaterThan(0);
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThan(0);
  });

  it('renders the experience section element', () => {
    const { container } = render(<Experience />);
    expect(container.querySelector('#experience')).toBeInTheDocument();
  });
});
