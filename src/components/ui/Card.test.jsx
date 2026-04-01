import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Card>Default Card</Card>);
    const card = screen.getByText('Default Card').closest('div');
    expect(card).toHaveClass('card');
  });

  it('applies elevated variant classes', () => {
    render(<Card variant="elevated">Elevated Card</Card>);
    const card = screen.getByText('Elevated Card').closest('div');
    expect(card).toHaveClass('card', 'hover:shadow-card-hover');
  });

  it('applies bordered variant classes', () => {
    render(<Card variant="bordered">Bordered Card</Card>);
    const card = screen.getByText('Bordered Card').closest('div');
    expect(card).toHaveClass('bg-transparent', 'border-2', 'border-border-strong');
  });

  it('applies filled variant classes', () => {
    render(<Card variant="filled">Filled Card</Card>);
    const card = screen.getByText('Filled Card').closest('div');
    expect(card).toHaveClass('bg-surface-card2');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom Card</Card>);
    const card = screen.getByText('Custom Card').closest('div');
    expect(card).toHaveClass('custom-class');
  });

  it('disables hover effect when hover is false', () => {
    render(<Card hover={false}>No Hover</Card>);
    const card = screen.getByText('No Hover').closest('div');
    expect(card).not.toHaveClass('hover:shadow-card-hover');
  });

  it('has proper animation setup', () => {
    render(<Card>Animated Card</Card>);
    const card = screen.getByText('Animated Card').closest('div');
    expect(card).toHaveAttribute('data-framer-motion');
  });
});
