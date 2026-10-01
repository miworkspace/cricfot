import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://cricfot.com"),

  title: {
    default: "Cricfot — Cricket & Football News",
    template: "%s | Cricfot",
  },

  description:
    "Cricfot delivers the latest cricket and football news, updates, scores and analysis.",

  applicationName: "Cricfot",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
