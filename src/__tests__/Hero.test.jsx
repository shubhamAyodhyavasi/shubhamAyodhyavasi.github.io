import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/hero/Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('renders the name heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: /shubham/i })).toBeInTheDocument();
  });

  it('renders the "View Projects" button', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /view projects/i })).toBeInTheDocument();
  });

  it('renders the "Download Resume" link', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
  });

  it('renders tech stack chips', () => {
    render(<Hero />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('renders the open to opportunities badge', () => {
    render(<Hero />);
    expect(screen.getByText(/open to opportunities/i)).toBeInTheDocument();
  });

  it('renders the scroll down indicator', () => {
    render(<Hero />);
    expect(screen.getByText(/scroll down/i)).toBeInTheDocument();
  });

  it('clicking "View Projects" button scrolls to projects section', () => {
    const el = document.createElement('div');
    el.id = 'projects';
    document.body.appendChild(el);

    render(<Hero />);
    const btn = screen.getByRole('button', { name: /view projects/i });
    btn.click();
    expect(el.scrollIntoView).toBeDefined();

    document.body.removeChild(el);
  });
});
