"use client";
import React, { useTransition, useState } from "react";
import NavigationLink from "./NavigationLink";
import Image from "next/image";
import TabUtil from "./TabUtil";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>Numpy, Pandas</li>
        <li>Scikit-Learn</li>
        <li>Tensorflow</li>
        <li>Git</li>
        <li>Matplotlib</li>
        <li>React</li>
        <li>React Native</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Virginia</li>
        <li>
          Computer Science in the College of Engineering and Applied Sciences
        </li>
        <li>Minor in Data Science</li>
        <li>Minor in General Business from the McIntire School of Commerce</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>J.P. Morgan Chase Investment Banking Job Simulation</li>
        <li>J.P. Morgan Chase Software Engineering Virtual Experience</li>
        <li>Wells Fargo Software Engineering Job Simulation</li>
        <li>PwC US Cyber Security ConsultingJob Simulation</li>
        <li>Mastercard Cybersecurity virtual experience program</li>
        <li>BCG GenAI Job Simulation</li>
        <li>BCG Strategy Consulting Job Simulation</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer Intern @ Pharaoh Analytics</li>
        <li>Software Intern @ NTConcepts</li>
        <li>Cloud Intern @ Navitas Business Consulting</li>
      </ul>
    ),
  },
];

const IMAGES = [
  "/images/AboutMe/ResearchDouble.png",
  "/images/AboutMe/SimRacing.png",
  "/images/AboutMe/PC.png",
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col">
          <Image
            src={IMAGES[currentImageIndex]}
            width={900}
            height={900}
            alt="Main Image"
          />
          <div className="flex mt-4 space-x-2">
            {IMAGES.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={100}
                height={100}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            I am from the Northern Virginia area, specifically Loudoun County.
            In my free time I love playing sports, specifically basketball,
            football, golf, and pickleball. I also like to go on runs and I am
            currently training to run a half-marathon. I am also a huge fan of
            motorsports and even sim race in tournaments from time to time.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabUtil
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabUtil>

            <TabUtil
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabUtil>

            <TabUtil
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabUtil>
            <TabUtil
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabUtil>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
