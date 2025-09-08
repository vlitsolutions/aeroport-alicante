import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alicante Airport Transfers - Premium Transportation Service',
  description: 'Experience seamless airport transfers to 200+ destinations across Spain. Professional, reliable, and comfortable service from Alicante Airport to Costa Blanca, Valencia, and beyond.',
  keywords: 'Alicante airport transfer, Costa Blanca transport, Benidorm transfer, Valencia airport shuttle, Spain airport transfers, premium transport, reliable transfers',
  authors: [{ name: 'Alicante Transfers' }],
  openGraph: {
    title: 'Alicante Airport Transfers - Premium Transportation Service',
    description: 'Experience seamless airport transfers to 200+ destinations across Spain. Professional, reliable, and comfortable.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US', 'de_DE'],
    siteName: 'Alicante Transfers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alicante Airport Transfers - Premium Transportation Service',
    description: 'Experience seamless airport transfers to 200+ destinations across Spain.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0284c7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div>
          </div>
        }>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}