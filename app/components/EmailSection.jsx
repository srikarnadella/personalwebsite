import Image from "next/image"
import { HERO } from "../data/site-content"

const rows = [
  ["Email", HERO.email, `mailto:${HERO.email}?subject=Hello%20Srikar`],
  ["LinkedIn", "srikar-nadella", HERO.linkedin],
  ["GitHub", "srikarnadella", HERO.github],
  ["Resume", "One page, PDF", HERO.resume],
]

// A visit card on the Lawn at UVA: where to find me and how to get in touch
export default function EmailSection() {
  return (
    <section id="contact" className="relative mt-24 md:mt-[200px] md:h-[100svh] md:min-h-[680px]">
      <div className="relative h-[70svh] overflow-clip md:absolute md:inset-0 md:h-auto">
        <Image
          src="/images/rotunda-lawn.jpg"
          alt="The Rotunda at the head of the Lawn, University of Virginia, in early spring"
          fill
          sizes="100vw"
          className="drift object-cover object-bottom"
        />
      </div>

      <div className="relative mx-4 -mt-20 bg-[var(--surface)] p-8 text-[var(--ink)] md:absolute md:right-[var(--margin)] md:top-[60px] md:mx-0 md:mt-0 md:w-[380px]">
        <h2 className="font-display font-light leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "var(--t-list)" }}>Write to me</h2>
        <p className="mt-4">
          University of Virginia
          <br />
          Charlottesville, Virginia
        </p>
        <dl className="mt-6 flex flex-col gap-2">
          {rows.map(([label, value, href]) => (
            <div key={label} className="flex items-baseline justify-between gap-4">
              <dt className="text-[var(--muted)]">{label}</dt>
              <dd className="min-w-0 truncate text-right">
                <a href={href} {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })} className="link">
                  {value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <a
          href={`mailto:${HERO.email}?subject=Hello%20Srikar`}
          className="btn -mx-8 -mb-8 mt-8 flex !min-h-[56px] justify-center md:!min-h-[52px]"
        >
          Hiring new grads? Email me <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
