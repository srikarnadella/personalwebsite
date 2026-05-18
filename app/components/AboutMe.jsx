"use client";
import React from "react";

const SUMMARY_POINTS = [
  "Wells Fargo CCIBT: incoming software engineering intern focused on commercial, corporate, and investment banking technology",
  "Nightwing: built modular AI anomaly detection pipelines, data validation systems, and automated analytics workflows",
  "NT Concepts: improved Java REST APIs, MongoDB-backed services, React interfaces, testing reliability, and production support workflows",
];

const EXPERIENCE_HIGHLIGHTS = [
  "Backend engineering with Java, Spring Boot, REST APIs, MongoDB, and production-facing services",
  "Machine learning and data work using Python, Pandas, NumPy, scikit-learn, TensorFlow, and anomaly detection pipelines",
  "Cloud and systems exposure through AWS, Terraform, Docker, CI/CD, Kafka, and enterprise-scale workflows",
  "Frontend and product execution with React, React Native, debugging, usability improvements, and polished application delivery",
];

const SKILLS = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Spring Boot",
  "AWS",
  "Docker",
  "MongoDB",
];

const COURSEWORK = [
  "Artificial Intelligence",
  "Natural Language Processing",
  "Computer Vision",
  "Data Structures and Algorithms",
  "Linear Algebra",
  "Probability",
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E57200]">
          About
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Resume snapshot
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
              Summary
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Computer science student at the University of Virginia focused on
              software engineering, machine learning, and data analytics. Experience spans backend systems, frontend
              applications, cloud infrastructure, data science, and AI tooling. Looking to develop and apply their skills at
              the intersection of business and computer science. 
            </p>

            <div className="mt-6 space-y-4 text-slate-300">
              {SUMMARY_POINTS.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#E57200]" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
                Education
              </p>
              <p className="mt-4 text-lg text-white">University of Virginia</p>
              <p className="mt-2 text-sm text-slate-300">
                B.S. in Computer Science, expected May 2027
              </p>
              <p className="mt-2 text-sm text-slate-300">
                GPA 3.5 · Minor in General Business
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
                Relevant Strengths
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                {EXPERIENCE_HIGHLIGHTS.map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#E57200]" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
                Core Skills
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
                {SKILLS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E57200]">
                Relevant Coursework
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
                {COURSEWORK.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
