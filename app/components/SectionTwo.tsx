"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionTwo = () => {
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [refItem1, inViewItem1] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div className="bg-white pb-80">
      <motion.div
        ref={refTitle}
        initial={{ y: 1, scale: 0 }} // Start with small scale
        animate={inViewTitle ? { y: 0, scale: 1 } : {}} // Trigger animation on scroll
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <div className="flex justify-center">
          <h2 className="text-black font-bold mt-20 mr-36 mb-10 text-5xl">
            Fresh and <span className="text-yellow-600">Tasty</span>
          </h2>
        </div>
        <div className="flex justify-center text-center mr-48 mb-20 text-black">
          <p>
            Every sip delivers bold flavors, smooth textures, and a taste that
            lingers—crafted <br />
            for coffee lovers who crave freshness and perfection in every cup.
          </p>
        </div>
      </motion.div>
      <div className="flex justify-around">
        {/* Americano */}
        <motion.div
          ref={refItem1}
          initial={{ scale: 0, y: "10px" }}
          animate={inViewItem1 ? { y: "0px", scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="flex flex-col justify-center items-center" // Center align
        >
          <Image
            src="/Home/Americano.png"
            width={185}
            height={200}
            alt="Americano"
            className="mb-4" // Adds margin between the image and text
          />
          <h4 className="text-3xl text-yellow-600 font-bold text-center">
            Americano
          </h4>
          <p className="w-60 text-center">
            An Americano is a bold, smooth coffee with just the right strength
          </p>
        </motion.div>

        {/* Iced Coffee */}
        <motion.div
          ref={refItem1}
          initial={{ scale: 0, y: "10px" }}
          animate={inViewItem1 ? { y: "0px", scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="flex flex-col justify-center items-center" // Center align
        >
          <Image
            src="/Home/Ice-coffee.png"
            width={400}
            height={400}
            alt="Iced Coffee"
            className="mb-4" // Adds margin between the image and text
          />
          <h4 className="text-3xl text-yellow-600 font-bold text-center">
            Iced Coffee
          </h4>
          <p className="w-60 text-center">
            An Iced Coffee is a refreshing and chilled coffee with smooth flavors.
          </p>
        </motion.div>

        {/* Latte */}
        <motion.div
          ref={refItem1}
          initial={{ scale: 0, y: "10px" }}
          animate={inViewItem1 ? { y: "0px", scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
          className="flex flex-col justify-center items-center" // Center align
        >
          <Image
            src="/Home/Latte.png"
            width={420}
            height={420}
            alt="Latte"
            className="mb-16 pb-3" // Adds margin between the image and text
          />
          <h4 className="text-3xl text-yellow-600 font-bold text-center mr-7">
            Latte
          </h4>
          <p className="w-60 text-center mr-7">
            A Latte is a creamy, smooth coffee perfect for every coffee lover.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionTwo;
