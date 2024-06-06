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
        <li>Working on it</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Intern @ NTConcepts</li>
        <li>Cloud Intern @ Navitas Business Consulting</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/ResearchDouble.png" width={900} height={900} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            I am from the Northern Virginia area, specifically Loudoun County.
            In my free time I love playing sports, specifically basketball,
            football, golf, and pickleball. I also like to go on runs as well
            and am currently training for a half-marathon. I am also a huge fan
            of motorsports and even sim race in tournaments from time to time.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabUtil
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabUtil>

            <TabUtil
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabUtil>

            <TabUtil
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabUtil>
            <TabUtil
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
