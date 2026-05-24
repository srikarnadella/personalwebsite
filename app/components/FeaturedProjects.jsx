"use client";

import React from "react";

const PROJECTS = [
  {
    title: "Cloud CSV-to-API Platform",
    description:
      "Cloud-native platform for converting spreadsheet datasets into auto-documented REST APIs with filtering, introspection, and dynamic endpoint generation. Code is not public on github to protect API keys and other AWS data",
    stack: ["Java", "Spring Boot", "React", "AWS"],
    gitUrl: "https://github.com/srikarnadella",
    featured: true,
  },
  {
    title: "D(J)ikstra Set List Tool",
    description:
      "Graph-based DJ set list generator using Dijkstra's algorithm, K-Means clustering, fuzzy matching, and harmonic mixing constraints.",
    stack: ["Python", "NetworkX", "Scikit-learn"],
    gitUrl: "https://github.com/srikarnadella/D-i-Jkstra",
    featured: true,
  },
  {
    title: "Caddy AI",
    description:
      "Golf decision support app that recommends better club choices based on distance and conditions.",
    stack: ["React Native", "ML"],
    gitUrl: "https://github.com/srikarnadella/CaddyAI",
    featured: true,
  },
  {
    title: "Trading Pairs HUD",
    description:
      "Data-focused interface for pair-trading analysis with readable signals and simple visuals.",
    stack: ["Python", "Analytics"],
    gitUrl: "https://github.com/srikarnadella/TradingPairsHUD",
    featured: true,
  },
  {
    title: "AI 2048",
    description:
      "Final Project for my AI class where my team and I worked on testing different algorithms for AI and comparing how well each scored in 2048 sandbox.",
    stack: ["Python", "ML"],
    gitUrl: "https://github.com/srikarnadella/AI2048",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Market sentiment analysis pipeline using VADER and RoBERTa on live headlines for tracked companies.",
    stack: ["Python", "NLP", "RoBERTa"],
    gitUrl: "https://github.com/srikarnadella/SentimentAnalysis",
  },
  {
    title: "Sort Visualizer",
    description:
      "Interactive website for learning sorting algorithms through animation and visual feedback.",
    stack: ["React", "Frontend"],
    gitUrl: "https://github.com/srikarnadella/Sort-Visualizer",
    previewUrl: "https://sort-visualizer-fawn.vercel.app/",
  },
  {
    title: "Stock Analysis",
    description:
      "Programs for stock analysis and charting with supporting quantitative insights.",
    stack: ["Python", "Data Analysis"],
    gitUrl: "https://github.com/srikarnadella/Financial-Modeling/tree/main/Analysis",
  },
  {
    title: "Stock Simulations",
    description:
      "Machine learning and simulation-based approaches for stock price and trajectory forecasting.",
    stack: ["Python", "ML", "Visualization"],
    gitUrl: "https://github.com/srikarnadella/Financial-Modeling/tree/main/Simulations",
  },
  {
    title: "Kaggle Projects",
    description:
      "Competition work covering feature engineering, practical model iteration, and data cleaning.",
    stack: ["Python", "Kaggle", "ML"],
    gitUrl: "https://github.com/srikarnadella/KaggleProjects",
    previewUrl: "https://www.kaggle.com/srikarnadella",
  },
  {
    title: "Machine Learning Notes and Models",
    description:
      "Model templates and write-ups focused on use cases, implementation tradeoffs, and constraints.",
    stack: ["Python", "Write-ups"],
    gitUrl: "https://github.com/srikarnadella/MachineLearningNotesandInsights",
  },
  {
    title: "IB Web Scraper",
    description:
      "Web scraper that builds a rough DCF-style model for public companies.",
    stack: ["Python", "Finance", "Data"],
    gitUrl: "https://github.com/srikarnadella/IBWebScraper",
  },
  {
    title: "Pomodoro Website",
    description:
      "Study-focused productivity website built as a simple motivation tool.",
    stack: ["React", "Frontend"],
    gitUrl: "https://github.com/srikarnadella/pomodoro-website",
    previewUrl:
      "https://pomodoro-website-git-main-srikarnadellas-projects.vercel.app/",
  },
  {
    title: "Facial Recognition",
    description:
      "Programs focused on facial recognition through datasets, live camera input, and identity matching workflows.",
    stack: ["Python", "Computer Vision"],
    gitUrl:
      "https://github.com/srikarnadella/RandomStuff/tree/main/FacialRecognition",
  },
  {
    title: "Forage Job Simulations",
    description:
      "A collection of company-specific simulations covering software engineering, consulting, cybersecurity, and analytics work.",
    stack: ["Write-ups", "Case Work"],
    gitUrl: "https://github.com/srikarnadella/Forage-Simulations",
  },
  {
    title: "Email Spam Detector",
    description:
      "Machine learning system that vectorizes message content and classifies likely spam versus legitimate email.",
    stack: ["Python", "ML"],
    gitUrl: "https://github.com/srikarnadella/EmailSpamDetector",
  },
  {
    title: "Heart Disease Prediction Model",
    description:
      "Modeling work focused on predicting whether a patient may have heart disease from clinical inputs.",
    stack: ["Python", "ML", "Data"],
    gitUrl: "https://github.com/srikarnadella/HeartDiseasePredictorModel",
  },
  {
    title: "To-Do List App",
    description:
      "Task management app built in React Native with a simple mobile-first interface.",
    stack: ["React Native", "Mobile"],
    gitUrl: "https://github.com/srikarnadella/To-Do-List-App",
  },
  {
    title: "Yelp Cover App",
    description:
      "React Native recreation of the Yelp app interface and related user flows.",
    stack: ["React Native", "Mobile"],
    gitUrl: "https://github.com/srikarnadella/yelp-app",
  },
  {
    title: "Credit Score Analysis",
    description:
      "Analysis and modeling work focused on understanding the drivers behind credit scores.",
    stack: ["Python", "ML", "Data Analysis"],
    gitUrl: "https://github.com/srikarnadella/CreditScoreAnalysis",
  },
  {
    title: "NBA MVP Predictor",
    description:
      "Machine learning analysis on historical NBA data to estimate which player should win MVP.",
    stack: ["Python", "Sports Analytics"],
    gitUrl: "https://github.com/srikarnadella/NBAMVPPredictor",
  },
  {
    title: "Housing Market Analysis",
    description:
      "Machine learning project using housing and macroeconomic data to predict market movement.",
    stack: ["Python", "Data Analysis", "ML"],
    gitUrl: "https://github.com/srikarnadella/HouseMarketAnalysis",
  },
  {
    title: "BlackJack ML",
    description:
      "Blackjack-focused modeling using DQN and statistical approaches to improve gameplay decisions.",
    stack: ["Python", "Reinforcement Learning"],
    gitUrl: "https://github.com/srikarnadella/BlackJackML",
  },
];

