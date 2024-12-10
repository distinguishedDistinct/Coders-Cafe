"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionThree = () => {
  const [refForm, inViewForm] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="bg-white pb-20">
      <div className="flex justify-around flex-wrap ">
        <div className="w-1/4 mb-20 mt-20">
          <motion.div
            ref={refForm}
            initial={{ y: "80px", opacity: 0 }}
            animate={inViewForm ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <h2 className="text-6xl text-black text-center ">
              Buy our products from everywhere
            </h2>
          </motion.div>
          <form action="" className="mt-16 flex flex-col text-black">
            <motion.div
              ref={refForm}
              initial={{ y: "80px", opacity: 0 }}
              animate={inViewForm ? { y: 0, opacity: 1 } : {}}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
            >
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white border-2 border-gray-600 rounded-md p-1 mr-4"
                />
                <input
                  type="email "
                  placeholder="Email"
                  className="bg-white border-2 border-gray-500 rounded-md p-1"
                />
              </div>
            </motion.div>
            <motion.div
              ref={refForm}
              initial={{ opacity: 0 }}
              animate={inViewForm ? { y: 0, opacity: 1 } : {}}
              transition={{ type: "spring", duration: 1, delay: 1 }}
            >
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Country"
                  className="bg-white border-2 border-gray-600 rounded-md p-1 mr-4 my-5"
                />
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="bg-white border-2 border-gray-600 rounded-md p-1 my-5"
                />
              </div>
            </motion.div>
            <motion.div
              ref={refForm}
              initial={{ opacity: 0 }}
              animate={inViewForm ? { opacity: 1 } : {}}
              transition={{ type: "spring", duration: 1, delay: 1.5 }}
            >
              <button
                className="btn-ghost bg-yellow-600 text-white p-1 hover:animate-pulse hover:bg-yellow-600 rounded-lg w-full"
                type="submit"
              >
                Order Now
              </button>
            </motion.div>
          </form>
        </div>
        <Image
          alt="World Map"
          width={900}
          height={1600}
          src={"/Home/World-Map.png"}
        ></Image>
      </div>
    </div>
  );
};

export default SectionThree;
