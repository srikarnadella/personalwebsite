import React from "react";
import { HERO } from "../data/site-content";
import RevealBlock from "./sections/RevealBlock";

export default function EmailSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <RevealBlock as="div" className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <h2
            className="font-display font-extrabold text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Let&apos;s<br />
            <span className="text-[#E57200]">talk.</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-sm leading-relaxed">
            Open to SWE new grad opportunities. Reach out directly.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="mailto:nadellasrikar@gmail.com"
            className="group flex items-center gap-3 text-white hover:text-[#E57200] transition-colors duration-200"
          >
            <span className="font-display text-lg font-semibold">nadellasrikar@gmail.com</span>
            <span className="text-[#E57200] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
          <div className="flex gap-4 mt-1">
            <a
              href="https://www.linkedin.com/in/srikar-nadella/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-[#E57200] transition-colors duration-200 tracking-wide"
            >
              LinkedIn
            </a>
            <span className="text-white/10">·</span>
            <a
              href="https://github.com/srikarnadella"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-[#E57200] transition-colors duration-200 tracking-wide"
            >
              GitHub
            </a>
            <span className="text-white/10">·</span>
            <a
              href={HERO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-[#E57200] transition-colors duration-200 tracking-wide"
            >
              Resume
            </a>
          </div>
        </div>
      </RevealBlock>
    </section>
  );
}
