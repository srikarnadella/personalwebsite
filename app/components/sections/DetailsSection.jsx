import Image from "next/image"
import { HERO, LEADERSHIP } from "../../data/site-content"
import RevealBlock from "./RevealBlock"

// A letter on a dark sheet, with a perforated tear-off strip that carries the email address
export default function DetailsSection() {
  const [hoohacks, gtp] = LEADERSHIP

  return (
    <section id="about" className="px-[10px] pt-24 md:px-[var(--margin)] md:pt-[200px]">
      <RevealBlock className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
        <article className="rv letter bg-[var(--surface)] text-[var(--ink)] md:col-span-7 lg:col-span-6 lg:col-start-2">
          <div className="px-6 pb-12 pt-12 md:px-[60px] md:pt-[60px]">
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
                teach AP Computer Science with the {gtp.title}. Earlier I did research on a Raspberry Pi car that
                drives off its own camera feed.
              </p>
              <p>
                <mark className="bg-[var(--accent)] px-1 text-[var(--accent-ink)]">I&apos;m looking for new grad software roles.</mark>{" "}
                If you&apos;re hiring, I&apos;d like to hear from you.
              </p>
            </div>
            <p className="mt-10 font-display text-[1.25rem] font-bold">Srikar Nadella</p>
            <p className="text-[var(--muted)]" style={{ fontSize: "var(--t-small)" }}>Software engineer, UVA</p>
          </div>

          {/* The tear-off strip, below a row of perforations */}
          <div className="perforation" aria-hidden="true" />
          <div className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-[60px]">
            <a href={`mailto:${HERO.email}?subject=Hello%20Srikar`} className="link font-semibold">{HERO.email}</a>
            <a href={`mailto:${HERO.email}?subject=Hello%20Srikar`} className="btn justify-center">
              Email me <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <figure className="rv md:col-span-5 lg:col-span-4" style={{ "--i": 1 }}>
          <div className="md:sticky md:top-28">
            <div className="rv-pic relative aspect-[5/3] overflow-hidden bg-[var(--surface)]">
              <Image
                src="/images/AboutMe/ResearchDouble.png"
                alt="A Raspberry Pi RC car with a red camera mount, and its live camera feed on a monitor in the lab"
                fill
                sizes="(min-width: 768px) 34vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[var(--muted)]" style={{ fontSize: "var(--t-small)" }}>
              The research car, and what it sees.
            </figcaption>
          </div>
        </figure>
      </RevealBlock>
    </section>
  )
}
