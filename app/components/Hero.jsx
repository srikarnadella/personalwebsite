"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { HERO, PHOTO, TAGLINES } from "../data/site-content"

const links = [["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Projects", "#projects"]]

// Types each line out, holds it, deletes it, and moves to the next. Reduced motion keeps the first one still.
function Typed() {
  const [text, setText] = useState("")
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setText(TAGLINES[0])
    let i = 0, n = 0, deleting = false, timer
    const tick = () => {
      const word = TAGLINES[i]
      n += deleting ? -1 : 1
      setText(word.slice(0, n))
      let wait = deleting ? 35 : 80
      if (!deleting && n === word.length) { deleting = true; wait = 1500 }
      else if (deleting && n === 0) { deleting = false; i = (i + 1) % TAGLINES.length; wait = 350 }
      timer = setTimeout(tick, wait)
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <span className="sr-only">{TAGLINES.join(", ")}</span>
      <span aria-hidden="true">{text}<span className="caret" /></span>
    </>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="sec hero">
      {/* Still rings around the photo */}
      <div className="rings" aria-hidden="true">
        {[300, 440, 600, 780].map((d) => <span key={d} className="still" style={{ "--d": `${d}px` }} />)}
      </div>
      <div className="hero-core">
        <div className="avatar">
          {PHOTO ? <Image src={PHOTO} alt="" fill sizes="120px" className="object-cover" priority /> : <span>SN</span>}
        </div>
        <h1 className="name">{HERO.name}</h1>
        <p className="lead">Software engineer and CS student at UVA.</p>
        <p className="tagline"><Typed /></p>
        <a href="#projects" className="btn">See my work <span aria-hidden="true">↓</span></a>
        <nav className="hero-nav" aria-label="Sections">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
    </section>
  )
}
