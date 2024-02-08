// components/Layout.tsx
import { DM_Sans } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import { ReactNode } from 'react';

const dmSans = DM_Sans({ subsets: ["latin"] });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={dmSans.className}>
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
