import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
  it('renders with default props', () => {
    render(<Skeleton />);
    const skeleton = document.querySelector('.bg-surface-card');
    expect(skeleton).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Skeleton />);
    const skeleton = document.querySelector('.bg-surface-card');
    expect(skeleton).toHaveClass('bg-surface-card');
  });

  it('applies text variant classes', () => {
    render(<Skeleton variant="text" />);
    const skeleton = document.querySelector('.bg-surface-card');
    expect(skeleton).toHaveClass('bg-surface-card', 'rounded');
  });

  it('applies circle variant classes', () => {
    render(<Skeleton variant="circle" />);
    const skeleton = document.querySelector('.bg-surface-card');
    expect(skeleton).toHaveClass('bg-surface-card', 'rounded-full');
  });

  it('applies card variant classes', () => {
    render(<Skeleton variant="card" />);
    const skeleton = document.querySelector('.bg-surface-card');
    expect(skeleton).toHaveClass('bg-surface-card', 'rounded-xl');
  });

  it('applies width classes correctly', () => {
    const { rerender } = render(<Skeleton width="full" />);
    expect(document.querySelector('.w-full')).toBeInTheDocument();

    rerender(<Skeleton width="1/2" />);
    expect(document.querySelector('.w-1/2')).toBeInTheDocument();

    rerender(<Skeleton width="1/3" />);
    expect(document.querySelector('.w-1/3')).toBeInTheDocument();

    rerender(<Skeleton width="2/3" />);
    expect(document.querySelector('.w-2/3')).toBeInTheDocument();

    rerender(<Skeleton width="1/4" />);
    expect(document.querySelector('.w-1/4')).toBeInTheDocument();

    rerender(<Skeleton width="3/4" />);
    expect(document.querySelector('.w-3/4')).toBeInTheDocument();
  });

  it('applies height classes correctly', () => {
    const { rerender } = render(<Skeleton height="auto" />);
    expect(document.querySelector('.h-4')).toBeInTheDocument();

    rerender(<Skeleton height="sm" />);
    expect(document.querySelector('.h-6')).toBeInTheDocument();

    rerender(<Skeleton height="md" />);
    expect(document.querySelector('.h-8')).toBeInTheDocument();

    rerender(<Skeleton height="lg" />);
    expect(document.querySelector('.h-12')).toBeInTheDocument();

    rerender(<Skeleton height="xl" />);
    expect(document.querySelector('.h-16')).toBeInTheDocument();

    rerender(<Skeleton height="2xl" />);
    expect(document.querySelector('.h-24')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Skeleton className="custom-class" />);
    const skeleton = document.querySelector('.bg-surface-card');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('has animation', () => {
    render(<Skeleton />);
    const skeleton = document.querySelector('.bg-surface-card');
    expect(skeleton).toHaveAttribute('data-framer-motion');
  });
});
