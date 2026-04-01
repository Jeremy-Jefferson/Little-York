import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  it('renders valid icon name', () => {
    render(<Icon name="phone" />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Icon name="phone" className="custom-class" />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toHaveClass('custom-class');
  });

  it('warns for invalid icon name', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Icon name="invalid-icon" />);
    expect(consoleSpy).toHaveBeenCalledWith('Icon "invalid-icon" not found');
    consoleSpy.mockRestore();
  });

  it('returns null for invalid icon name', () => {
    const { container } = render(<Icon name="invalid-icon" />);
    expect(container.innerHTML).toBe('');
  });

  it('renders all available icons', () => {
    const iconNames = [
      'menu', 'close', 'phone', 'mapPin', 'mail', 'tag', 'grid', 'heart',
      'clock', 'shield', 'flower', 'cigarette', 'cookie', 'flame', 'droplet',
      'settings', 'file', 'cigar', 'instagram', 'facebook', 'twitter',
      'arrowRight', 'externalLink', 'star'
    ];

    iconNames.forEach((name) => {
      const { unmount } = render(<Icon name={name} />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
      unmount();
    });
  });

  it('has proper SVG structure', () => {
    render(<Icon name="phone" />);
    const svg = screen.getByRole('img', { hidden: true }).querySelector('svg');
    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('applies correct size classes', () => {
    render(<Icon name="phone" />);
    const svg = screen.getByRole('img', { hidden: true }).querySelector('svg');
    expect(svg).toHaveClass('w-5', 'h-5');
  });
});
