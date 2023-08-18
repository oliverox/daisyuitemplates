import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import NextAuthProvider from '@/app/context/NextAuthProvider';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'DaisyUI Templates',
  description: 'High quality templates for DaisyUI lovers.',
};

function Footer() {
  return (
    <footer className="footer items-center justify-center p-4 bg-opacity-10">
      <div className="items-center grid-flow-col">
        <p className="text-xs">Copyright © 2023 - All Right Reserved</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} bg-gradient-to-b from-[color:var(--gradient1)] to-[color:var(--gradient2)]`}
    >
      <body>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
