"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const MainPage = () => {
  return (
    <section id="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4169e1] to-[#E57200]">
              Hello, I&#39;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Srikar Nadella",
                1000,
                "a Second Year at the University of Virginia",
                1000,
                "a Computer Science Major",
                1000,
                "a Software Engineer",
                1000,
                "a Problem Solver",
                1000,
                "a Data Analyst",
                1000,
                "a Consultant",
                1000,
                "a Wahoo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm-text-lg mb-6 lg:text-xl">
            I am a second year at the University of Virginia in the School of
            Engineering and Applied Sciences where I major in Computer Science.
            I am also currently pursuing a minor in Data Science and a General
            Business from the McIntire School of Commerce. My career aspirations
            are to work in consulting or as a software engineer due to the wide
            variety of problems that I will be challenged with. Currently I am
            working on developing my Machine Learning/AI skills, data cleaning
            techniques, and technical writing and documentation. I am interested
            in a lot of different fields ranging from history to economics to
            computer science so I am eager to learn and tackle any sort tasks!
            You can find me working on one of my various projects whether it is
            my Golf Caddy app or a market analyzer. Reach out if you are
            recruiting for a role or want to work on something together!
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1dnFLN4RVyf2fQ8AbDazQCtkUEqZ-uhOx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#232D4B] via-[#4169e1] to-[#D9451F] hover:bg-slate-200 text-white">
                Open Resume
              </button>
            </a>
            <a
              href="https://docs.google.com/document/d/1Y4Q39NdfvmJHndFQL1hIeA1w4-uHetEWGG3wR3VOtKo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#232D4B] via-[#4169e1] to-[#D9451F] hover:bg-slate-200 text-white">
                Open Cover Letter
              </button>
            </a>
            <a
              href="https://github.com/srikarnadella"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#232D4B] via-[#4169e1] to-[#D9451F] hover:bg-[#D9451F] text-white">
                Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/srikar-nadella/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#232D4B] via-[#4169e1] to-[#D9451F] hover:bg-[#D9451F] text-white">
                Linkedin
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative p-1">
            <Image
              src="/images/pfp.png"
              alt="Profile picture"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
