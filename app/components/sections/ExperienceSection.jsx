"use client"

import { useState } from "react"
import { EXPERIENCE } from "../../data/site-content"
import LeadershipSection from "./LeadershipSection"
import RevealBlock from "./RevealBlock"

function ExperienceEntry({ item, index }) {
  const [expanded, setExpanded] = useState(false)
  const isFeatured = index === 0
  const reversed = index % 2 === 1
  const contentId = `experience-${item.id}-detail`

  return (
    <div
      className={`flex flex-col md:flex-row ${reversed ? "md:flex-row-reverse" : ""} gap-6 md:gap-10 rounded-xl p-6 sm:p-8`}
      style={{
        background: isFeatured ? "rgba(229,114,0,0.08)" : "rgba(255,255,255,0.03)",
        border: isFeatured ? "1px solid rgba(229,114,0,0.35)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="md:w-64 shrink-0">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E57200]">{item.role}</span>
        <h3 className="text-2xl font-display font-bold text-white mt-1 mb-1">{item.title}</h3>
        <p className="text-xs font-mono text-slate-500">{item.period}</p>
        <p className="text-xs font-mono text-slate-600 mt-1">{item.location}</p>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm leading-relaxed text-slate-300 max-w-lg">{item.teaser}</p>

        <div id={contentId} className={`narrative-collapse ${expanded ? "is-open" : ""}`}>
          <div>
            <p className="text-sm leading-relaxed text-slate-300 max-w-lg pt-3">{item.detail}</p>
          </div>
        </div>

        {item.detail && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={contentId}
            className="mt-3 text-xs font-mono text-[#E57200]/70 hover:text-[#E57200] transition-colors"
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-white/5">
          <span className="text-[0.68rem] font-mono text-slate-500">{item.stack}</span>
          {item.link !== "#" && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#E57200]/60 hover:text-[#E57200] transition-colors"
            >
              website →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <RevealBlock as="div" id="tiles" className="mb-28">
      <h2
        className="font-display font-extrabold text-white mb-8 leading-none"
        style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
      >
        Where I&apos;ve Worked
      </h2>
      <div className="flex flex-col gap-5">
        {EXPERIENCE.map((item, index) => (
          <ExperienceEntry key={item.id} item={item} index={index} />
        ))}
      </div>
      <LeadershipSection />
    </RevealBlock>
  )
}
