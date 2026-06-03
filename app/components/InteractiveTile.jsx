"use client"

import React, { useState } from "react"

const EXPERIENCE_TILES = [
  {
    id: "wf",
    title: "Wells Fargo",
    role: "Software Engineering Intern",
    period: "June – Aug 2026",
    location: "Charlotte, NC",
    bullets: [
      "Incoming SWE Intern on the Corporate & Investment Banking Technology (CIBT) team.",
    ],
    tags: ["CIBT", "Banking Tech", "Enterprise"],
    link: "https://www.wellsfargo.com",
  },
  {
    id: "hoohacks",
    title: "HooHacks",
    role: "Hacker Experience Committee Chair",
    period: "Sept 2023 – Present",
    location: "University of Virginia",
    bullets: [
      "Directed operations for UVA's 700+ attendee annual hackathon, coordinating 15+ sponsors and mentors.",
      "Designed AI/analytics-focused workshops and case challenges that grew technical track enrollment by 20%.",
    ],
    tags: ["Leadership", "Hackathon", "AI/ML", "Events"],
    link: "https://hoohacks.io",
  },
  {
    id: "gtp",
    title: "Global Teaching Project",
    role: "Teaching Assistant",
    period: "June 2024 – Present",
    location: "Remote",
    bullets: [
      "Improved student AP exam scores by 40% year-over-year with a 20% outperformance vs. state average.",
      "Designed and delivered custom AP Computer Science curriculum for under-resourced high school students.",
    ],
    tags: ["CS Education", "AP CSA", "Curriculum"],
    link: "https://www.globalteachingproject.org",
  },
  {
    id: "nw",
    title: "Nightwing",
    role: "Data Science Intern",
    period: "June – Aug 2025",
    location: "Dulles, VA",
    bullets: [
      "Cut anomaly triage time by 25% with a modular Python ML pipeline — ingestion, schema validation, cleaning — deployed with Power BI dashboards.",
      "Improved fraud detection precision by 40% and hit a 96% F1-score with a hybrid AI/ML layer combining Z-score, IQR, Isolation Forest, Autoencoder, and LSTM.",
      "Accelerated analyst triage by 43% by integrating LLaMA 3.2 into a GenAI threat-response platform automating SIGMA rule interpretation via CrowdStrike.",
    ],
    tags: ["Python", "ML", "LLaMA", "Power BI", "CrowdStrike"],
    link: "#",
  },
  {
    id: "ntc",
    title: "NT Concepts",
    role: "Software Engineering Intern",
    period: "July – Aug 2023",
    location: "Tysons, VA",
    bullets: [
      "Reduced future support tickets by 30% by resolving 20+ bugs across React web interfaces and Java REST APIs, with Jira/Confluence documentation.",
      "Improved data retrieval latency by 13% by refactoring 10+ Java RESTful APIs and optimizing MongoDB queries for React frontend data flows.",
      "Accelerated automated report generation with Python scripts and JUnit tests, improving pipeline stability.",
    ],
    tags: ["Java", "Spring Boot", "MongoDB", "React", "JUnit"],
    link: "https://www.ntconcepts.com",
  },
]

