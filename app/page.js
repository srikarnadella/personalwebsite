import { Analytics } from "@vercel/analytics/react";
import Chrome from "./components/Chrome";
import Footer from "./components/Footer";
import TrackBackdrop from "./components/TrackBackdrop";
import Hero from "./components/Hero";
import { About, Experience, Skills, Projects, Contact } from "./components/Sections";

export default function Home() {
  return (
    <>
      <Analytics />
      <TrackBackdrop />
      <Chrome />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
