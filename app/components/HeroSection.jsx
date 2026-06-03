"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"

const ShaderAnimation = dynamic(
  () => import("./ShaderAnimation").then((m) => m.ShaderAnimation),
  { ssr: false }
)

export default function HeroSection() {
  const speedRef = useRef(1)

  const handleClick = () => {
    speedRef.current = 3
    setTimeout(() => { speedRef.current = 2 }, 300)
    setTimeout(() => { speedRef.current = 1 }, 700)
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Shader background */}
      <div className="absolute inset-0">
        <ShaderAnimation className="w-full h-full" speedRef={speedRef} />
      </div>

      {/* Centered dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06080f] to-transparent pointer-events-none" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl w-full">
        <h1
          className="font-display font-extrabold uppercase leading-[0.88] tracking-[-0.02em] text-white hero-name"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          Srikar<br />
          <span className="text-[#E57200]">Nadella</span>
        </h1>

        <p className="mt-6 text-sm text-slate-300 hero-role" style={{ letterSpacing: "0.01em" }}>
          SWE Intern @ Wells Fargo &nbsp;&middot;&nbsp; CS @ UVA
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 hero-stack">
          <a
            href="https://www.linkedin.com/in/srikar-nadella/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#E57200]/50 bg-[#E57200]/12 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E57200]/22"
            onClick={(e) => e.stopPropagation()}
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/187GaEsLjC-3vQGv14rtILkirUAjiiJJC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 z-10">
        <span className="font-mono text-[0.52rem] tracking-[0.35em] uppercase">scroll</span>
        <svg
          className="animate-scroll w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
