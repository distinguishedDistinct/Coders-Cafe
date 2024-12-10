"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaAddressBook, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [refFooter, inViewFooter] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <div>
      <footer className="footer p-10 justify-around bg-gradient-to-r from-yellow-500 to-orange-600 pt-10 px-10">
        <motion.div
          ref={refFooter}
          initial={{ y: "80px", opacity: 0 }}
          animate={inViewFooter ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <nav className="w-96 ">
            <h3 className=" text-white mb-10 font-bold text-5xl mx-10">
              Coders Cafe
            </h3>
            <p className="mb-10 text-white">
              contact us and learn more about coders cafe. Brewing solutions,
              one cup and line of code at a time.
            </p>
            <div className="flex text-white text-lg">
              <FaPhone></FaPhone>
              <p className="text-white ml-5">+92 3245283434</p>
            </div>
          </nav>
        </motion.div>
        <motion.div
          ref={refFooter}
          initial={{ y: "80px", opacity: 0 }}
          animate={inViewFooter ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
        >
          <nav className="flex flex-col mx-10">
            <h3 className=" text-white mb-10 font-bold text-5xl">
              Quick Links
            </h3>
            <a
              href="https://resume-seven-eosin.vercel.app/"
              className="text-white mb-2"
            >
              About Me
            </a>
            <a
              href="https://resume-seven-eosin.vercel.app/contact"
              className="text-white"
            >
              Contact
            </a>
          </nav>
        </motion.div>
        <motion.div
          ref={refFooter}
          initial={{ y: "80px", opacity: 0 }}
          animate={inViewFooter ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 0.6, delay: 1 }}
        >
          <nav className="mx-10">
            <h3 className=" text-white text-5xl mb-5">Follow Me</h3>
            <div className="grid grid-flow-col gap-4 text-white">
              <a
                href="https://www.linkedin.com/in/mustafa-umar-674a0b256/"
                className="pb-10 hover:animate-bounce"
              >
                <FaLinkedin className="text-5xl  "></FaLinkedin>
              </a>
              <a
                href="https://resume-seven-eosin.vercel.app/"
                className="pb-10 hover:animate-bounce"
              >
                <FaAddressBook className="text-5xl hover:animate-bounce"></FaAddressBook>
              </a>
              <a
                href="https://github.com/distinguishedDistinct"
                className="pb-10 hover:animate-bounce"
              >
                <FaGithub className="text-5xl hover:animate-bounce"></FaGithub>
              </a>
            </div>
          </nav>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
