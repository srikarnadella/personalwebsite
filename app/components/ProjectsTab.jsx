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
    tag: ["All", "Machine Learning", "Data-Analysis"],
    gitUrl: "https://github.com/srikarnadella/KaggleProjects",

    previewUrl: "/",
  },
  {
    id: 4,
    title: "Stock Analysis",
    description: "Programs that provide analysis and charts on given stocks",
    image: "/images/projects/StockAnalysis.png",
    tag: ["All", "Python", "Graphing", "Stocks", "Data-Analysis"],
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
    tag: ["All", "Machine Learning", "Python", "Graphing", "Stocks"],
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
    ],
    gitUrl: "https://github.com/srikarnadella/Forage-Simulations",

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
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
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