const FEATURED = PROJECTS.filter((p) => p.featured);
const OTHER = PROJECTS.filter((p) => !p.featured);

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Projects
        </h2>
        <p className="text-sm text-slate-500">
          SWE &middot; ML &middot; Analytics &middot; Finance &middot; Mobile &nbsp;&mdash;&nbsp;{" "}
          <a
            href="https://github.com/srikarnadella?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7A64A] hover:text-[#FFD7A8]"
          >
            all repos on GitHub
          </a>
        </p>
      </div>

      {/* Featured bento grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {FEATURED.map((project, index) => {
          const isHero = index === 0;
          return (
            <article
              key={project.title}
              className={`rounded-[1.5rem] border border-[#E57200]/20 bg-white/[0.06] ${
                isHero ? "border-l-2 border-l-[#E57200]/50 p-8 md:col-span-2" : "p-6"
              }`}
            >
              {isHero && (
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#E57200]">
                  Featured
                </p>
              )}
              <h3
                className={`font-display font-semibold text-white ${
                  isHero ? "text-2xl" : "text-xl"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#E57200]/30 bg-[#E57200]/15 px-4 py-2 text-sm text-white transition hover:bg-[#E57200]/25"
                >
                  Code
                </a>
                {project.previewUrl ? (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    Live
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {/* More projects divider */}
      <div className="mt-10 mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/8" />
        <p className="text-xs uppercase tracking-widest text-slate-600">More Projects</p>
        <div className="h-px flex-1 bg-white/8" />
      </div>

      {/* Other projects grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {OTHER.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
          >
            <h3 className="text-base font-medium text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#E57200]/20 bg-[#E57200]/10 px-4 py-2 text-sm text-white transition hover:bg-[#E57200]/18"
              >
                Code
              </a>
              {project.previewUrl ? (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  Live
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
