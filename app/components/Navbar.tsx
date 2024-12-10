"use client";
import { FaLinkedin, FaAddressBook, FaGithub } from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div initial={{ y: "-100%" }} animate={{ y: "0" }}>
      <div className="navbar pt-10 pl-20 pr-20">
        <div className="navbar-start mr-28">
          <a className="btn btn-ghost text-3xl">
            <span className=" text-yellow-600 ">Coders</span> Cafe.
          </a>
        </div>
        <div className="navbar-end mr-20">
          <div className="dropdown z-10">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn bg-transparent border-none"
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle hover:bg-black hover:opacity-40"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-15 w-15"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </div>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-gradient-to-b via-gray-800 text-base-content min-h-full w-80 p-4 pt-80 ">
                  {/* Sidebar content here */}
                  <div className="">
                    <li></li>
                    <li className="text-6xl left-1/3 w-24 mt-16">
                      <a href="https://www.linkedin.com/in/mustafa-umar-674a0b256/">
                        <FaLinkedin></FaLinkedin>
                      </a>
                    </li>
                    <li className="my-20 text-6xl left-1/3 w-24">
                      <a
                        href="https://resume-seven-eosin.vercel.app/"
                        aria-label="Send Email"
                      >
                        <FaAddressBook></FaAddressBook>
                      </a>
                    </li>
                    <li className="text-6xl left-1/3 w-24 mb-16">
                      <a href="https://github.com/distinguishedDistinct">
                        <FaGithub></FaGithub>
                      </a>
                    </li>
                    <li></li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            @media (max-width: 800px) {
              .NavName {
                // display: none;
              }
            }
          `}
        </style>
      </div>
    </motion.div>
  );
};

export default Navbar;
