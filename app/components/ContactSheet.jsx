"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { GALLERY } from "../data/site-content"

// Numbered contact sheet of photos I like. Click a plate to open it larger; Esc or a click closes it.
export default function ContactSheet() {
  const dlg = useRef(null)
  const [open, setOpen] = useState(null)
  // Open the dialog only after the new photo is rendered, so the previous one never flashes.
  useEffect(() => { if (open !== null && !dlg.current.open) dlg.current.showModal() }, [open])
  const step = (d) => setOpen((i) => (i + d + GALLERY.length) % GALLERY.length)
  const [src, alt, caption] = GALLERY[open ?? 0]
  return (
    <>
      <ul className="sheet rv" style={{ "--i": 2 }}>
        {GALLERY.map(([s, a, c, w, h], i) => (
          <li key={s} className="photo">
            <button type="button" className="plate" onClick={() => setOpen(i)} aria-label={`Open photo: ${c}`}>
              <Image src={s} alt={a} width={w} height={h} sizes="(min-width: 700px) 340px, 66vw" />
            </button>
            <p className="cap">{c}</p>
          </li>
        ))}
      </ul>
      <dialog
        ref={dlg}
        className="lightbox"
        onClick={(e) => e.target === dlg.current && dlg.current.close()}
        onClose={() => setOpen(null)}
        onKeyDown={(e) => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1) }}
      >
        <div className="lb">
          {open !== null && <Image key={src} src={src} alt={alt} width={1200} height={1600} sizes="90vw" />}
          <div className="lb-bar">
            <span className="lb-no">{String((open ?? 0) + 1).padStart(2, "0")}</span>
            <span className="lb-cap">{caption}</span>
            <span className="lb-count">{(open ?? 0) + 1} / {GALLERY.length}</span>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo">‹</button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo">›</button>
            <button type="button" onClick={() => dlg.current.close()} aria-label="Close">✕</button>
          </div>
        </div>
      </dialog>
    </>
  )
}
