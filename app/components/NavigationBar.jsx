import Image from "next/image";
import { HERO } from "../data/site-content";

const navLinks = [
  { title: "Work", path: "#projects" },
  { title: "Experience", path: "#experience" },
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" },
];

const NavigationBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 bg-[var(--bg)]">
      <div className="flex h-16 items-center justify-between gap-6 px-[var(--margin)]">
        <a href="#home" className="flex items-center gap-3 font-display font-bold text-[var(--ink)]">
          <Image src="/images/transparentv.png" width={75} height={75} alt="" className="h-auto w-9" />
          <span className="hidden sm:inline">Srikar Nadella</span>
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a href="#projects" className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] md:hidden">
            Work
          </a>
          <a href={HERO.resume} target="_blank" rel="noopener noreferrer" className="btn !min-h-[40px] !px-4">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
