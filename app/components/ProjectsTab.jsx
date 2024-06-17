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

    previewUrl: "/",
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

    previewUrl: "/",
  },
  {
    id: 3,
    title: "Kaggle",
    description: "Code used in Kaggle Competitions ",
    image: "/images/projects/Kaggle.png",
    tag: ["All", "In-Progress", "Machine Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/KaggleProjects",

    previewUrl: "/",
  },
  {
    id: 4,
    title: "Stock Analysis",
    description: "Programs that provide analysis and charts on given stocks",
    image: "/images/projects/StockAnalysis.png",
    tag: [
      "All",
      "Python",
      "Graphing",
      "Stocks",
      "Data-Analysis",
      "In-Progress",
    ],
    gitUrl:
      "https://github.com/srikarnadella/Financial-Modeling/tree/main/Analysis",

    previewUrl: "/",
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
      "Graphing",
      "Stocks",
      "In-Progress",
    ],
    gitUrl:
      "https://github.com/srikarnadella/Financial-Modeling/tree/main/Simulations",

    previewUrl: "/",
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
      "Graphing",
      "Stocks",
      "Consultilng",
      "Write-Ups",
      "Data-Analysis",
      "In-Progress",
    ],
    gitUrl: "https://github.com/srikarnadella/Forage-Simulations",

    previewUrl: "/",
  },
  {
    id: 7,
    title: "Pomodoro Website",
    description: "Created a website which is a study and motivation tool",
    image: "/images/projects/pomodoro.png",
    tag: ["All", "Websites"],
    gitUrl: "https://github.com/srikarnadella/pomodoro-website",

    previewUrl: "/",
  },
  {
    id: 8,
    title: "Email Spam Detector",
    description:
      "Machine Learning Model that vectorizes content and analyzes words to determine legitimacy",
    image: "/images/projects/emailspam.png",
    tag: ["All", "Python", "Machine Learning"],
    gitUrl: "https://github.com/srikarnadella/EmailSpamDetector",

    previewUrl: "/",
  },
  {
    id: 9,
    title: "Heart Disease Prediction Model",
    description:
      "Machine Learning Model that predicts whether a patient may have heart disease or not",
    image: "/images/projects/heartdisease.png",
    tag: ["All", "Python", "Machine Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/HeartDiseasePredictorModel",

    previewUrl: "/",
  },
  {
    id: 10,
    title: "To-Do List App",
    description: "To-do List app made in React native",
    image: "/images/projects/todolist.png",
    tag: ["All", "Apps"],
    gitUrl: "https://github.com/srikarnadella/To-Do-List-App",

    previewUrl: "/",
  },
  {
    id: 11,
    title: "Yelp Cover App",
    description: "A cover of the Yelp app made in react native",
    image: "/images/projects/yelp.png",
    tag: ["All", "Apps"],
    gitUrl: "https://github.com/srikarnadella/yelp-app",

    previewUrl: "/",
  },
  {
    id: 12,
    title: "Investment Banking Webscraper",
    description:
      "Web scraper that creates a rough DCF model of public companies",
    image: "/images/projects/ibwebscraper.png",
    tag: ["All", "Python", "Data-Analysis", "In-Progress"],
    gitUrl: "https://github.com/srikarnadella/IBWebScraper",

    previewUrl: "/",
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
      "Graphing",
    ],
    gitUrl: "https://github.com/srikarnadella/TradingPairsHUD",

    previewUrl: "/",
  },
  {
    id: 14,
    title: "Caddy AI",
    description:
      "App that provides golfer advice on club to use given yardages and conditions",
    image: "/images/projects/caddy.png",
    tag: ["All", "In-Progress", "Apps", "Machine Learning"],
    gitUrl: "https://github.com/srikarnadella/CaddyAI",

    previewUrl: "/",
  },
  {
    id: 15,
    title: "Credit Score Analysis",
    description: "Analysis on what makes a credit score",
    image: "/images/projects/creditscore.png",
    tag: ["All", "In-Progress", "Python", "Machine Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/CreditScoreAnalysis",
    previewUrl: "/",
  },
];

const ProjectsTab = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = Projects.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-0 md:mb-12">
          My Projects
        </h2>
        <h4 className="items-center text-center mt-0">
          Sorted from Oldest to Newest
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
            name="Graphing"
            isSelected={tag === "Graphing"}
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
