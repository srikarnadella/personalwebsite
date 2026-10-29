"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO } from "../data/site-content";

// The back of the pass. It waits under the page, which slides up off it like a sheet; until the
// page's last edge comes near, it is hidden rather than lying covered.
const Footer = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const edge = document.getElementById("curtain-edge");
    if (!edge || typeof IntersectionObserver === "undefined") return setOpen(true);
    // Open once the page's bottom edge has risen past the headline, so the headline is never shown covered
    const headline = document.getElementById("footer-headline");
    const footer = headline?.closest("footer");
    const offset = headline && footer ? Math.round(headline.getBoundingClientRect().top - footer.getBoundingClientRect().top) : 0;
    const observer = new IntersectionObserver(([entry]) => {
      setOpen(entry.isIntersecting || entry.boundingClientRect.top < 0);
    }, { rootMargin: `0px 0px -${offset}px 0px` });
    observer.observe(edge);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`curtain sticky bottom-0 z-0 px-[10px] pb-6 pt-16 md:px-[var(--margin)] md:pt-24 ${open ? "is-open" : ""}`}>
      <div className="scallop-top mx-auto grid max-w-[1180px] grid-cols-1 gap-10 bg-[var(--surface)] px-6 pb-8 pt-14 text-[var(--ink)] md:grid-cols-2 md:px-14 md:pt-16">
        <div>
          <p id="footer-headline" className="font-display font-extrabold leading-[1] tracking-[-0.02em]" style={{ fontSize: "var(--t-list)" }}>Thanks for reading.</p>
          <p className="mt-4 max-w-[38ch]">
            Every project here is one I built myself. If one of them is close to what your team works on, I&apos;d
            like to talk about it.
          </p>
        </div>

        <div className="relative">
          <div className="absolute right-0 top-0 w-16 bg-[var(--surface-3)] p-1.5 md:w-[88px]">
            <div className="relative aspect-[3/4]">
              <Image src="/images/rotunda-lawn.jpg" alt="" fill sizes="88px" className="object-cover" />
            </div>
          </div>
          <ul className="flex flex-col gap-3 pr-24 md:pr-28">
            <li><a href={`mailto:${HERO.email}`} className="link">{HERO.email}</a></li>
            <li><a href={HERO.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a></li>
            <li><a href={HERO.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a></li>
            <li><a href={HERO.resume} target="_blank" rel="noopener noreferrer" className="link">Resume</a></li>
          </ul>
        </div>

        <p className="text-center text-[var(--muted)] md:col-span-2" style={{ fontSize: "var(--t-small)" }}>
          © 2026 Srikar Nadella. Built with Next.js and Three.js. Rotunda photograph by{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:The_Rotunda_and_Lawn_University_of_Virginia_Charlottesville_VA_March_2011.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Phil Roeder
          </a>
          , CC BY 2.0; Eau Rouge photograph by{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Massa_Eau_Rouge_Spa_2008.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Mark McArdle
          </a>
          , CC BY-SA 2.0; both via Wikimedia Commons.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
