import Image from "next/image"
import { ABOUT, CERTIFICATION, EXPERIENCE, EMAILS, HERO, MOST_USED, SKILL_GROUPS } from "../data/site-content"
import RevealBlock from "./sections/RevealBlock"
import ProjectTabs from "./ProjectTabs"
import Chips from "./Chips"
import ContactSheet from "./ContactSheet"

const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2)

function Title({ children, sub }) {
  return (
    <header className="sec-head">
      <h2 className="sec-title">{children}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </header>
  )
}

export function About() {
  return (
    <section id="about" className="sec">
      <Title>About</Title>
      <RevealBlock className="about">
        <h3 className="about-h rv">Here is a <u>little</u> background</h3>
        <p className="justify rv" style={{ "--i": 1 }}>{ABOUT}</p>
        <ContactSheet />
      </RevealBlock>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="sec">
      <Title>Experience</Title>
      <RevealBlock className="jobs">
        {EXPERIENCE.map((e, i) => (
          <article key={e.id} className="job rv" style={{ "--i": i }}>
            <div className="logo" aria-hidden="true" style={e.logoBg ? { background: e.logoBg } : undefined}>{e.logo ? <Image src={e.logo} alt="" width={192} height={192} className={e.logoFill ? "h-full w-full object-cover" : "h-[68%] w-[68%] object-contain"} /> : initials(e.title)}</div>
            <div>
              <div className="job-top">
                <h3 className="job-role">{e.role}</h3>
                <p className="job-date">{e.period}</p>
              </div>
              <p className="job-co">{e.title} <span>{e.location}</span></p>
              <ul className="job-points">{(e.points || [e.teaser]).map((t) => <li key={t}>{t}</li>)}</ul>
              <Chips stack={e.stack} />
            </div>
          </article>
        ))}
      </RevealBlock>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="sec">
      <Title>Skills</Title>
      <RevealBlock className="skill-wrap">
        <div className="skill-cols">
          {SKILL_GROUPS.map(([group, items], i) => (
            <div key={group} className="skill-col rv" style={{ "--i": i }}>
              <h3>{group}</h3>
              <ul>
                {items.map(([name, icon]) => (
                  <li key={name} className={MOST_USED.includes(name) ? "top" : undefined}>
                    {icon ? <Image src={`/icons/${icon}.svg`} alt="" width={20} height={20} /> : <span className="no-icon" />}
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="cert rv" style={{ "--i": 5 }}>
          <span className="legend"><i /> Most used</span> &nbsp;·&nbsp; Certified: <b>{CERTIFICATION}</b>
        </p>
      </RevealBlock>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className="sec projects">
      <div className="band" aria-hidden="true" />
      <Title>Selected work</Title>
      <RevealBlock className="rv-wrap"><div className="rv"><ProjectTabs /></div></RevealBlock>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="sec contact-sec">
      <Title>Contact</Title>
      <RevealBlock className="contact">
        <h3 className="about-h rv">I&apos;d love to hear from you. <u>Let&apos;s talk.</u></h3>
        <ul className="emails">
          {EMAILS.map(([, address], i) => (
            <li key={address} className="rv" style={{ "--i": i + 1 }}><a href={`mailto:${address}`}>{address}</a></li>
          ))}
        </ul>
        <div className="rv" style={{ "--i": 3 }}><a href={HERO.resume} download className="btn">Download my résumé</a></div>
        <p className="contact-links rv" style={{ "--i": 4 }}>
          <a href={HERO.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={HERO.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <p className="rv" style={{ "--i": 5 }}>Charlottesville, Virginia</p>
      </RevealBlock>
    </section>
  )
}
