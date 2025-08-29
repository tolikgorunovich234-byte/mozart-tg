import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../components/Button';

describe('Button CTA URL', () => {
  it('uses default Telegram URL when env var is not set', () => {
    delete (process as any).env.NEXT_PUBLIC_TELEGRAM_URL;
    render(<Button>Join</Button>);
    const link = screen.getByRole('link', { name: /join/i });
    expect(link).toHaveAttribute('href', 'https://t.me/mr_mozart_en');
  });

  it('uses NEXT_PUBLIC_TELEGRAM_URL when provided', () => {
    (process as any).env.NEXT_PUBLIC_TELEGRAM_URL = 'https://t.me/custom_url';
    render(<Button>Join</Button>);
    const link = screen.getByRole('link', { name: /join/i });
    expect(link).toHaveAttribute('href', 'https://t.me/custom_url');
  });

  it('falls back to default when env var is empty string or whitespace', () => {
    (process as any).env.NEXT_PUBLIC_TELEGRAM_URL = '  ';
    render(<Button>Join</Button>);
    const link = screen.getByRole('link', { name: /join/i });
    expect(link).toHaveAttribute('href', 'https://t.me/mr_mozart_en');
  });

  it('opens external link in a new tab', () => {
    (process as any).env.NEXT_PUBLIC_TELEGRAM_URL = 'https://t.me/custom_url';
    render(<Button>Join</Button>);
    const link = screen.getByRole('link', { name: /join/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