const ALL_PROJECTS = [
  {
    title: "Cloud CSV-to-API Platform",
    description: "Database-free cloud-native platform on AWS Elastic Beanstalk — converts 1000+ row spreadsheets into auto-documented REST APIs with dynamic endpoints in under 5 min.",
    stack: ["Java", "Spring Boot", "React", "AWS S3", "OpenAPI"],
    gitUrl: "https://github.com/srikarnadella",
  },
  {
    title: "D(J)ikstra",
    description: "Graph-based DJ set list generator applying Dijkstra's + K-Means clustering to optimize harmonic transitions across 600+ songs with real-time re-optimization.",
    stack: ["Python", "NetworkX", "Scikit-learn", "Pandas"],
    gitUrl: "https://github.com/srikarnadella/D-i-Jkstra",
  },
  {
    title: "Caddy AI",
    description: "Golf decision support app recommending club choices based on distance and course conditions using ML modeling.",
    stack: ["React Native", "ML"],
    gitUrl: "https://github.com/srikarnadella/CaddyAI",
  },
  {
    title: "Trading Pairs HUD",
    description: "Data-focused interface for pair-trading analysis with readable correlation signals and clean quantitative visuals.",
    stack: ["Python", "Analytics"],
    gitUrl: "https://github.com/srikarnadella/TradingPairsHUD",
  },
  {
    title: "AI 2048",
    description: "AI course final project — tested and compared multiple algorithms (expectimax, Monte Carlo, deep RL) in a 2048 sandbox environment.",
    stack: ["Python", "ML"],
    gitUrl: "https://github.com/srikarnadella/AI2048",
  },
  {
    title: "Sentiment Analysis",
    description: "Market sentiment pipeline using VADER and RoBERTa on live headlines for tracked companies.",
    stack: ["Python", "NLP", "RoBERTa"],
    gitUrl: "https://github.com/srikarnadella/SentimentAnalysis",
  },
  {
    title: "Sort Visualizer",
    description: "Interactive website for learning sorting algorithms through real-time animation and visual feedback.",
    stack: ["React", "Frontend"],
    gitUrl: "https://github.com/srikarnadella/Sort-Visualizer",
    previewUrl: "https://sort-visualizer-fawn.vercel.app/",
  },
  {
    title: "Stock Analysis",
    description: "Programs for stock analysis and charting with supporting quantitative insights and technical indicators.",
    stack: ["Python", "Data Analysis"],
    gitUrl: "https://github.com/srikarnadella/Financial-Modeling",
  },
  {
    title: "Stock Simulations",
    description: "ML and simulation-based approaches for stock price and trajectory forecasting.",
    stack: ["Python", "ML", "Visualization"],
    gitUrl: "https://github.com/srikarnadella/Financial-Modeling",
  },
  {
    title: "Kaggle Projects",
    description: "Competition work covering feature engineering, practical model iteration, and data cleaning across multiple datasets.",
    stack: ["Python", "Kaggle", "ML"],
    gitUrl: "https://github.com/srikarnadella/KaggleProjects",
    previewUrl: "https://www.kaggle.com/srikarnadella",
  },
  {
    title: "BlackJack ML",
    description: "Blackjack modeling using DQN and statistical approaches to improve gameplay decisions through reinforcement learning.",
    stack: ["Python", "Reinforcement Learning"],
    gitUrl: "https://github.com/srikarnadella/BlackJackML",
  },
  {
    title: "NBA MVP Predictor",
    description: "ML analysis on historical NBA data to estimate MVP candidates using player stats and advanced metrics.",
    stack: ["Python", "Sports Analytics"],
    gitUrl: "https://github.com/srikarnadella/NBAMVPPredictor",
  },
  {
    title: "Heart Disease Predictor",
    description: "Modeling work predicting whether a patient may have heart disease from clinical inputs.",
    stack: ["Python", "ML", "Data"],
    gitUrl: "https://github.com/srikarnadella/HeartDiseasePredictorModel",
  },
  {
    title: "Email Spam Detector",
    description: "ML system that vectorizes message content and classifies likely spam vs. legitimate email.",
    stack: ["Python", "ML"],
    gitUrl: "https://github.com/srikarnadella/EmailSpamDetector",
  },
  {
    title: "IB Web Scraper",
    description: "Web scraper that builds a rough DCF-style valuation model for public companies.",
    stack: ["Python", "Finance", "Data"],
    gitUrl: "https://github.com/srikarnadella/IBWebScraper",
  },
  {
    title: "Housing Market Analysis",
    description: "ML project using housing and macroeconomic data to predict market movement.",
    stack: ["Python", "Data Analysis", "ML"],
    gitUrl: "https://github.com/srikarnadella/HouseMarketAnalysis",
  },
  {
    title: "Credit Score Analysis",
    description: "Analysis and modeling focused on understanding the key drivers behind credit scores.",
    stack: ["Python", "ML", "Data Analysis"],
    gitUrl: "https://github.com/srikarnadella/CreditScoreAnalysis",
  },
  {
    title: "Pomodoro Website",
    description: "Study-focused productivity website with a clean timer interface built as a motivation tool.",
    stack: ["React", "Frontend"],
    gitUrl: "https://github.com/srikarnadella/pomodoro-website",
    previewUrl: "https://pomodoro-website-git-main-srikarnadellas-projects.vercel.app/",
  },
  {
    title: "To-Do List App",
    description: "Task management mobile app in React Native with a simple mobile-first interface.",
    stack: ["React Native", "Mobile"],
    gitUrl: "https://github.com/srikarnadella/To-Do-List-App",
  },
  {
    title: "Facial Recognition",
    description: "Programs for facial recognition through datasets, live camera input, and identity matching workflows.",
    stack: ["Python", "Computer Vision"],
    gitUrl: "https://github.com/srikarnadella/RandomStuff",
  },
  {
    title: "ML Notes & Models",
    description: "Model templates and write-ups on use cases, implementation tradeoffs, and real-world constraints.",
    stack: ["Python", "Write-ups"],
    gitUrl: "https://github.com/srikarnadella/MachineLearningNotesandInsights",
  },
  {
    title: "Forage Simulations",
    description: "Company-specific simulations covering SWE, consulting, cybersecurity, and analytics case work.",
    stack: ["Write-ups", "Case Work"],
    gitUrl: "https://github.com/srikarnadella/Forage-Simulations",
  },
]

