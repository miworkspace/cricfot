import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';
import { BreakingNewsTicker } from './BreakingNewsTicker';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100/60 text-neutral-900 font-sans antialiased" id="cricfot-app">
      {/* Real-time Breaking News Scrolling Ticker at the very top of Layout */}
      <BreakingNewsTicker />

      {/* Global Header including Utility Bar, Masthead, Main Navigation, & Mobile Drawer */}
      <Header />

      {/* Main Page Content with bottom padding on mobile to prevent overlap with MobileBottomNav */}
      <main className="flex-1 w-full pb-20 md:pb-0" id="main-content">
        {children}
      </main>

      {/* Mobile-only Bottom Navigation Bar */}
      <MobileBottomNav />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
