"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { HERO } from "../data/site-content"

const ShaderAnimation = dynamic(
  () => import("./ShaderAnimation").then((m) => m.ShaderAnimation),
  { ssr: false }
)

// The first screen is the live shader with a paddock pass lying at its foot.
export default function HeroSection() {
  const pulseRef = useRef(null)

  // A click on the field around the pass sends a swell out from the cursor
  const handleClick = (e) => {
    pulseRef.current = { x: e.clientX, y: e.clientY, t: performance.now() }
  }

  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden px-3 pb-6 md:px-[var(--margin)] md:pb-[8svh]"
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        <ShaderAnimation className="h-full w-full" pulseRef={pulseRef} />
      </div>

      {/* The pass: credential-sized, at the foot of the screen, so the shader keeps the room */}
      <div
        className="pass hero-in relative w-full max-w-[660px] bg-[var(--surface)] px-7 pb-8 pt-12 md:px-12 md:pb-12 md:pt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lanyard slot */}
        <span aria-hidden="true" className="absolute left-1/2 top-4 h-2.5 w-14 -translate-x-1/2 rounded-full bg-[var(--bg)]" />

        <h1
          className="font-display font-extrabold leading-[0.92] tracking-[-0.035em]"
          style={{ fontSize: "var(--t-display)" }}
        >
          <span className="line"><span className="line-in" style={{ "--i": 1 }}>Srikar</span></span>
          <span className="line"><span className="line-in" style={{ "--i": 2 }}>Nadella</span></span>
        </h1>

        <p className="hero-in mt-5 max-w-[44ch] text-[1.25rem] leading-[1.45]" style={{ "--i": 3 }}>
          {HERO.role}
        </p>

        <p className="hero-in mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--muted)]" style={{ "--i": 4, fontSize: "var(--t-small)" }}>
          <span>University of Virginia, class of 2027</span>
          <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-[var(--accent)]" />
          <span>Charlottesville, Virginia</span>
        </p>

        <div className="hero-in mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 md:gap-x-7" style={{ "--i": 5 }}>
          <a href="#projects" className="btn w-full justify-center sm:w-auto">
            See the work <span className="arrow" aria-hidden="true">↓</span>
          </a>
          <a href={HERO.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
          <a href={HERO.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        </div>
      </div>
    </section>
  )
}
