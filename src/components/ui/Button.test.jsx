import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders as a link when href is provided', () => {
    render(<Button href="https://example.com">Link</Button>);
    const link = screen.getByText('Link');
    expect(link.closest('a')).toHaveAttribute('href', 'https://example.com');
  });

  it('renders with icon on left by default', () => {
    render(
      <Button icon={<span data-testid="icon">Icon</span>}>
        With Icon
      </Button>
    );
    const icon = screen.getByTestId('icon');
    const text = screen.getByText('With Icon');
    expect(icon.compareDocumentPosition(text)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it('renders with icon on right when specified', () => {
    render(
      <Button icon={<span data-testid="icon">Icon</span>} iconPosition="right">
        With Icon
      </Button>
    );
    const icon = screen.getByTestId('icon');
    const text = screen.getByText('With Icon');
    expect(icon.compareDocumentPosition(text)).toBe(Node.DOCUMENT_POSITION_PRECEDING);
  });

  it('applies primary variant classes by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('btn-primary');
  });

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('btn-secondary');
  });

  it('applies ghost variant classes', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByText('Ghost');
    expect(button).toHaveClass('btn-ghost');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toHaveClass('px-4', 'py-2', 'text-sm');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByText('Medium')).toHaveClass('px-6', 'py-3', 'text-base');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toHaveClass('px-8', 'py-4', 'text-lg');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });

  it('has proper focus styles', () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByText('Focus me');
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-accent');
  });
});
