import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MedFlux',
  description: 'MedFlux - Medical Record System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} scroll-smooth`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
