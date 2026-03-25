import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the CTA heading', () => {
    render(<Footer />);
    expect(screen.getByText("Let's Build Something")).toBeInTheDocument();
    expect(screen.getByText('Amazing')).toBeInTheDocument();
  });

  it('renders the open to opportunities badge', () => {
    render(<Footer />);
    expect(screen.getByText('Open to Opportunities')).toBeInTheDocument();
  });

  it('renders the "Say Hello" email link', () => {
    render(<Footer />);
    expect(screen.getByText('Say Hello')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders the footer tagline', () => {
    render(<Footer />);
    expect(screen.getByText(/<SA \/>.*Backend Engineer.*Indore, India/)).toBeInTheDocument();
  });

  it('renders the copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/Shubham Ayodhyavasi\. All rights reserved\./)).toBeInTheDocument();
  });

  it('renders the contact section element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('email link has correct mailto href', () => {
    render(<Footer />);
    const sayHello = screen.getByText('Say Hello').closest('a');
    expect(sayHello).toHaveAttribute('href', 'mailto:shubhamgupta279@gmail.com');
  });
});
