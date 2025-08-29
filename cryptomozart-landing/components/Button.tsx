import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
}

const rawEnv = process.env.NEXT_PUBLIC_TELEGRAM_URL || '';
const envUrl = rawEnv && rawEnv.trim() ? rawEnv.trim() : undefined;
const DEFAULT_URL = 'https://t.me/mr_mozart_en';
const TELEGRAM = envUrl || DEFAULT_URL;

// Treat as external CTA by default; open in new tab to avoid SPA routing issues
export default function Button({ href = TELEGRAM, onClick, children, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold transition-all';
  const styles = variant === 'primary'
    ? 'bg-cyan-400 text-black hover:opacity-90 active:scale-[0.98] glow'
    : 'text-base-muted hover:text-white';

  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        <span>{children}</span>
        <span aria-hidden className="ml-2">→</span>
      </a>
    );
  }

  // Internal route fallback
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <span aria-hidden className="ml-2">→</span>
    </a>
  );
}
