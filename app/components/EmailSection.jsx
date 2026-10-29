import Image from "next/image"
import { HERO, LEADERSHIP } from "../data/site-content"

const rows = [
  ["Email", HERO.email, `mailto:${HERO.email}?subject=Hello%20Srikar`],
  ["LinkedIn", "srikar-nadella", HERO.linkedin],
  ["GitHub", "srikarnadella", HERO.github],
  ["Resume", "One page, PDF", HERO.resume],
]

// A letter laid on the Lawn at UVA, with a perforated tear-off strip that carries the ways to reach me
export default function EmailSection() {
  const [hoohacks, gtp] = LEADERSHIP

  return (
    <section id="contact" className="relative mt-24 md:mt-[200px] md:flex md:min-h-[100svh] md:items-start md:justify-end md:px-[var(--margin)] md:py-[60px]">
      <div className="relative h-[70svh] overflow-clip md:absolute md:inset-0 md:h-auto">
        <Image
          src="/images/rotunda-lawn.jpg"
          alt="The Rotunda at the head of the Lawn, University of Virginia, in early spring"
          fill
          sizes="100vw"
          className="drift object-cover object-bottom"
        />
      </div>

      <article className="letter relative mx-[10px] -mt-20 bg-[var(--surface)] text-[var(--ink)] md:mx-0 md:mt-0 md:w-[600px]">
        <div className="px-6 pb-10 pt-12 md:px-[52px] md:pt-[52px]">
          <h2
            className="font-display font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "var(--t-heading)" }}
          >
            Hi, I&apos;m Srikar.
          </h2>
          <div className="mt-8 flex max-w-[56ch] flex-col gap-5 leading-[1.6]">
            <p>
              I study computer science at the University of Virginia, class of 2027, with a minor in business at
              McIntire. I&apos;m an AWS Certified Cloud Practitioner, and most at home in Java, Python, TypeScript,
              React and Spring Boot.
            </p>
            <p>
              I sim race, and that is where the F1 projects start: Undercut reads the telemetry the game sends and
              talks back like a race engineer, and the Forecaster calls the order before the lights go out.
            </p>
            <p>
              This summer I built a distributed ingestion pipeline at Wells Fargo. The summer before, I was raising
              fraud-detection precision and automating threat triage at Nightwing.
            </p>
            <p>
              Outside the job I chair hacker experience at {hoohacks.title}, UVA&apos;s 700-person hackathon, and
              teach AP Computer Science with the {gtp.title}.
            </p>
            <p>
              <mark className="bg-[var(--accent)] px-1 text-[var(--accent-ink)]">I&apos;m looking for new grad software roles.</mark>{" "}
              If you&apos;re hiring, I&apos;d like to hear from you.
            </p>
          </div>
          <p className="mt-10 font-display text-[1.25rem] font-bold">Srikar Nadella</p>
          <p className="text-[var(--muted)]" style={{ fontSize: "var(--t-small)" }}>University of Virginia, Charlottesville</p>
        </div>

        {/* The tear-off strip, below a row of perforations */}
        <div className="perforation" aria-hidden="true" />
        <div className="px-6 pb-10 pt-6 md:px-[52px]">
          <dl className="flex flex-col gap-2">
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
          <a href={`mailto:${HERO.email}?subject=Hello%20Srikar`} className="btn mt-6 w-full justify-center">
            Hiring new grads? Email me <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </section>
  )
}
