import React from "react";
import NavigationLink from "./NavigationLink";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavigationBar = () => {
  return (
      <nav className="fixed left-0 right-0 top-0 z-20 border-b border-[#E57200]/15 bg-[#0a1120]/84 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-3 lg:px-8">
          <Image
            src="/images/transparentv.png"
            width={75}
            height={75}
            alt="Logo"
            className="h-auto w-[56px] opacity-90"
          />

          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="mt-0 flex rounded-full border border-[#E57200]/15 bg-white/5 px-4 py-3 text-base font-semibold md:flex-row md:space-x-8 md:p-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavigationLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default NavigationBar;
