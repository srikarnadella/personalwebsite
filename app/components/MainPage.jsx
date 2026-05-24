"use client";
import React from "react";
import AsciiArtHero from "./AsciiArtHero";

const MainPage = () => {
  return (
    <section id="home" className="relative py-8 sm:py-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_12%_14%,rgba(65,105,225,0.18),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(229,114,0,0.14),transparent_26%)]" />

      <div className="mb-5 max-w-5xl">
        <h1 className="font-display text-[3.5rem] font-black uppercase leading-none tracking-[0.06em] text-white sm:text-[5rem] lg:text-[5.5rem]">
          Srikar Nadella
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-lg tracking-wide text-slate-400">
            Software Engineer &nbsp;&middot;&nbsp; CS @ UVa &lsquo;27
          </p>
          <span className="hidden text-slate-700 sm:block">/</span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#E57200]/25 bg-[#E57200]/10 px-3 py-1 text-xs text-[#F7A64A]">
              Wells Fargo &lsquo;26
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
              Nightwing &lsquo;25
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
              NT Concepts &lsquo;23
            </span>
          </div>
        </div>

        <p className="mt-2 text-xs text-slate-600">
          Java &middot; Python &middot; JavaScript &middot; Spring Boot &middot; AWS &middot; React
        </p>
      </div>

      <div className="h-[34rem] min-h-[34rem]">
        <AsciiArtHero title="srikar-terminal" />
      </div>
    </section>
  );
};

export default MainPage;
