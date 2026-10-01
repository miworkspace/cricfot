import '../src/index.css';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { MobileBottomNav } from '../src/components/layout/MobileBottomNav';
import { BreakingNewsTicker } from '../src/components/layout/BreakingNewsTicker';

export const metadata = {
  title: {
    default: 'CricFot - শীর্ষ ক্রিকেট ও ফুটবল সংবাদ পোর্টাল',
    template: '%s | CricFot',
  },
  description:
    'বাংলাদেশ ও আন্তর্জাতিক ক্রিকেট এবং ফুটবলের তাজা সংবাদ, লাইভ স্কোর, বিশ্লেষণ, ম্যাচ সূচি ও ভিডিও হাইলাইটস।',
  keywords: [
    'CricFot',
    'Cricket',
    'Football',
    'Bangladesh Cricket',
    'BPL',
    'EPL',
    'Live Score',
    'ক্রিকেট',
    'ফুটবল',
    'বাংলাদেশ টাইগার্স',
  ],
  authors: [{ name: 'CricFot Editorial Desk' }],
  creator: 'CricFot Sports Newsroom',
  publisher: 'CricFot Media Network',
  openGraph: {
    title: 'CricFot - শীর্ষ ক্রিকেট ও ফুটবল সংবাদ পোর্টাল',
    description: 'বাংলাদেশ ও আন্তর্জাতিক ক্রিকেট এবং ফুটবলের তাজা সংবাদ ও লাইভ স্কোর।',
    url: 'https://cricfot.com',
    siteName: 'CricFot',
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CricFot - শীর্ষ ক্রিকেট ও ফুটবল সংবাদ পোর্টাল',
    description: 'বাংলাদেশ ও আন্তর্জাতিক ক্রিকেট এবং ফুটবলের তাজা সংবাদ ও লাইভ স্কোর।',
    creator: '@CricFot',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-neutral-100/60 text-neutral-900 font-sans antialiased" id="cricfot-app-root">
          <BreakingNewsTicker />
          <Header />
          <main className="flex-1 w-full pb-20 md:pb-0" id="main-content">
            {children}
          </main>
          <MobileBottomNav />
          <Footer />
        </div>
      </body>
    </html>
  );
}
