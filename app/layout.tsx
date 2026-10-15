import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { siteUrl } from '@/lib/site';
import { company } from '@/data/company';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '800'], display: 'swap', variable: '--font-manrope' });

const description = 'Ai Angel builds AI agents, mobile apps, web platforms, blockchain, analytics and CRM solutions.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RootPi | AI, Web, Mobile & Software Development',
  description,
  openGraph: {
    type: 'website',
    siteName: 'Root Pi',
    title: 'Root pi | AI, Web, Mobile & Software Development',
    description,
  },
  twitter: { card: 'summary_large_image', title: 'RootPi', description },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RootPi',
  url: siteUrl,
  email: company.email,
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, '\\u003c') }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}