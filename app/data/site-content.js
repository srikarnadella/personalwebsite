export const HERO = {
  name: "Srikar Nadella",
  role: "Fintech infrastructure at Wells Fargo. Fraud-detection ML at Nightwing. CS @ UVA, open to new grad SWE roles.",
  linkedin: "https://www.linkedin.com/in/srikar-nadella/",
  resume: "https://drive.google.com/file/d/1XOGML7pMAEYlgHb5b0ZppEXt81wFyRnG/view?usp=sharing",
  github: "https://github.com/srikarnadella",
  email: "nadellasrikar@gmail.com",
}

export const EXPERIENCE = [
  {
    id: "wf",
    title: "Wells Fargo",
    role: "Software Engineering Intern",
    period: "June – Aug 2026",
    location: "Charlotte, NC · Corporate & Investment Banking Technology",
    teaser:
      "Independently built a fault-tolerant, distributed data ingestion pipeline in Java and Spring Boot for an internal financial-analytics initiative, sustaining 1,100 records a second.",
    detail:
      "Owned data integrity end to end for a 14,784-record dataset, using transactional parent-child persistence with optimistic locking to stop write conflicts under concurrent load, then built automated retry and validation logic that cut manual write-failure interventions roughly 85%.",
    stack: "Java · Spring Boot · Distributed Systems",
    link: "https://www.wellsfargo.com",
  },
  {
    id: "nw",
    title: "Nightwing",
    role: "Data Science Intern",
    period: "June – Aug 2025",
    location: "Dulles, VA · formerly Raytheon Cyber & Intelligence",
    teaser:
      "Built a modular Python ML pipeline on AWS that cut enterprise security anomaly triage time 25%, surfaced through Power BI dashboards.",
    detail:
      "Raised fraud-detection precision from about 80% to 97% with a hybrid AI/ML layer on SageMaker combining statistical methods, Isolation Forest, and deep learning. Also developed an AI security tool, integrating LLaMA 3.2 into a threat-response platform that auto-translates intel into SIGMA rules and files remediation PRs straight into CI/CD, automating away manual review work and cutting analyst triage time 43%.",
    stack: "Python · AWS SageMaker · LLaMA · Power BI",
    link: "#",
  },
  {
    id: "ntc",
    title: "NT Concepts",
    role: "Software Engineering Intern",
    period: "July – Aug 2023",
    location: "Tysons, VA",
    teaser:
      "Resolved 20+ bugs across React interfaces and Java REST APIs, lifting regression test coverage 15%.",
    detail:
      "Refactored 10+ Java REST APIs and MongoDB queries to cut data-retrieval latency 13% across production reporting modules.",
    stack: "Java · Spring Boot · MongoDB · React",
    link: "https://www.ntconcepts.com",
  },
]

export const LEADERSHIP = [
  {
    id: "hoohacks",
    title: "HooHacks",
    role: "Hacker Experience Committee Chair",
    period: "Sept 2023 – Present",
    description: "Led ops for UVA's 700+ attendee hackathon (15+ sponsors/mentors); AI/analytics workshops grew technical track enrollment 20%.",
    link: "https://hoohacks.io",
  },
  {
    id: "gtp",
    title: "Global Teaching Project",
    role: "Teaching Assistant",
    period: "June 2024 – Present",
    description: "Improved student AP exam scores 40% YoY (20% outperformance vs. state average) via custom AP CS curriculum for under-resourced students.",
    link: "https://www.globalteachingproject.org",
  },
]

export const PROJECTS = [
  {
    title: "Plutus",
    description: "Full-stack personal finance platform with Supabase Auth (Google OAuth) and JWT-gated Java endpoints isolating PII across Plaid-sourced transaction data. Outlier detection, subscription-pattern recognition, 6-month trend aggregation, and per-category budget alerts.",
    stack: "React · TypeScript · Java · Spring Boot · Plaid API · OAuth",
    gitUrl: "https://github.com/srikarnadella/PlutusSandboxDemo",
  },
  {
    title: "D(J)ikstra",
    description: "Graph-based DJ set-list generator using Dijkstra's algorithm and clustering to optimize harmonic transitions across 600+ songs via cosine similarity, cutting manual planning time for 10+ active DJs. Real-time re-optimization during live sets through a custom graph-traversal engine with harmonic-mixing constraints.",
    stack: "Python · NetworkX · Scikit-learn · Pandas",
    gitUrl: "https://github.com/srikarnadella/D-i-Jkstra",
  },
  {
    title: "API Buckets",
    description: "Database-free, cloud-native platform on AWS Elastic Beanstalk that converts spreadsheets with 1,000+ rows into auto-documented REST APIs with dynamic endpoints in under 5 minutes.",
    stack: "Java · Spring Boot · React · AWS S3 · OpenAPI",
    gitUrl: "https://github.com/srikarnadella/APIBuckets",
  },
  {
    title: "Trading Pairs HUD",
    description: "Data-focused interface for pair-trading analysis with readable correlation signals and clean quantitative visuals.",
    stack: "Python · Analytics",
    gitUrl: "https://github.com/srikarnadella/TradingPairsHUD",
  },
  {
    title: "Computer Vision",
    description: "Computer vision pipelines covering dataset preparation, live camera input, and identity-matching workflows.",
    stack: "Python · Computer Vision",
    gitUrl: "https://github.com/srikarnadella/ComputerVisionProject",
  },
  {
    title: "AI 2048",
    description: "AI course project comparing algorithms, expectimax, Monte Carlo, and deep RL, in a 2048 sandbox environment.",
    stack: "Python · ML",
    gitUrl: "https://github.com/srikarnadella/AI2048",
  },
  {
    title: "NBA MVP Predictor",
    description: "ML analysis on historical NBA data estimating MVP candidates from player stats and advanced metrics.",
    stack: "Python · Sports Analytics",
    gitUrl: "https://github.com/srikarnadella/NBAMVPPredictor",
  },
  {
    title: "Housing Market Analysis",
    description: "ML project using housing and macroeconomic data to model market movement.",
    stack: "Python · Data Analysis · ML",
    gitUrl: "https://github.com/srikarnadella/HouseMarketAnalysis",
  },
]

export const SUMMARY =
  "B.S. Computer Science at the University of Virginia, class of 2027, minoring in business at McIntire. AWS Certified Cloud Practitioner. Most at home in Java, Python, TypeScript, React, and Spring Boot, running on AWS, with Scikit-learn and PyTorch for the ML side."
