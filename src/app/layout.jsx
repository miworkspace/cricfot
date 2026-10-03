import "./globals.css";
import { Noto_Sans_Bengali } from "next/font/google";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cricfot.com"),

  title: {
    default: "ক্রিকফুট — ক্রিকেট ও ফুটবল সংবাদ",
    template: "%s | ক্রিকফুট",
  },

  description:
    "ক্রিকফুটে পড়ুন বাংলাদেশ ও আন্তর্জাতিক ক্রিকেট ও ফুটবলের সর্বশেষ খবর, ম্যাচ আপডেট, লাইভ স্কোর, ফলাফল, বিশ্লেষণ ও গুরুত্বপূর্ণ ক্রীড়া সংবাদ।",

  applicationName: "Cricfot",

  keywords: [
    "Cricfot",
    "ক্রিকফুট",
    "Cricket News",
    "Football News",
    "Cricket News Bangladesh",
    "Football News Bangladesh",
    "Bangladesh Cricket",
    "Bangladesh Football",
    "International Cricket",
    "International Football",
    "Cricket Live Score",
    "Football Live Score",
    "Sports News Bangladesh",
  ],

  authors: [
    {
      name: "Cricfot",
      url: "https://www.cricfot.com",
    },
  ],

  creator: "Cricfot",
  publisher: "Cricfot",
  category: "sports",

  alternates: {
    canonical: "https://www.cricfot.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://www.cricfot.com",
    siteName: "Cricfot",
    title: "Cricfot — Cricket & Football News",
    description:
      "Latest cricket and football news, live scores, match updates, results and analysis from Bangladesh and around the world.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cricfot — Cricket & Football News",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cricfot — Cricket & Football News",
    description:
      "Latest cricket and football news, live scores, match updates, results and analysis.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`scroll-smooth ${notoSansBengali.variable}`}>
      <body>{children}</body>
    </html>
  );
}
