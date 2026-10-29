"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { PROJECTS } from "../../data/site-content"
import RevealBlock from "./RevealBlock"

// Height of the fixed navigation and of a folder tab: together they set where each folder sticks
const NAV = 64
const TAB = 44
// Folders take these tones in turn, and each tab takes its folder's tone
const TONES = ["var(--surface)", "var(--surface-2)", "var(--surface-3)"]

function ProjectLinks({ project }) {
  const links = [
    project.liveUrl && ["Live", project.liveUrl],
    project.gitUrl && ["Code", project.gitUrl],
    project.postUrl && ["Write-up", project.postUrl],
  ].filter(Boolean)
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {links.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="link">
          {label} <span className="arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

// A screenshot when there is one, otherwise the project's key number on a plain tile
function Cover({ project, sizes }) {
  return (
    <div className="card-pic rv-pic relative aspect-[4/3] bg-[var(--bg)] md:aspect-[16/10]">
      {project.image ? (
        <Image src={project.image} alt={project.imageAlt} fill sizes={sizes} className="object-cover object-left-top" />
      ) : (
        <div className="flex h-full flex-col justify-end bg-[var(--surface-3)] p-[7%]">
          <p
            className="font-display font-extrabold leading-[0.85] tracking-[-0.04em] text-[var(--accent)]"
            style={{ fontSize: "var(--t-display)" }}
          >
            {project.figure.big}
          </p>
          <p className="mt-4 max-w-[26ch] text-[1.25rem]">{project.figure.small}</p>
        </div>
      )}
    </div>
  )
}

// One project, filed as a folder. On phones and tablets it is led by its own tab; on desktop the drawer bar
// above the folders carries every tab, so the folder itself is a plain panel.
function Folder({ project, index, count, active }) {
  const tone = TONES[index % 3]
  return (
    <>
      {/* With the page's 72px scroll padding, this lands the folder just under the drawer bar (or its tab under the nav) */}
      <div id={project.slug} className="-scroll-mt-4 lg:-scroll-mt-8" />
      <RevealBlock
        as="article"
        className={`folder relative mt-14 md:mt-16 ${index === 0 ? "lg:mt-[44px]" : "lg:mt-[68px]"}`}
        style={{ "--tone": tone, "--n": index, "--count": count }}
        aria-labelledby={`${project.slug}-name`}
      >
        <a
          href={`#${project.slug}`}
          className={`folder-tab own ${active ? "is-active" : ""}`}
          tabIndex={-1}
        >
          <span id={`${project.slug}-name`} className="truncate">{project.title}</span>
        </a>

        <div className="grid grid-cols-1 content-start gap-x-10 gap-y-6 px-4 py-6 md:grid-cols-12 md:p-8">
          <div className="md:col-span-7">
            <a href={project.liveUrl || project.gitUrl} target="_blank" rel="noopener noreferrer" className="card rv block" tabIndex={-1}>
              <Cover project={project} sizes="(min-width: 768px) 55vw, 100vw" />
            </a>
            {project.gallery && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {project.gallery.map((shot, i) => (
                  <div key={shot.src} className="rv rv-pic relative aspect-[4/3] bg-[var(--bg)]" style={{ "--i": i + 1 }}>
                    <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 768px) 18vw, 33vw" className="object-cover object-left-top" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <h3
              className="rv font-display font-extrabold leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "var(--t-heading)", "--i": 1 }}
            >
              {project.title}
            </h3>
            <p className="rv mt-2 text-[var(--muted)]" style={{ "--i": 1 }}>
              {project.kind}, <span className="tabular">{project.year}</span>
            </p>
            <p className="rv mt-5" style={{ "--i": 2 }}>{project.description}</p>
            {project.result && (
              <p className="rv mt-5 bg-[var(--bg)] p-5" style={{ "--i": 3 }}>{project.result}</p>
            )}
            <p className="rv mt-5 text-[var(--muted)]" style={{ fontSize: "var(--t-small)", "--i": 4 }}>{project.stack}</p>
            <div className="rv mt-5" style={{ "--i": 4 }}><ProjectLinks project={project} /></div>
          </div>
        </div>
      </RevealBlock>
    </>
  )
}

export default function ProjectsSection() {
  const [active, setActive] = useState(0)

  // The open file is the last folder whose start has passed the upper third of the screen
  useEffect(() => {
    const markers = PROJECTS.map((p) => document.getElementById(p.slug))
    let frame = 0
    const update = () => {
      frame = 0
      let top = 0
      markers.forEach((m, i) => {
        if (m && m.getBoundingClientRect().top <= window.innerHeight / 3) top = i
      })
      setActive(top)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="projects" className="pt-24 md:px-[var(--margin)] md:pt-[160px]">
      <RevealBlock className="mb-6 flex px-4 md:px-0 items-end justify-between gap-6 md:mb-10">
        <h2
          className="rv font-display font-extrabold leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "var(--t-heading)" }}
        >
          Selected work
        </h2>
        <p className="rv tabular whitespace-nowrap text-[var(--muted)]" style={{ "--i": 1 }}>
          {PROJECTS.length} files
        </p>
      </RevealBlock>

      {/* The drawer: every file's tab, held under the navigation while the folders pass beneath */}
      <nav aria-label="Project files" className="sticky z-20 hidden bg-[var(--bg)] lg:block" style={{ top: NAV, height: TAB, marginBottom: -TAB }}>
        <ul className="relative h-full">
          {PROJECTS.map((p, i) => (
            <li key={p.slug} className="contents">
              <a
                href={`#${p.slug}`}
                className={`folder-tab ${i === active ? "is-active" : ""}`}
                style={{ "--n": i, "--count": PROJECTS.length, "--tone": TONES[i % 3], bottom: 0 }}
                aria-current={i === active ? "true" : undefined}
              >
                <span className="truncate">{p.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {PROJECTS.map((p, i) => (
          <Folder key={p.slug} project={p} index={i} count={PROJECTS.length} active={i === active} />
        ))}
      </div>
    </section>
  )
}
