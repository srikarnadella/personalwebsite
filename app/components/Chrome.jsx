import Image from "next/image"
import { HERO } from "../data/site-content"

// Always on screen: socials top left, contact and résumé top right, a way home at the bottom.
export default function Chrome() {
  const socials = [
    ["LinkedIn", HERO.linkedin, "/images/linkedin-icon.svg"],
    ["GitHub", HERO.github, "/images/github-icon.svg"],
  ]
  return (
    <>
      <div className="topbar" aria-hidden="true" />
      <div className="corner left">
        {socials.map(([label, href, src]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social">
            <Image src={src} alt="" width={44} height={44} />
          </a>
        ))}
      </div>
      <div className="corner right">
        <a href={HERO.resume} target="_blank" rel="noopener noreferrer" className="corner-link">Résumé</a>
        <a href="#contact" className="corner-link">
          <svg width="28" height="20" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="1" y="1" width="20" height="14" rx="1.5" /><path d="m1.5 2 9.5 7.5L20.5 2" /></svg>
          <span>Contact</span>
        </a>
      </div>
      <a href="#hero" className="home" aria-label="Back to top">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3L12 3Z" /></svg>
      </a>
    </>
  )
}
