import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/common/Header';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import MobileMenu from '@/components/common/MobileNavbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <MobileMenu />
      <Hero />
      <Services />
    </main>
  );
}
