export const HERO = {
  name: "Srikar Nadella",
  role: "I'm a Computer Science and Business student at the University of Virginia. I like building software around the things I love, from F1 telemetry to financial data, and I'm looking for new grad software engineering roles.",
  linkedin: "https://www.linkedin.com/in/srikar-nadella/",
  resume: "/Srikar_Nadella_Resume.pdf",
  github: "https://github.com/srikarnadella",
  email: "nadellasrikar@gmail.com",
}

export const EXPERIENCE = [
  { id: "wf", logo: "/logos/wellsfargo.svg", title: "Wells Fargo", role: "Software Engineering Intern", period: "Jun 2026 - Aug 2026", location: "Charlotte, NC", points: ["Built out the data backend for a dashboard and trading tool used by traders, pulling and organizing data from a variety of sources.", "Fixed recurring dev issues, like failing file uploads, so the team stopped fixing them by hand."], stack: "Java · Spring Boot · Distributed Systems" },
  { id: "nw", logo: "/logos/nightwing.png", title: "Nightwing", role: "Data Science Intern", period: "Jun 2025 - Aug 2025", location: "Dulles, VA", points: ["Built an anomaly detection tool that catches fraud and cleans up messy data.", "Built an AI security triage tool that helps analysts respond to incidents faster utilizing CI/CD pipelines and robotic automation."], stack: "Python · AWS SageMaker · LLaMA · Power BI" },
  { id: "ntc", logo: "/logos/ntconcepts.png", logoBg: "#1f3a52", title: "NT Concepts", role: "Software Engineering Intern", period: "Jul 2023 - Aug 2023", location: "Tysons, VA", teaser: "Fixed bugs and sped up the web app and APIs behind a reporting product.", stack: "Java · Spring Boot · MongoDB · React" },
  { id: "hoohacks", logo: "/logos/hoohacks.svg", title: "HooHacks", role: "Hacker Experience Committee Chair", period: "Sep 2023 - Present", location: "Charlottesville, VA", teaser: "Run the hacker experience for UVA's hackathon, from workshops to sponsors and mentors.", stack: "Leadership · Operations · Workshops" },
  { id: "gtp", logo: "/logos/gtp.png", logoFill: true, title: "Global Teaching Project", role: "Teaching Assistant", period: "Jun 2024 - Present", location: "Remote", teaser: "Teach AP Computer Science with a custom curriculum for under-resourced students.", stack: "Teaching · Curriculum · Python" },
]

export const EMAILS = [["Email", HERO.email]] // add more as [label, address], e.g. ["School", "you@virginia.edu"]

export const GALLERY = [
  ["/images/gallery/sim-rig.jpg", "My sim racing rig, mid-lap in an F1 car with Undercut running on the laptop", "Sim racing"],
  ["/images/gallery/rotunda.jpg", "The Rotunda at UVA through the trees", "UVA"],
  ["/images/gallery/golf.jpg", "Two friends on a golf green", "Golf"],
  ["/images/gallery/hiking.jpg", "A rocky trail through spring woods", "Hiking"],
  ["/images/gallery/big-ben.jpg", "Big Ben against a pink and orange sunset", "Big Ben"],
  ["/images/gallery/london.jpg", "Stone rooftops and chimneys under a blue evening sky", "Evening in London"],
  ["/images/gallery/thames.jpg", "A bridge over the Thames with a red boat passing", "The Thames"],
  ["/images/gallery/street.jpg", "A colorful sloping street with cafes and parked cars", "Out exploring"],
]

export const PHOTO = "/images/profile.png"

export const TAGLINES = ["I like building things", "I like F1 telemetry", "I like sim racing", "I like turning data into apps", "I like teaching AP CS"]

export const ABOUT = "Hey, I'm Srikar, a 4th year CS and Business student at UVA. Regarding my work, I typically work on and love backend work and data as well, AI and machine learning work that comes with the data. I have grown to love these as most of my projects start with something I'm already into, like F1 and sim racing, and I build off of them into tools and products I use in my day-to-day life. What I am currently working on is Undercut, the race engineer I built for F1 26. Outside of class I help run HooHacks and teach AP CS. I'm looking for new grad software engineering roles, so if you've got one, say hi."

// [name, icon file in /public/icons or null]. Names in MOST_USED get the marker.
export const SKILL_GROUPS = [
  ["Languages", [["Java", "java"], ["Python", "python"], ["JavaScript", "javascript"], ["TypeScript", "typescript"], ["SQL", null]]],
  ["Frameworks & Tools", [["Spring Boot", "spring"], ["React", "react"], ["Node.js", "nodejs"], ["RESTful APIs", null], ["OpenAPI", null], ["JUnit", "junit"], ["Git", "git"], ["Agile/Scrum", null]]],
  ["Cloud & DevOps", [["AWS", "aws"], ["Terraform", "terraform"], ["Docker", "docker"], ["CI/CD", null], ["Linux", "linux"]]],
  ["AI/ML & Data", [["Scikit-learn", "scikitlearn"], ["PyTorch", "pytorch"], ["TensorFlow", "tensorflow"], ["Pandas", "pandas"], ["NumPy", "numpy"], ["Power BI", null], ["MongoDB", "mongodb"]]],
  ["AI Dev Tools", [["GitHub Copilot", "github"], ["Cursor", null], ["Claude Code", null], ["ChatGPT Codex", null]]],
]

export const MOST_USED = ["Java", "Python", "TypeScript", "Spring Boot", "React", "AWS", "PyTorch", "Scikit-learn"]

export const CERTIFICATION = "AWS Certified Cloud Practitioner"

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
]

// Smaller and earlier repos, shown as a plain list.
export const ARCHIVE = [
  { title: "iMessage Analytics", kind: "Who you text, when and in what mood, on-device", stack: "Python · FastAPI · React", year: "2026", url: "https://github.com/srikarnadella/iMessageAnalytics" },
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

