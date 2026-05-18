"use client";

import React from "react";

const PROJECTS = [
  {
    title: "Cloud CSV-to-API Platform",
    description:
      "Cloud-native platform for converting spreadsheet datasets into auto-documented REST APIs with filtering, introspection, and dynamic endpoint generation. Code is not public on github to protect API keys and other AWS data",
    stack: ["Java", "Spring Boot", "React", "AWS"],
    gitUrl: "https://github.com/srikarnadella",
  },
  {
    title: "D(J)ikstra Set List Tool",
    description:
      "Graph-based DJ set list generator using Dijkstra's algorithm, K-Means clustering, fuzzy matching, and harmonic mixing constraints.",
    stack: ["Python", "NetworkX", "Scikit-learn"],
    gitUrl: "https://github.com/srikarnadella/D-i-Jkstra",
  },
  {
    title: "AI 2048",
    description:
      "Final Project for my AI class where my team and I worked on testing different algorithms for AI and comparing how well each scored in 2048 sandbox.",
    stack: ["Python", "ML"],
    gitUrl: "https://github.com/srikarnadella/AI2048",
  },
  {
    title: "Caddy AI",
    description:
      "Golf decision support app that recommends better club choices based on distance and conditions.",
    stack: ["React Native", "ML"],
    gitUrl: "https://github.com/srikarnadella/CaddyAI",
  },
  {
    title: "Trading Pairs HUD",
    description:
      "Data-focused interface for pair-trading analysis with readable signals and simple visuals.",
    stack: ["Python", "Analytics"],
    gitUrl: "https://github.com/srikarnadella/TradingPairsHUD",
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

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E57200]">
          Projects
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Projects from my resume and GitHub
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Expanded project list spanning software engineering, machine
          learning, analytics, finance, mobile apps, and frontend builds. More/all
          repositories are available on{" "}
          <a
            href="https://github.com/srikarnadella?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7A64A] hover:text-[#FFD7A8]"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
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
