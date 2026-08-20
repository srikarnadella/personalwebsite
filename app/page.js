import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import PortfolioSections from "./components/PortfolioSections";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="site-shell flex min-h-screen flex-col text-white">
      <Analytics />
      <NavigationBar />
      <HeroSection />
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <PortfolioSections />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
