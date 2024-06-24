import React from "react";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import Image from "next/image";
import logoImage from "../../public/images/transparentv.png";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About Me",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Blog",
    path: "#blog",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavigationBar = () => {
  return (
    <section id="home">
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4">
          <Image
            src="/images/transparentv.png"
            width={75}
            height={75}
            alt="Logo"
          />

          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 text-xl font-semibold md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavigationLink
                    href={link.path}
                    title={link.title}
                  ></NavigationLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavigationBar;