// Books-on-a-shelf accordion — all closed by default, open on hover
function ShelfItem({ item, isActive, onMouseEnter }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        // Thin spine by default (80px), grows to fill space on hover
        flex: isActive ? "1 0 80px" : "0 0 80px",
        height: "440px",
        background: isActive ? "#0f1625" : "#0a0d18",
        border: isActive ? "1px solid rgba(229,114,0,0.3)" : "1px solid rgba(255,255,255,0.06)",
        transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1), background 0.4s ease, border-color 0.4s ease",
        minWidth: 0,
      }}
      onMouseEnter={onMouseEnter}
    >
      {/* Orange left accent when open */}
      <div
        className="absolute inset-y-0 left-0 w-[2px] rounded-l-xl bg-[#E57200]"
        style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }}
      />

      {/* Expanded content */}
      <div
        className="absolute inset-0 p-7 flex flex-col justify-between overflow-hidden"
        style={{
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.35s ease",
          transitionDelay: isActive ? "0.2s" : "0s",
          pointerEvents: isActive ? "auto" : "none",
        }}
      >
        <div>
          <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E57200]">
              {item.role}
            </span>
            <span className="text-xs font-mono text-slate-500">{item.period}</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mt-1 mb-1">{item.title}</h3>
          <p className="text-xs font-mono text-slate-500 mb-5">{item.location}</p>

          <ul className="space-y-3">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E57200]/60" />
                <p className="text-sm leading-relaxed text-slate-300">{b}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.62rem] font-mono px-2.5 py-0.5 rounded-full text-slate-400"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          {item.link !== "#" && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#E57200]/60 hover:text-[#E57200] transition-colors"
            >
              website →
            </a>
          )}
        </div>
      </div>

      {/* Spine label when closed */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: isActive ? 0 : 1,
          transition: "opacity 0.25s ease",
        }}
      >
        <span
          className="text-[0.7rem] font-mono font-semibold tracking-[0.22em] text-slate-500 whitespace-nowrap select-none"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
        >
          {item.title}
        </span>
      </div>
    </div>
  )
}

function ExperienceAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div
      className="flex flex-row items-stretch gap-3"
      onMouseLeave={() => setActiveIndex(0)}
    >
      {EXPERIENCE_TILES.map((item, index) => (
        <ShelfItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  )
}

function ProjectShelfItem({ project, isActive, onMouseEnter }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        flex: isActive ? "1 0 52px" : "0 0 52px",
        height: "360px",
        background: isActive ? "#0f1625" : "#0a0d18",
        border: isActive ? "1px solid rgba(229,114,0,0.3)" : "1px solid rgba(255,255,255,0.06)",
        transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1), background 0.4s ease, border-color 0.4s ease",
        minWidth: 0,
      }}
      onMouseEnter={onMouseEnter}
    >
      {/* Orange left accent when open */}
      <div
        className="absolute inset-y-0 left-0 w-[2px] rounded-l-xl bg-[#E57200]"
        style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }}
      />

      {/* Expanded content */}
      <div
        className="absolute inset-0 p-6 flex flex-col justify-between overflow-hidden"
        style={{
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.35s ease",
          transitionDelay: isActive ? "0.2s" : "0s",
          pointerEvents: isActive ? "auto" : "none",
        }}
      >
        <div>
          <h3 className="text-xl font-display font-bold text-white mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[0.6rem] font-mono px-2.5 py-0.5 rounded-full text-slate-400"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 pt-4 border-t border-white/5">
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#E57200]/70 hover:text-[#E57200] transition-colors"
          >
            GitHub →
          </a>
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
            >
              Live →
            </a>
          )}
        </div>
      </div>

      {/* Spine label when closed */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: isActive ? 0 : 1, transition: "opacity 0.25s ease" }}
      >
        <span
          className="text-[0.62rem] font-mono font-semibold tracking-[0.18em] text-slate-500 whitespace-nowrap select-none"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
        >
          {project.title}
        </span>
      </div>
    </div>
  )
}

