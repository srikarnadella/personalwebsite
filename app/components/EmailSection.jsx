"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#232D4B] to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute  -left-4 transform "></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <p className="text-[#ADB7BE] mb-2 max-w-md">
          {" "}
          Email: nadellasrikar@gmail.com
        </p>
        <p className="text-[#ADB7BE] mb-2 max-w-md">
          {" "}
          Email: nqk7sp@virginia.edu
        </p>
        <p className="text-[#ADB7BE] mb-2 max-w-md">
          {" "}
          Phone Number: +1 (571)-839-0504
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/srikarnadella">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/srikar-nadella/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
