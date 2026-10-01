import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { MobileBottomNav } from "@/src/components/layout/MobileBottomNav";
import { BreakingNewsTicker } from "@/src/components/layout/BreakingNewsTicker";

export const metadata = {
  openGraph: {
    siteName: "Cricfot",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-neutral-100/60 text-neutral-900 font-sans antialiased"
        id="cricfot-app-root"
      >
        <BreakingNewsTicker />
        <Header />
        <main className="flex-1 w-full pb-20 md:pb-0" id="main-content">
          {children}
        </main>
        <MobileBottomNav />
        <Footer />
      </div>
    </>
  );
}
