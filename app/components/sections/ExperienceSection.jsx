import { EXPERIENCE } from "../../data/site-content"
import RevealBlock from "./RevealBlock"

// Each company is a row of a results sheet: the name with its dates on one baseline, then the
// role on the left and what was built on the right.
function ExperienceEntry({ item }) {
  return (
    <RevealBlock as="article" className="bg-[var(--surface)] px-4 py-8 md:px-8 md:py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3
          className="rv font-display font-extrabold leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "var(--t-heading)" }}
        >
          {item.title}
        </h3>
        <p className="rv tabular text-[1.25rem] text-[var(--muted)]" style={{ "--i": 1 }}>{item.period}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="rv font-semibold" style={{ "--i": 1 }}>{item.role}</p>
          <p className="rv mt-1 text-[var(--muted)]" style={{ "--i": 1 }}>{item.location}</p>
          <p className="rv mt-4 text-[var(--muted)]" style={{ "--i": 2, fontSize: "var(--t-small)" }}>{item.stack}</p>
        </div>
        <div className="md:col-span-8">
          <p className="rv max-w-[44ch] leading-[1.4]" style={{ "--i": 2, fontSize: "var(--t-list)" }}>{item.teaser}</p>
          <p className="rv mt-5 max-w-[58ch]" style={{ "--i": 3 }}>{item.detail}</p>
        </div>
      </div>
    </RevealBlock>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-[var(--margin)] pt-24 md:pt-[160px]">
      <RevealBlock>
        <h2
          className="rv mb-12 md:mb-20 font-display font-extrabold leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "var(--t-heading)" }}
        >
          Where I&apos;ve worked
        </h2>
      </RevealBlock>
      <div className="flex flex-col gap-3">
        {EXPERIENCE.map((item) => (
          <ExperienceEntry key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
