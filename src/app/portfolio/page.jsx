"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import projects from "@/utils/projects";
import Dialog from "@/components/dialog";
import WavyText from "@/components/wavyText";
import Scroll from "@/components/svgs/scroll";
import FadingText from "@/components/fadingText";

const PorfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-center text-4xl lg:text-6xl xl:text-8xl">
          <WavyText wavyText=" My Works" className="justify-center" />
          <Scroll width={100} height={200} y={60} duration={6} />
          <motion.span
            initial={{ color: "#6B7280" }}
            animate={{ color: "#D8B4FE" }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            }}
            className="text-xl md:text-4xl"
          >
            Scroll down
          </motion.span>
        </div>
        {/* PROJECT LIST */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-puple-300 to-red-300" />
            {projects.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
                key={project.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {project.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[280px] xl:w-[600px] xl:h-[300px]">
                    <Image
                      src={project.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {project.desc}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        setDialogOpen(true);
                      }}
                      className="flex justify-end p-2 text-sm md:p-3 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-black hover:text-gray-200 cursor-pointer"
                    >
                      See Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* HIRE ME */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center xl:mt-10">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-8xl">
          <FadingText text="Do you have a project?" />
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer & Salesforce Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:text-orange-300"
          >
            Hire me
          </Link>
        </div>
      </div>
      <Dialog
        isOpen={dialogOpen}
        isActive={activeProject}
        onClose={() => setDialogOpen(false)}
      />
    </motion.div>
  );
};

export default PorfolioPage;
