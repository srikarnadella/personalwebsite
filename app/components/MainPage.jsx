"use client";
import React from "react";
import AsciiArtHero from "./AsciiArtHero";

const MainPage = () => {
  return (
    <section id="home" className="relative py-8 sm:py-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_12%_14%,rgba(65,105,225,0.18),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(229,114,0,0.14),transparent_26%)]" />
      <div className="mb-4 max-w-5xl">
        <p className="text-4xl font-black uppercase tracking-[0.16em] text-white sm:text-5xl lg:text-[4.6rem]">
          Srikar Nadella
        </p>
      </div>

      <div className="h-[34rem] min-h-[34rem]">
        <AsciiArtHero
          title="srikar-terminal"
          summary="Commands: bio, skills, work, projects, contact, links, funfacts, resume, github, help, clear"
        />
      </div>
    </section>
  );
};

export default MainPage;
