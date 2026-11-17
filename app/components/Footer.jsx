import { HERO } from "../data/site-content"

const links = [["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Work", "#projects"], ["Contact", "#contact"]]

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-name">{HERO.name}</p>
        <p className="footer-sub">CS and Business at UVA, looking for new grad software engineering roles.</p>
      </div>
      <nav aria-label="Footer">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a href={HERO.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
      </nav>
      <p className="footer-fine">© {new Date().getFullYear()} {HERO.name}. Built with Next.js. <a href="#hero">Back to top ↑</a></p>
    </footer>
  )
}
