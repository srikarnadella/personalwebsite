import Image from "next/image"
import { ARCHIVE, HERO } from "../../data/site-content"
import RevealBlock from "./RevealBlock"

// The smaller projects: Eau Rouge across the full width, the heading set in its sky, and the
// list below it as one column per year
export default function ArchiveSection() {
  const years = [...new Set(ARCHIVE.map((item) => item.year))].sort().reverse()

  return (
    <section id="archive" className="mt-24 md:mt-[200px]">
      <RevealBlock className="relative h-[56svh] min-h-[360px] overflow-clip md:h-[72svh]">
        <Image
          src="/images/eau-rouge.jpg"
          alt="A Ferrari Formula 1 car climbing Eau Rouge at Spa-Francorchamps under a grey sky"
          fill
          sizes="100vw"
          className="drift object-cover object-[50%_70%]"
        />
        <div className="relative px-[var(--margin)] pt-10 md:pt-16">
          <h2
            className="rv font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-[var(--bg)]"
            style={{ fontSize: "var(--t-heading)" }}
          >
            Smaller things
          </h2>
          <p className="rv mt-4 max-w-[44ch] text-[1.25rem] text-[var(--bg)]" style={{ "--i": 1 }}>
            Earlier experiments, games and tools, newest first.
          </p>
        </div>
      </RevealBlock>

      <RevealBlock className="grid grid-cols-1 gap-x-10 gap-y-12 px-[var(--margin)] pt-12 md:grid-cols-3 md:pt-16">
        {years.map((year, g) => (
          <div key={year}>
            <h3 className="rv tabular font-display font-extrabold leading-[1] tracking-[-0.02em]" style={{ fontSize: "var(--t-list)", "--i": g }}>
              {year}
            </h3>
            <ul className="mt-5 flex flex-col gap-1">
              {ARCHIVE.filter((item) => item.year === year).map((item, i) => (
                <li key={item.title} className="rv-row" style={{ "--i": g * 2 + i }}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="archive-row -mx-3 block px-3 py-2.5"
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-semibold">{item.title}</span>
                      <span className="arrow text-[var(--muted)]" aria-hidden="true">↗</span>
                    </span>
                    <span className="block text-[var(--muted)]" style={{ fontSize: "var(--t-small)" }}>
                      {item.kind}, {item.stack}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </RevealBlock>

      <RevealBlock className="px-[var(--margin)] pt-10">
        <p className="rv text-[var(--muted)]">
          The code for every one of these is public at{" "}
          <a href={HERO.github} target="_blank" rel="noopener noreferrer" className="link">github.com/srikarnadella</a>.
        </p>
      </RevealBlock>
    </section>
  )
}
