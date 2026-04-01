import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Newsletter from './Newsletter';

describe('Newsletter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders newsletter section', () => {
    render(<Newsletter />);
    expect(screen.getByText('Stay in the Loop')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  it('validates empty email', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<Newsletter />);

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<Newsletter />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    await user.type(emailInput, 'invalid-email');

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  it('submits form with valid email', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<Newsletter />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    await user.type(emailInput, 'test@example.com');

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText('Subscribing...')).toBeInTheDocument();
    });

    vi.advanceTimersByTime(1500);

    await waitFor(() => {
      expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument();
    });
  });

  it('clears form after successful submission', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<Newsletter />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    await user.type(emailInput, 'test@example.com');

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    await user.click(subscribeButton);

    vi.advanceTimersByTime(1500);

    await waitFor(() => {
      expect(emailInput).toHaveValue('');
    });
  });

  it('clears error message when user starts typing', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<Newsletter />);

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    const emailInput = screen.getByPlaceholderText('Enter your email');
    await user.type(emailInput, 't');

    await waitFor(() => {
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    });
  });

  it('has proper form structure', () => {
    render(<Newsletter />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('has email input with correct type', () => {
    render(<Newsletter />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('has required attribute on email input', () => {
    render(<Newsletter />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    expect(emailInput).toHaveAttribute('required');
  });

  it('renders privacy disclaimer', () => {
    render(<Newsletter />);
    expect(screen.getByText('We respect your privacy. Unsubscribe at any time.')).toBeInTheDocument();
  });
});
