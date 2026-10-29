export const HERO = {
  name: "Srikar Nadella",
  role: "CS at UVA. I build software for F1, the markets and anything with data. Open to New Grad SWE roles.",
  linkedin: "https://www.linkedin.com/in/srikar-nadella/",
  resume: "https://drive.google.com/file/d/1iYqM8iDdflOOS9-iNEsyObbX1eQZbnv1/view?usp=sharing",
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

// Featured work, in the order the index shows it. `image` is a real screenshot in
// /public/projects; projects without one show `figure` (a key number) instead.
export const PROJECTS = [
  {
    slug: "undercut",
    title: "Undercut",
    kind: "Live race engineer",
    year: "2026",
    description:
      "A race engineer for F1 26. It reads the telemetry the game sends for every car on track and turns it into radio calls: push, hold or box, who to attack, when the rain arrives, read out loud when there's no time to glance over. A real-time Node.js pipeline ingests about 330 UDP packets a second, streams results over WebSockets and stores every race in SQLite for the post-race debrief.",
    result: "Scored on 11 recorded races, the LightGBM overtake model reaches 0.866 AUC against 0.837 for the gap alone, and rejoin predictions after a stop land 3.1 places off against 6.4 for the obvious guess.",
    stack: "Node.js · WebSockets · SQLite · Python · LightGBM",
    image: "/projects/undercut-drive.png",
    gallery: [
      { src: "/projects/undercut-battle.png", alt: "Undercut's Battle screen" },
      { src: "/projects/undercut-strategy.png", alt: "Undercut's Strategy screen" },
      { src: "/projects/undercut-debrief.png", alt: "Undercut's post-race Debrief screen" },
    ],
    imageAlt: "Undercut's Drive screen: a PUSH call, the gap to Hamilton ahead and Hadjar behind, and tyre, pit, weather and car projections",
    liveUrl: "https://srikarnadella.github.io/f1-race-engineer/",
    gitUrl: "https://github.com/srikarnadella/f1-race-engineer",
    postUrl: "https://lnkd.in/p/ezYEwtmz",
  },
  {
    slug: "f1-forecaster",
    title: "F1 Forecaster",
    kind: "Race forecasting pipeline",
    year: "2026",
    description:
      "Forecasts the winner, podium, finishing order and championship from practice, qualifying and sprint data, then scores every forecast against what actually happened. Also breaks down race pace, tyre wear and where each car gains or loses time, from 2023 onward via OpenF1.",
    result: "Runs itself on race weekends: forecasts after qualifying, reviews after the race, and only promotes a new model when it beats the champion in walk-forward tests.",
    stack: "Python · PyTorch · MLflow · Optuna · Streamlit · GitHub Actions",
    image: "/projects/f1-forecaster.jpg",
    imageAlt: "F1 Forecaster's next-race page: the Mexico City GP pace projection by team",
    liveUrl: "https://f1forecasting.streamlit.app/",
    gitUrl: "https://github.com/srikarnadella/f1-raceforcaster",
  },
  {
    slug: "sp500-screener",
    title: "Level Screener",
    kind: "S&P 500 market screen",
    year: "2026",
    description:
      "Screens every S&P 500 stock for setups at the moving averages and Bollinger Bands that stock has actually respected, tested against a placebo baseline of fake levels, then re-ranks the results for the VIX regime.",
    result: "Publishes itself each weekday after the close, with breadth, credit spreads, sector strength and a forward-tested record of its own picks.",
    stack: "Python · pandas · yfinance · FRED · GitHub Pages",
    image: "/projects/sp500.png",
    imageAlt: "The S&P 500 level-respect screen showing the VIX regime, conviction score and breadth figures",
    liveUrl: "https://srikarnadella.github.io/sp500-screener/",
    gitUrl: "https://github.com/srikarnadella/sp500-screener",
  },
  {
    slug: "plutus",
    title: "Plutus",
    kind: "Personal finance platform",
    year: "2026",
    description:
      "Connect a bank once through Plaid and see where the money actually goes: categorized spending, detected subscriptions, flagged outliers, per-category budgets and savings goals. Built as a free replacement for the budgeting apps that charge a subscription.",
    result: "A Java Dropwizard API with a three-tier transaction cache (memory, Supabase, Plaid delta sync) keeps repeat loads fast; Supabase Auth keeps each user's data isolated.",
    stack: "React · TypeScript · Java · Dropwizard · Plaid · Supabase",
    image: "/projects/plutus.png",
    imageAlt: "Plutus landing page: Your money, finally clear",
    liveUrl: "https://plutus-sandbox-demo.vercel.app",
    gitUrl: "https://github.com/srikarnadella/PlutusSandboxDemo",
  },
  {
    slug: "thirteen-nil",
    title: "13–0",
    kind: "Football draft game",
    year: "2026",
    description:
      "Draft an all-time Champions League XI from the modern era, then simulate the campaign and see whether it can go unbeaten through all 13 games. A ScoutIQ mode hides the stats and makes you pick on judgement.",
    stack: "React · TypeScript · Vite",
    image: "/projects/thirteen.png",
    imageAlt: "13–0 start screen: Draft an all-time UCL XI from the modern era",
    liveUrl: "https://13-0-beta.vercel.app",
    gitUrl: "https://github.com/srikarnadella/13-0",
  },
  {
    slug: "djikstra",
    title: "D(J)ikstra",
    kind: "DJ setlist graph",
    year: "2026",
    description:
      "Treats a music library as a graph and uses Dijkstra's algorithm and clustering to find the smoothest harmonic route through 600+ songs, re-optimizing live as the set changes.",
    result: "Cut manual set planning for 10+ active DJs.",
    stack: "Python · NetworkX · scikit-learn · pandas · Streamlit",
    image: "/projects/djikstra.jpg",
    imageAlt: "D-i-Jkstra home: library stats, genre breakdown and Camelot key distribution",
    liveUrl: "https://djikstra.streamlit.app/",
    gitUrl: "https://github.com/srikarnadella/D-i-Jkstra",
  },
  {
    slug: "imessage-analytics",
    title: "iMessage Analytics",
    kind: "Local analytics dashboard",
    year: "2026",
    description:
      "Reads your own Messages history on macOS and turns it into a dashboard of who you talk to, when, and in what mood, with sentiment scored on-device by VADER. No external calls, no cloud, nothing leaves the machine.",
    stack: "Python · FastAPI · pandas · React · Recharts",
    figure: { big: "100k+", small: "Messages decoded and scored on your own Mac" },
    gitUrl: "https://github.com/srikarnadella/iMessageAnalytics",
  },
]

// Smaller and earlier repos, shown as a plain list.
export const ARCHIVE = [
  { title: "API Buckets", kind: "Spreadsheet to documented REST API", stack: "Java · Spring Boot · AWS", year: "2025", url: "https://github.com/srikarnadella/APIBuckets" },
  { title: "Pairs HUD", kind: "Pairs-trading charts, ratios and RSI", stack: "Python · Streamlit", year: "2026", url: "https://srikarnadella-tradingpairshud-streamlit-app-tlix0d.streamlit.app/" },
  { title: "AI 2048", kind: "Expectimax, Monte Carlo and deep RL compared", stack: "Python", year: "2025", url: "https://github.com/srikarnadella/AI2048" },
  { title: "Computer Vision", kind: "Live camera input and identity matching", stack: "Python", year: "2026", url: "https://github.com/srikarnadella/ComputerVisionProject" },
  { title: "Anomaly Detector", kind: "Outliers in any spreadsheet", stack: "Python · Streamlit", year: "2025", url: "https://anamolydetector.streamlit.app/" },
  { title: "Setlist Designer", kind: "Planning tool for DJ sets", stack: "Python · Streamlit", year: "2025", url: "https://setlistdesign.streamlit.app/" },
  { title: "NBA MVP Predictor", kind: "MVP odds from advanced stats", stack: "Python · scikit-learn", year: "2024", url: "https://github.com/srikarnadella/NBAMVPPredictor" },
  { title: "Housing Market", kind: "Market movement from macro data", stack: "Python · scikit-learn", year: "2024", url: "https://github.com/srikarnadella/HouseMarketAnalysis" },
  { title: "Spotify Wrapped HUD", kind: "Top artists, albums and genres", stack: "React · Spotify API", year: "2024", url: "https://spotify-wrapped-hud.vercel.app" },
  { title: "BlackJack ML", kind: "A model that plays the hand", stack: "Python", year: "2024", url: "https://github.com/srikarnadella/BlackJackML" },
  { title: "Caddy AI", kind: "Club and shot advice from yardage", stack: "JavaScript", year: "2024", url: "https://github.com/srikarnadella/CaddyAI" },
  { title: "Sort Visualizer", kind: "Sorting algorithms, animated", stack: "React", year: "2024", url: "https://sort-visualizer-fawn.vercel.app/" },
]

export const SUMMARY =
  "B.S. Computer Science at the University of Virginia, class of 2027, minoring in business at McIntire. AWS Certified Cloud Practitioner. Most at home in Java, Python, TypeScript, React, and Spring Boot, running on AWS, with Scikit-learn and PyTorch for the ML side."
