"use client"

import { useRef } from "react"
import Image from "next/image"
import { GALLERY } from "../data/site-content"

// Photos of what I'm into. Arrows nudge it one photo at a time; touch and trackpad scroll it natively.
export default function PhotoCarousel() {
  const track = useRef(null)
  const go = (dir) => {
    const t = track.current
    const step = t.firstElementChild.getBoundingClientRect().width + 16
    t.scrollBy({ left: dir * step, behavior: "smooth" })
  }
  return (
    <div className="photos rv" style={{ "--i": 2 }}>
      <button type="button" className="arrow-btn prev" aria-label="Previous photo" onClick={() => go(-1)}>‹</button>
      <ul ref={track} className="photo-track" tabIndex={0} aria-label="Photos">
        {GALLERY.map(([src, alt, caption]) => (
          <li key={src} className="photo">
            <Image src={src} alt={alt} fill sizes="300px" className="object-cover" />
            <span className="cap">{caption}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="arrow-btn next" aria-label="Next photo" onClick={() => go(1)}>›</button>
    </div>
  )
}
