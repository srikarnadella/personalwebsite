import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import PortfolioSections from "./components/PortfolioSections";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <NavigationBar />
      {/* The page is an opaque sheet above the footer; scrolling slides it up to uncover the footer beneath */}
      <main className="relative z-10 flex min-h-[100svh] flex-col bg-[var(--bg)] pb-24 md:pb-[160px]">
        <HeroSection />
        <PortfolioSections />
        <EmailSection />
        <div id="curtain-edge" className="absolute inset-x-0 bottom-0 h-0" />
      </main>
      <Footer />
    </>
  );
}
