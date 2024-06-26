import Image from "next/image";
import MainPage from "./components/MainPage";
import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import ProjectsTab from "./components/ProjectsTab";
import AchievementSection from "./components/AchievementSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ScrollingImageTiles from "./components/ScrollingImageTiles";
import { Analytics } from "@vercel/analytics/react";
import Blog from "./components/Blog";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Analytics />
      <NavigationBar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <MainPage />
        <div style={{ padding: "40px", margin: "20px" }}></div>
        <AchievementSection />
        <AboutMe />
        <ScrollingImageTiles />
        <ProjectsTab />
        <Blog />
        <EmailSection />
      </div>
      <Footer></Footer>
    </main>
  );
}
