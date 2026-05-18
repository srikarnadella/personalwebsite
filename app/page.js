import MainPage from "./components/MainPage";
import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/FeaturedProjects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  return (
    <main className="site-shell flex min-h-screen flex-col text-white">
      <Analytics />
      <NavigationBar />
      <div className="mx-auto mt-20 w-full max-w-7xl px-5 py-4 lg:px-8">
        <MainPage />
        <div className="h-8 sm:h-12" />
        <AboutMe />
        <FeaturedProjects />
        <EmailSection />
      </div>
      <Footer></Footer>
    </main>
  );
}
