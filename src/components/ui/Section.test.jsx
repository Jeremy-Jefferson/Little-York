import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section', () => {
  it('renders children correctly', () => {
    render(
      <Section>
        <p>Section content</p>
      </Section>
    );
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('applies id attribute', () => {
    render(<Section id="test-section">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveAttribute('id', 'test-section');
  });

  it('applies dark background by default', () => {
    render(<Section>Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-surface-base');
  });

  it('applies darker background', () => {
    render(<Section background="darker">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-surface-elevated');
  });

  it('applies gradient background', () => {
    render(<Section background="gradient">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-gradient-to-b');
  });

  it('applies transparent background', () => {
    render(<Section background="transparent">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-transparent');
  });

  it('applies default padding', () => {
    render(<Section>Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-16', 'md:py-24', 'lg:py-32');
  });

  it('applies small padding', () => {
    render(<Section padding="sm">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-12', 'md:py-16');
  });

  it('applies large padding', () => {
    render(<Section padding="lg">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-24', 'md:py-32', 'lg:py-40');
  });

  it('applies no padding', () => {
    render(<Section padding="none">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).not.toHaveClass('py-16');
  });

  it('applies custom className', () => {
    render(<Section className="custom-class">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('custom-class');
  });

  it('has grain overlay', () => {
    render(<Section>Content</Section>);
    const section = screen.getByText('Content').closest('section');
    const overlay = section.querySelector('.grain-overlay');
    expect(overlay).toBeInTheDocument();
  });

  it('has container with proper padding', () => {
    render(<Section>Content</Section>);
    const container = screen.getByText('Content').closest('.container');
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
  });
});
