import { LEADERSHIP } from "../../data/site-content"

export default function LeadershipSection() {
  return (
    <div className="mt-10">
      <p className="text-[0.65rem] font-mono uppercase tracking-[0.28em] text-[#E57200]/70 mb-4">
        Also Leading
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {LEADERSHIP.map((item) => (
          <div
            key={item.id}
            className="rounded-lg p-4 bg-white/[0.03] border border-white/[0.08] transition-colors duration-300 hover:border-[#E57200]/30 hover:bg-[#E57200]/[0.04]"
          >
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <p className="font-display font-semibold text-sm text-white">{item.title}</p>
              <p className="font-mono text-[0.65rem] text-slate-600 whitespace-nowrap">{item.period}</p>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{item.role}</p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[0.65rem] font-mono text-slate-500 hover:text-slate-300 transition-colors"
            >
              {item.title.toLowerCase()} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
