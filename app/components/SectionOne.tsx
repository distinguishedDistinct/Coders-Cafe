"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionOne = () => {
  // Add individual refs for each motion div
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref5, inView5] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div>
      <motion.div
        ref={ref1}
        className="div"
        initial={{ scale: 0 }} // Start with small scale
        animate={inView1 ? { scale: 1 } : {}} // Trigger animation on scroll
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <img
          src="Home/coffee-cup.png"
          alt="Coffee Cup"
          className="bg-cover mx-auto top-24 right-24 relative z-10 opacity-100"
          width={500}
        />
      </motion.div>

      <motion.div
        ref={ref2}
        className="rounded-full border-yellow-600 w-48 h-48 bg-cover left-1/2 top-32 right-0 absolute -z-0"
        style={{ borderWidth: "16px" }}
        initial={{ scale: 0 }}
        animate={inView2 ? { scale: 1 } : {}}
        transition={{
          duration: 2,
          delay: 1.1,
        }}
      ></motion.div>

      <motion.div
        ref={ref3}
        className="absolute top-0 leading-snug left-1/2 ml-20 text-black font-bold text-9xl opacity-10 tracking-wide -z-10"
        initial={{ x: "-100%", scale: 0 }}
        animate={inView3 ? { x: "0", scale: 1 } : {}}
        transition={{ stiffness: 100, delay: 0.3 }}
      >
        <div>
          <h1>
            Black <br /> Tumbler
          </h1>
        </div>
      </motion.div>

      <motion.div
        ref={ref4}
        className="absolute z-10 top-2/3 w-1/4 ml-10 bg-gradient-to-r from-gray-700 via-gray-800 pt-10 px-10"
        initial={{ y: "100%", scale: 0 }}
        animate={inView4 ? { y: "0", scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
      >
        <h3 className="mb-8">Black Lifestyle Lovers,</h3>
        <p className="opacity-70 leading-loose">
          Black Lifestyle Lovers: Embrace the bold and timeless allure of black,
          a color that symbolizes elegance, power, and sophistication. It's more
          than just a shade — it's a lifestyle that reflects confidence,
          ambition, and a passion for refined living.
        </p>
      </motion.div>

      <motion.div
        ref={ref5}
        className="absolute z-10 right-60 top-2/3 mt-16 w-1/4 bg-gradient-to-r from-gray-800 via-gray-700 pt-10 px-10"
        initial={{ y: "100%", scale: 0 }}
        animate={inView5 ? { y: "0", scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
      >
        <h3 className="mb-8">The Design,</h3>
        <p className="opacity-70 leading-loose">
          The Design: Where Elegance Meets Functionality. Elevate Your Style
          with Timeless Design.
        </p>
      </motion.div>

      <motion.div
        ref={ref6}
        className="absolute z-10 top-1/4 w-1/4 ml-32"
        initial={{ y: "-80%", scale: 0 }}
        animate={inView6 ? { y: "0", scale: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <h2 className="font-extrabold">
          Black <br /> Tumbler
        </h2>
      </motion.div>
    </div>
  );
};

export default SectionOne;
