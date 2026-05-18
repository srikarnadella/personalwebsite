"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const COMMANDS = {
  bio: [
    "Hello my name is Srikar Nadella",
    "I am currently a student at the University of Virginia studying Computer Science, expecting to graduate in May 2027",
    "I am interested in software engineering, data science, and applied machine learning",
    "In additional I am also working towards a minor in General Business through the McIntire School of Commerce",
  ],
  skills: [
    "Languages: Java, Python, JavaScript, SQL",
    "Frameworks: Spring Boot, React, Node.js, REST APIs, Docker, MongoDB",
    "Cloud + data: AWS, Terraform, CI/CD, Kafka, Pandas, NumPy, TensorFlow, Sci-kit learn, and others",
  ],
  work: [
    "Incoming Software Engineering Intern @ Wells Fargo CCIBT (Summer 26)",
    "Data Science Intern @ Nightwing (Summer 25)",
    "\u2003 · Built a modular AI anomaly detection system and an AI cyber threat-hunting agent",
    "Software Engineering Intern @ NT Concepts (Summer 23) ",
    "\u2003 · Improved Java APIs, MongoDB queries, and React workflows",
  ],
  projects: [
    "Highlighted: Cloud CSV-to-API Platform, D(J)ikstra, Caddy AI, Trading Pairs HUD",
    "Also built tools across machine learning, finance, visualizers, analytics, and web apps",
    "More projects are listed below and on github.com/srikarnadella",
  ],
  contact: [
    "Personal email: nadellasrikar@gmail.com",
    "School email: nqk7sp@virginia.com",
    "Phone: (571) 839-0504",
    "LinkedIn: linkedin.com/in/srikar-nadella",
  ],
  links: [
    "Resume: https://drive.google.com/file/d/1QZtiyKflqjRNfoBSrReJkBYxEHJCtI4h/view?usp=sharing",
    "GitHub: https://github.com/srikarnadella",
  ],
  funfacts:[
    "I used to simulator race in tournaments (primarily GT Racing)",
    "I love spicy food (love eating reaper wings (Buffalo Wild Wings, Dave's Hot Chicken, etc)",
    "I have played nearly every IM sport at UVa for atleast one semester (cornhole is the last)"
  ],
  resume: [
    "Resume: https://drive.google.com/file/d/1QZtiyKflqjRNfoBSrReJkBYxEHJCtI4h/view?usp=sharing",
  ],
  github:[
    "GitHub: https://github.com/srikarnadella",
  ],
  help: [
    "Available commands:",
    "bio    skills    work    projects    contact    links    funfacts    resume    github    help    clear",
    "Tip: click any shortcut at the top of the terminal or type a command and press enter.",
  ],
};

const SHORTCUTS = ["bio", "skills", "work", "projects", "contact", "links", "funfacts","resume", "github", "help"];
const BOOT_LINES = [
  "hello, welcome to srikar-terminal",
  "booting up content",
  "ready.",
];

function normalizeCommand(rawValue) {
  return rawValue.trim().toLowerCase();
}

const AsciiArtHero = ({
  title = "srikar-terminal",
  summary = "Commands: bio, skills, work, projects, contact, links, funfacts, help, clear",
}) => {
  const [activeCommand, setActiveCommand] = useState("bio");
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [booted, setBooted] = useState(false);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, index) =>
      window.setTimeout(() => {
        setHistory((current) => [
          ...current,
          { type: "system", command: null, output: [line] },
        ]);
      }, 140 * (index + 1))
    );

    const readyTimer = window.setTimeout(() => {
      setBooted(true);
      setHistory((current) => [
        ...current,
        { type: "command", command: "bio", output: COMMANDS.bio },
      ]);
    }, 560);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(readyTimer);
    };
  }, []);

  useEffect(() => {
    if (!outputRef.current) {
      return;
    }

    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [history]);

  const shellPrompt = useMemo(
    () => `srikar@portfolio:~$ ${activeCommand}`,
    [activeCommand]
  );

  const runCommand = (rawValue) => {
    const command = normalizeCommand(rawValue);

    if (!command) {
      return;
    }

    if (command === "clear") {
      setHistory([]);
      setInputValue("");
      return;
    }

    if (COMMANDS[command]) {
      setActiveCommand(command);
      setHistory((current) => [
        ...current,
        { type: "command", command, output: COMMANDS[command] },
      ]);
      setInputValue("");
      return;
    }

    setHistory((current) => [
      ...current,
      {
        type: "command",
        command,
        output: ['command not found. type "help"'],
      },
    ]);
    setInputValue("");
  };

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[#E57200]/15 bg-[#040814] shadow-[0_30px_90px_rgba(2,8,23,0.6)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,114,0,0.12),transparent_28%),radial-gradient(circle_at_top_left,rgba(65,105,225,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/8 px-4 py-3 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400/85" />
          <span className="h-3 w-3 rounded-full bg-amber-300/85" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/85" />
        </div>
        <span>{title}</span>
      </div>

      <div className="relative z-10 flex items-center gap-3 border-b border-white/8 px-4 py-3 font-mono text-xs text-slate-500">
        <span className="text-[#E57200]">~/commands</span>
        <div className="flex flex-wrap gap-2">
          {SHORTCUTS.map((command) => (
            <button
              key={command}
              onClick={() => runCommand(command)}
              className="rounded border border-white/10 px-2 py-1 text-slate-300 transition hover:border-[#E57200]/30 hover:text-white"
            >
              {command}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={outputRef}
        className="relative z-10 flex-1 overflow-auto px-4 py-4 font-mono text-[15px] leading-8 text-slate-200"
      >
        <div className="mb-4 text-sm text-slate-500">{summary}</div>

        {history.map((entry, index) => (
          <div key={`${entry.command ?? "system"}-${index}`} className="mb-4">
            {entry.command ? (
              <div className="text-[#E57200]">{`srikar@portfolio:~$ ${entry.command}`}</div>
            ) : null}
            {entry.output.map((line) => (
              <div
                key={`${index}-${line}`}
                className={entry.type === "system" ? "text-slate-500" : "text-slate-200"}
              >
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      <form
        className="relative z-10 flex items-center gap-3 border-t border-white/8 px-4 py-4 font-mono text-[15px]"
        onSubmit={(event) => {
          event.preventDefault();
          runCommand(inputValue);
        }}
      >
        <span className="text-[#E57200]">srikar@portfolio:~$</span>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-600"
          placeholder='type "help"'
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />
        <span className="inline-block h-5 w-2 animate-pulse bg-[#E57200] align-middle" />
      </form>
    </div>
  );
};

export default AsciiArtHero;
