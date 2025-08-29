import { render, screen } from '@testing-library/react';
import React from 'react';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders main headline and CTA', () => {
    render(<Hero />);
    expect(screen.getByText(/Trade Smarter\. Profit Faster\./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Join the Telegram Channel/i })).toBeInTheDocument();
  });
});
