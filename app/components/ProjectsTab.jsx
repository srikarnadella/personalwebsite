"use client";

import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";

const Projects = [
  {
    id: 1,
    title: "Machine Learning Models and Notes",
    description:
      "Templates for models along with notes and analysis on their use cases and constraints",
    image: "/images/projects/MachineLearning.png",
    tag: ["All", "Machine Learning", "Write-Ups", "Python", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/MachineLearningNotesandInsights",
  },
  {
    id: 2,
    title: "Facial Recognition",
    description:
      "Various Programs centered around facial recognition through datasets, live camera, and matching",
    image: "/images/projects/FacialRecognition.png",
    tag: ["All", "Machine Learning", "Python"],
    gitUrl:
      "https://github.com/srikarnadella/RandomStuff/tree/main/FacialRecognition",
  },
  {
    id: 3,
    title: "Kaggle",
    description: "Code used in Kaggle Competitions ",
    image: "/images/projects/Kaggle.png",
    tag: ["All", "In-Progress", "Machine Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/KaggleProjects",

    previewUrl: "https://www.kaggle.com/srikarnadella",
  },
  {
    id: 4,
    title: "Stock Analysis",
    description: "Programs that provide analysis and charts on given stocks",
    image: "/images/projects/StockAnalysis.png",
    tag: [
      "All",
      "Python",
      "Data Visualization",
      "Stocks",
      "Data-Analysis",
      "In-Progress",
    ],
    gitUrl:
      "https://github.com/srikarnadella/Financial-Modeling/tree/main/Analysis",
  },
  {
    id: 5,
    title: "Stock Simulations",
    description:
      "Different Machine Learning Models that aim to predict a stock's price and/or trajectory",
    image: "/images/projects/MonteCarlo.png",
    tag: [
      "All",
      "Machine Learning",
      "Python",
      "Data Visualization",
      "Stocks",
      "In-Progress",
    ],
    gitUrl:
      "https://github.com/srikarnadella/Financial-Modeling/tree/main/Simulations",
  },
  {
    id: 6,
    title: "Forage Job Simulations",
    description:
      "Completed a variety of job simulations for various companies requiring a multitude of skills",
    image: "/images/projects/Forage.png",
    tag: [
      "All",
      "Machine Learning",
      "Python",
      "Data Visualization",
      "Stocks",
      "Consultilng",
      "Write-Ups",
      "Data-Analysis",
      "In-Progress",
    ],
    gitUrl: "https://github.com/srikarnadella/Forage-Simulations",
  },
  {
    id: 7,
    title: "Pomodoro Website",
    description: "Created a website which is a study and motivation tool",
    image: "/images/projects/pomodoro.png",
    tag: ["All", "Websites"],
    gitUrl: "https://github.com/srikarnadella/pomodoro-website",

    previewUrl:
      "https://pomodoro-website-git-main-srikarnadellas-projects.vercel.app/",
  },
  {
    id: 8,
    title: "Email Spam Detector",
    description:
      "Machine Learning Model that vectorizes content and analyzes words to determine legitimacy",
    image: "/images/projects/emailspam.png",
    tag: ["All", "Python", "Machine Learning"],
    gitUrl: "https://github.com/srikarnadella/EmailSpamDetector",
  },
  {
    id: 9,
    title: "Heart Disease Prediction Model",
    description:
      "Machine Learning Model that predicts whether a patient may have heart disease or not",
    image: "/images/projects/heartdisease.png",
    tag: ["All", "Python", "Machine Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/HeartDiseasePredictorModel",
  },
  {
    id: 10,
    title: "To-Do List App",
    description: "To-do List app made in React native",
    image: "/images/projects/todolist.png",
    tag: ["All", "Apps"],
    gitUrl: "https://github.com/srikarnadella/To-Do-List-App",
  },
  {
    id: 11,
    title: "Yelp Cover App",
    description: "A cover of the Yelp app made in react native",
    image: "/images/projects/yelp.png",
    tag: ["All", "Apps"],
    gitUrl: "https://github.com/srikarnadella/yelp-app",
  },
  {
    id: 12,
    title: "Investment Banking Webscraper",
    description:
      "Web scraper that creates a rough DCF model of public companies",
    image: "/images/projects/ibwebscraper.png",
    tag: ["All", "Python", "Data-Analysis", "In-Progress"],
    gitUrl: "https://github.com/srikarnadella/IBWebScraper",
  },
  {
    id: 13,
    title: "Trading Pairs HUD",
    description: "Display of Trading Pairs to aid traders and provide analysis",
    image: "/images/projects/pairstrading.png",
    tag: [
      "All",
      "Python",
      "Data-Analysis",
      "Stocks",
      "In-Progress",
      "Apps",
      "Data Visualization",
    ],
    gitUrl: "https://github.com/srikarnadella/TradingPairsHUD",
  },
  {
    id: 14,
    title: "Caddy AI",
    description:
      "App that provides golfer advice on club to use given yardages and conditions",
    image: "/images/projects/caddy.png",
    tag: ["All", "In-Progress", "Apps", "Machine Learning"],
    gitUrl: "https://github.com/srikarnadella/CaddyAI",
  },
  {
    id: 15,
    title: "Credit Score Analysis",
    description: "Analysis on what makes a credit score",
    image: "/images/projects/creditscore.png",
    tag: ["All", "In-Progress", "Python", "Machine Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/CreditScoreAnalysis",
  },
  {
    id: 16,
    title: "Simple Web Games",
    description: "Website with a few traditional games",
    image: "/images/projects/tictactoe.png",
    tag: ["All", "In-Progress", "Websites"],
    gitUrl: "https://github.com/srikarnadella/WebGames",
    previewUrl: "https://web-games-black.vercel.app/",
  },
  {
    id: 17,
    title: "NBA MVP Predictor and Analysis",
    description:
      "Machine Learning Program that analyzes data starting from the 1990s to determine who should be the MVP",
    image: "/images/projects/mvp.png",
    tag: ["All", "Machine-Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/NBAMVPPredictor",
  },
  {
    id: 18,
    title: "Housing Market Analysis",
    description:
      "Machine Learning Program that uses Zillow and Fed data to predict the movement of the housing market",
    image: "/images/projects/housing.png",
    tag: ["All", "Machine-Learning", "Data-Analysis", "Data Visualization"],
    gitUrl: "https://github.com/srikarnadella/HouseMarketAnalysis",
  },
  {
    id: 19,
    title: "Machine Learning Model for BlackJack",
    description:
      "Uses various models such as a DQN and various statistcal models to help users win more rounds of blackjack",
    image: "/images/projects/blackjack.png",
    tag: ["All", "Machine-Learning"],
    gitUrl: "https://github.com/srikarnadella/BlackJackML",
  },
  {
    id: 20,
    title: "Sorting Algorithms Website/Visualizer",
    description:
      "Website that is a learning tool for various sorting algos. Displays visualizations as well as general information",
    image: "/images/projects/sorting.png",
    tag: ["All", "Websites"],
    gitUrl: "https://github.com/srikarnadella/Sort-Visualizer",
    previewUrl: "https://sort-visualizer-fawn.vercel.app/",
  },
  {
    id: 21,
    title: "Sentiment Analysis",
    description:
      "Machine Learning Model that uses VADER and RoBERTa to analyze text sentiment. Applied on live news headlines for inputed companies to guage impact on stock",
    image: "/images/projects/sentiment.png",
    tag: ["All", "Machine-Learning", "Data-Analysis", "Stocks"],
    gitUrl: "https://github.com/srikarnadella/SentimentAnalysis",
  },
];

const ProjectsTab = () => {
  const [tag, setTag] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc"); // State for sorting order

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Function to sort projects by id in ascending order
  const sortProjectsAsc = () => {
    const sortedProjects = [...Projects].sort((a, b) => a.id - b.id);
    return sortedProjects;
  };

  // Function to sort projects by id in descending order
  const sortProjectsDesc = () => {
    const sortedProjects = [...Projects].sort((a, b) => b.id - a.id);
    return sortedProjects;
  };

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Determine which sorting function to use based on sortOrder state
  const sortedProjects =
    sortOrder === "asc" ? sortProjectsAsc() : sortProjectsDesc();

  // Filter projects based on selected tag
  const filteredProjects = sortedProjects.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-0 md:mb-12">
          My Projects
        </h2>
        <h4 className="items-center text-center mt-0">
          Sorted from{" "}
          {sortOrder === "asc" ? "Oldest to Newest" : "Newest to Oldest"}
          <button
            className="ml-2 text-sm text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleSortOrder}
          >
            {sortOrder === "asc" ? "▼" : "▲"}
          </button>
        </h4>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="In-Progress"
            isSelected={tag === "In-Progress"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Machine Learning"
            isSelected={tag === "Machine Learning"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Data Visualization"
            isSelected={tag === "Data Visualization"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Data-Analysis"
            isSelected={tag === "Data-Analysis"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Write-Ups"
            isSelected={tag === "Write-Ups"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Stocks"
            isSelected={tag === "Stocks"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Websites"
            isSelected={tag === "Websites"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Apps"
            isSelected={tag === "Apps"}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tag={project.tag}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsTab;
