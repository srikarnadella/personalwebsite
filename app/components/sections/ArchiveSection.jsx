import Image from "next/image"
import { ARCHIVE, HERO } from "../../data/site-content"
import RevealBlock from "./RevealBlock"

// The smaller projects: Eau Rouge behind the whole section, with the heading and the projects set
// left to right in its sky, newest first, so the car stays clear below them. On phones the list
// follows the photo on the page ground.
export default function ArchiveSection() {
  const items = [...ARCHIVE].sort((a, b) => b.year.localeCompare(a.year))

  return (
    <section id="archive" className="relative mt-24 overflow-clip md:mt-[200px] lg:min-h-[100svh] lg:px-[var(--margin)] lg:pt-16">
      <RevealBlock className="absolute inset-x-0 top-0 h-[56svh] min-h-[360px] lg:inset-0 lg:-bottom-[20%] lg:h-auto">
        <Image
          src="/images/eau-rouge.jpg"
          alt="A Ferrari Formula 1 car climbing Eau Rouge at Spa-Francorchamps under a grey sky"
          fill
          sizes="100vw"
          className="drift object-cover object-[25%_70%]"
        />
      </RevealBlock>

      <RevealBlock className="relative min-h-[max(56svh,360px)] px-[var(--margin)] pt-10 md:pt-16 lg:min-h-0 lg:px-0 lg:pt-0">
        <h2
          className="rv font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-[var(--bg)]"
          style={{ fontSize: "var(--t-heading)" }}
        >
          Smaller things
        </h2>
        <p className="rv mt-4 max-w-[44ch] text-[1.25rem] text-[var(--bg)]" style={{ "--i": 1 }}>
          Earlier experiments, games and tools, newest first. The code for all of them is on{" "}
          <a href={HERO.github} target="_blank" rel="noopener noreferrer" className="link" style={{ color: "inherit" }}>GitHub</a>.
        </p>
      </RevealBlock>

      <RevealBlock className="relative px-[var(--margin)] pb-6 pt-10 lg:px-0 lg:pb-0 lg:pt-8 lg:text-[var(--bg)]">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((item, i) => (
            <li key={item.title} className="rv-row" style={{ "--i": i }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="archive-row -mx-3 block px-3 py-2"
              >
                <span className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold">{item.title}</span>
                  <span className="arrow text-[var(--muted)] lg:text-inherit" aria-hidden="true">↗</span>
                </span>
                <span className="block text-[var(--muted)] lg:text-inherit lg:opacity-80" style={{ fontSize: "var(--t-small)" }}>
                  {item.year}, {item.kind}<span className="lg:hidden">, {item.stack}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </RevealBlock>
    </section>
  )
}
