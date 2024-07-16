import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../styles/globals.scss';
import 'react-phone-input-2/lib/style.css';
import type { Viewport } from 'next';

import { AppContextProvider } from '@/context/app.context';
import ClientLayout from '@/components/ClientLayout';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const metadata: Metadata = {
  title: 'The Infin',
  description: 'The official landing page, built with Next.js',
};

export const viewport: Viewport = {
  width: 'device-width',
};

const neueHaasGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplayRoman.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayMedium.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-neue-haas-grotesk',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neueHaasGrotesk.className}>
        <link rel="icon" href="/images/icon.webp" sizes="any" />
        <AppContextProvider>
          <ClientLayout>{children}</ClientLayout>
          {/* <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            It is in maintenance
          </div> */}
        </AppContextProvider>
      </body>
    </html>
  );
}