// Two independent shelf rows — 11 books each
function ShelfRow({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div
      className="flex flex-row items-stretch gap-2"
      onMouseLeave={() => setActiveIndex(0)}
    >
      {projects.map((project, index) => (
        <ProjectShelfItem
          key={project.title}
          project={project}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  )
}

function ProjectsShelf() {
  return (
    <div className="space-y-2">
      <ShelfRow projects={ALL_PROJECTS.slice(0, 11)} />
      <ShelfRow projects={ALL_PROJECTS.slice(11)} />
    </div>
  )
}

const SKILLS = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { label: "Frameworks", items: ["Spring Boot", "React", "Node.js", "REST APIs", "OpenAPI"] },
  { label: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD", "Linux", "Git"] },
  { label: "AI / ML", items: ["Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy"] },
]

export default function InteractiveTile() {
  return (
    <section id="tiles" className="py-20 sm:py-28">

      {/* Education */}
      <div className="mb-20">
        <h2
          className="font-display font-extrabold text-white mb-8 leading-none"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-0">
          <div>
            <p className="font-display font-bold text-white text-xl leading-tight">
              University of Virginia
            </p>
            <p className="text-slate-400 text-sm mt-1.5">
              B.S. Computer Science &nbsp;&middot;&nbsp; Business Minor, McIntire School of Commerce
            </p>
            <p className="text-[#E57200] text-xs font-mono mt-1.5 tracking-wide">GPA 3.5</p>
          </div>
          <p className="text-sm text-slate-500 font-mono whitespace-nowrap shrink-0">
            Expected May 2027
          </p>
        </div>
      </div>

      {/* Orange rule */}
      <div className="mb-16 flex items-center gap-4">
        <div className="h-px w-10 bg-[#E57200]" />
        <div className="h-px flex-1 bg-white/5" />
      </div>

      {/* Experience */}
      <div className="mb-20">
        <h2
          className="font-display font-extrabold text-white mb-8 leading-none"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          Experience
        </h2>
        <ExperienceAccordion />
      </div>

      {/* Orange rule */}
      <div className="mb-16 flex items-center gap-4">
        <div className="h-px w-10 bg-[#E57200]" />
        <div className="h-px flex-1 bg-white/5" />
      </div>

      {/* Projects */}
      <div id="projects" className="mb-20">
        <div className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <h2
            className="font-display font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Projects
          </h2>
          <a
            href="https://github.com/srikarnadella?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-[#E57200] transition-colors"
          >
            All on GitHub →
          </a>
        </div>
        <ProjectsShelf />
      </div>

      {/* Orange rule */}
      <div className="mb-16 flex items-center gap-4">
        <div className="h-px w-10 bg-[#E57200]" />
        <div className="h-px flex-1 bg-white/5" />
      </div>

      {/* Skills */}
      <div id="skills">
        <h2
          className="font-display font-extrabold text-white mb-10 leading-none"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS.map((cat) => (
            <div key={cat.label}>
              <p className="text-[0.6rem] font-mono uppercase tracking-[0.28em] text-[#E57200] mb-3">
                {cat.label}
              </p>
              <div className="flex flex-col gap-2">
                {cat.items.map((skill) => (
                  <span key={skill} className="text-sm text-slate-300">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
