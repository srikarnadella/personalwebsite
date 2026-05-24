"use client";
import React from "react";

const SUMMARY_POINTS = [
  "Wells Fargo CCIBT: incoming SWE intern — commercial, corporate, and investment banking technology",
  "Nightwing: modular AI anomaly detection pipelines, data validation, and automated analytics",
  "NT Concepts: Java REST APIs, MongoDB-backed services, React interfaces, and production support",
];

const EXPERIENCE_HIGHLIGHTS = [
  "Backend — Java, Spring Boot, REST APIs, MongoDB",
  "ML & Data — Python, Pandas, scikit-learn, TensorFlow, anomaly detection",
  "Cloud & Infra — AWS, Terraform, Docker, CI/CD, Kafka",
  "Frontend — React, React Native, usability improvements",
];

const SKILLS = [
  "Java", "Python", "JavaScript", "TypeScript", "SQL",
  "React", "Spring Boot", "AWS", "Docker", "MongoDB",
];

const COURSEWORK = [
  "Artificial Intelligence", "Natural Language Processing",
  "Computer Vision", "Data Structures & Algorithms",
  "Linear Algebra", "Probability",
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E57200]">
          About
        </p>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Background
          </h2>
          <span className="text-sm text-slate-500">
            3 internships &nbsp;&middot;&nbsp; 20+ projects &nbsp;&middot;&nbsp; GPA 3.5
          </span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
              Experience
            </p>
            <div className="mt-4 space-y-3 text-slate-300">
              {SUMMARY_POINTS.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E57200]" />
                  <p className="text-sm leading-7">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
                Education
              </p>
              <p className="mt-3 text-base font-medium text-white">University of Virginia</p>
              <p className="mt-1 text-sm text-slate-400">
                B.S. Computer Science &middot; exp. May 2027
              </p>
              <p className="mt-1 text-sm text-slate-400">
                GPA 3.5 &middot; Business minor (McIntire)
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
                Strengths
              </p>
              <div className="mt-3 space-y-2">
                {EXPERIENCE_HIGHLIGHTS.map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E57200]" />
                    <p className="text-sm text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#E57200]">
                  Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#E57200]">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {COURSEWORK.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
