"use client";

import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div className="mainContainer bg-transparent">
      <section className="sectionOne pb-16">
        <SectionOne />
      </section>
      <section className="sectionTwo">
        <div className="bg-white">
          <SectionTwo />
        </div>
      </section>
      <section className="sectionThree">
        <SectionThree />
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Page;
