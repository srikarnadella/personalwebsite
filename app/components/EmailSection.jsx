"use client";
import React from "react";

const EmailSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-2xl rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/65">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s connect
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          I am looking for software engineering internships and new grad
          opportunities. Feel free to reach out.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:nadellasrikar@gmail.com"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/12 px-5 py-3 text-sm text-white transition hover:bg-cyan-300/18"
          >
            nadellasrikar@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/srikar-nadella/"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/srikarnadella"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
