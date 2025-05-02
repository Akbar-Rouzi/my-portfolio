"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import jobs from "@/utils/jobs";
import JobCard from "./jobCard";
import useIsMobile from "@/hooks/useIsMobile";

const Experience = () => {
  const experienceRef = useRef();
  const isInView = useInView(experienceRef, { margin: "-100px" });
  const isMobile = useIsMobile();

  const animateFromLeft = {
    initial: { x: "-300px" },
    animate: isInView ? { x: "0" } : {},
    transition: { delay: 0.2 },
  };

  if (isMobile) {
    // Mobile: render stacked JobCards only
    return (
      <div className="flex flex-col gap-6" ref={experienceRef}>
        <motion.h1 {...animateFromLeft} className="font-bold text-2xl">
          EXPERIENCE
        </motion.h1>
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} isMobile={isMobile} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-12 justify-center pb-48"
      ref={experienceRef}
    >
      {/* EXPERIENCE TITLE */}
      <motion.h1 {...animateFromLeft} className="font-bold text-2xl">
        EXPERIENCE
      </motion.h1>
      {/* Timeline */}
      <motion.div {...animateFromLeft} className="">
        {jobs.map((job, index) => (
          <div key={index} className=" flex h-52">
            {/* LEFT */}
            <div className="flex-1 pr-4">
              {index % 2 === 0 && <JobCard job={job} />}
            </div>
            {/* CENTER */}
            <div className="w-8 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="flex-1 pl-4">
              {index % 2 !== 0 && <JobCard job={job} />}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
