import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CryptoMozart — Profit Signals',
  description: 'Trade smarter with data-driven crypto signals. Join the Telegram channel to access real-time insights.',
  metadataBase: new URL('https://cryptomozart.example'),
  openGraph: {
    title: 'CryptoMozart — Profit Signals',
    description: 'Data-driven crypto signals. Join the Telegram channel.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoMozart — Profit Signals',
    description: 'Data-driven crypto signals. Join the Telegram channel.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jakarta.className}`}>{children}</body>
    </html>
  );
}
