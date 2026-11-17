"use client"

import { useState } from "react"
import Image from "next/image"
import Chips from "./Chips"
import { ARCHIVE, PROJECTS } from "../data/site-content"

const TABS = [...PROJECTS.map((p) => p.title), "More"]

function Project({ p }) {
  const links = [p.liveUrl && ["Live", p.liveUrl], p.gitUrl && ["Code", p.gitUrl], p.postUrl && ["Write-up", p.postUrl]].filter(Boolean)
  return (
    <>
      <div>
        <div className="shot"><Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 900px) 640px, 90vw" className="object-cover object-left-top" /></div>
        {p.gallery && (
          <div className="gallery">
            {p.gallery.map((g) => (
              <div key={g.src} className="shot"><Image src={g.src} alt={g.alt} fill sizes="200px" className="object-cover object-left-top" /></div>
            ))}
          </div>
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
