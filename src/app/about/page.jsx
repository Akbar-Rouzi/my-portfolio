"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Brain from "@/components/svgs/brain";
import Experience from "@/components/experience";
import Summary from "@/components/summary";
import Skill from "@/components/skill";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-32 flex flex-col gap-20 md:gap-28 lg:gap-44 xl:gap-60 lg:w-2/3 lg:pr-0 xl:w-1/2 ">
          {/* SUMMARY CONTAINER */}
          <Summary />
          {/* SKILLS CONTAINER */}
          <Skill />
          {/* EXPERIENCE CONTAINER */}
          <Experience />
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 mr-2 mb-2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
