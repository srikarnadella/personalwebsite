import { PROJECTS } from "../../data/site-content"
import RevealBlock from "./RevealBlock"

// Hand-placed size/weight tiers — deliberately uneven, not a repeated card grid.
// Keyed by project title (not array position) so reordering/adding/removing a
// project in PROJECTS can't silently misassign one project's layout to another.
const DEFAULT_TILE = { span: "col-span-1 md:col-span-4", tier: "medium", minH: "min-h-[240px]" }

const TILES_BY_TITLE = {
  "Plutus": { span: "col-span-1 md:col-span-7", tier: "featured", minH: "min-h-[320px] md:min-h-[360px]" },
  "D(J)ikstra": { span: "col-span-1 md:col-span-5", tier: "large", minH: "min-h-[320px] md:min-h-[360px]" },
  "API Buckets": { span: "col-span-1 md:col-span-4", tier: "medium", minH: "min-h-[240px]" },
  "Trading Pairs HUD": { span: "col-span-1 md:col-span-4", tier: "medium", minH: "min-h-[240px]" },
  "Computer Vision": { span: "col-span-1 md:col-span-4", tier: "medium", minH: "min-h-[240px]" },
  "AI 2048": { span: "col-span-1 md:col-span-6", tier: "medium", minH: "min-h-[260px]" },
  "NBA MVP Predictor": { span: "col-span-1 md:col-span-6", tier: "medium", minH: "min-h-[260px]" },
  "Housing Market Analysis": { span: "col-span-1 md:col-span-12", tier: "wide", minH: "min-h-[160px]" },
}

const TITLE_SIZE = {
  featured: "text-2xl sm:text-3xl",
  large: "text-xl sm:text-2xl",
  medium: "text-lg sm:text-xl",
  wide: "text-xl sm:text-2xl",
}

function ProjectTile({ project, layout }) {
  const isFeatured = layout.tier === "featured"
  const isWide = layout.tier === "wide"

  return (
    <div
      className={`${layout.span} ${layout.minH} rounded-xl p-6 sm:p-7 flex ${
        isWide ? "flex-col sm:flex-row sm:items-center sm:justify-between gap-4" : "flex-col justify-between"
      }`}
      style={{
        background: isFeatured ? "rgba(229,114,0,0.08)" : "rgba(255,255,255,0.03)",
        border: isFeatured ? "1px solid rgba(229,114,0,0.35)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className={isWide ? "sm:max-w-md" : ""}>
        <h3 className={`font-display font-bold text-white leading-tight mb-2 ${TITLE_SIZE[layout.tier]}`}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
      </div>

      <div className={`flex items-center gap-4 ${isWide ? "shrink-0" : "flex-wrap justify-between gap-3 pt-4 mt-4 border-t border-white/5"}`}>
        <p className="text-[0.65rem] font-mono text-slate-500">{project.stack}</p>
        <div className="flex gap-4 shrink-0">
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#E57200]/70 hover:text-[#E57200] transition-colors"
          >
            GitHub →
          </a>
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <RevealBlock as="div" id="projects" className="mb-24">
      <div className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <h2
          className="font-display font-extrabold text-white leading-none"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          Selected Work
        </h2>
        <a
          href="https://github.com/srikarnadella?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-500 hover:text-[#E57200] transition-colors"
        >
          more on GitHub →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {PROJECTS.map((project) => (
          <ProjectTile
            key={project.title}
            project={project}
            layout={TILES_BY_TITLE[project.title] ?? DEFAULT_TILE}
          />
        ))}
      </div>
    </RevealBlock>
  )
}
