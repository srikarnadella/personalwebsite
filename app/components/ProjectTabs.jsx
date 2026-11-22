"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Chips from "./Chips"
import { ARCHIVE, PROJECTS } from "../data/site-content"

const TABS = [...PROJECTS.map((p) => p.title), "More"]

function Project({ p }) {
  const dlg = useRef(null)
  const [open, setOpen] = useState(null)
  // Open only after the photo is rendered, so the previous one never flashes.
  useEffect(() => { if (open !== null && !dlg.current.open) dlg.current.showModal() }, [open])
  const g = p.gallery?.[open ?? 0]
  const links = [p.liveUrl && ["Live", p.liveUrl], p.gitUrl && ["Code", p.gitUrl], p.postUrl && ["Write-up", p.postUrl]].filter(Boolean)
  return (
    <>
      <div>
        {(() => {
          const shot = <div className="shot"><Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 900px) 640px, 90vw" className="object-cover object-left-top" /></div>
          return p.liveUrl ? <a className="shot-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title} live`}>{shot}</a> : shot
        })()}
        {p.gallery && (
          <div className="gallery">
            {p.gallery.map((g, n) => (
              <button key={g.src} type="button" className="shot shot-btn" onClick={() => setOpen(n)} aria-label={`Enlarge: ${g.caption || g.alt}`}>
                <Image src={g.src} alt={g.alt} fill sizes="200px" className="object-cover object-left-top" />
              </button>
            ))}
          </div>
        )}
        {p.gallery && (
          <dialog ref={dlg} className="lightbox" onClose={() => setOpen(null)} onClick={(e) => e.target === dlg.current && dlg.current.close()}>
            <div className="lb">
              {open !== null && <Image key={g.src} src={g.src} alt={g.alt} width={1440} height={900} sizes="96vw" />}
              <div className="lb-bar">
                <span className="lb-cap">{g.caption || g.alt}</span>
                <button type="button" onClick={() => dlg.current.close()} aria-label="Close">✕</button>
              </div>
            </div>
          </dialog>
        )}
      </div>
      <div>
        <h3>{p.title}</h3>
        <p className="kind">{p.kind}, {p.year}</p>
        <Chips stack={p.stack} />
        <p className="body">{p.description}</p>
        {p.result && <p className="result">{p.result}</p>}
        <p className="proj-links">
          {links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}
        </p>
      </div>
    </>
  )
}

// Headers across the top; picking one swaps the box beneath it to that project.
export default function ProjectTabs() {
  const [i, setI] = useState(0)
  const onKey = (e) => {
    if (e.key === "ArrowRight") setI((i + 1) % TABS.length)
    if (e.key === "ArrowLeft") setI((i + TABS.length - 1) % TABS.length)
  }
  return (
    <div className="work">
      <div className="tabs" role="tablist" aria-label="Selected work" onKeyDown={onKey}>
        {TABS.map((t, n) => (
          <button key={t} id={`tab-${n}`} role="tab" aria-selected={i === n} aria-controls="work-panel" tabIndex={i === n ? 0 : -1} className="tab" onClick={() => setI(n)}>{t}</button>
        ))}
      </div>
      <div id="work-panel" role="tabpanel" aria-labelledby={`tab-${i}`} className="panel">
        {i < PROJECTS.length ? <Project p={PROJECTS[i]} /> : (
          <div style={{ gridColumn: "1 / -1" }}>
            <h3>And a few more</h3>
            <ul className="more-list" style={{ marginTop: 18 }}>
              {ARCHIVE.map((a) => (
                <li key={a.title}><a href={a.url} target="_blank" rel="noopener noreferrer"><b>{a.title}</b> <span>{a.kind}</span></a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
