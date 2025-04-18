"use client";
import { useRef } from "react";
import Scroll from "@/components/svgs/scroll";
import skillSet from "@/utils/skillSet";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Skill = () => {
  const skillRef = useRef();
  // const isSkillRefView = useInView(skillRef, { once: true });
  const isSkillRefView = useInView(skillRef, { margin: "-100px" });

  return (
    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
      {/* SKILLS TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isSkillRefView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        SKILLS
      </motion.h1>
      {/* SKILL LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        {skillSet.map((skill) => (
          <div
            key={skill.name}
            className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            {skill.name}
          </div>
        ))}
      </motion.div>
      {/* SKILL SCROLL SVG */}
      <Scroll />
    </div>
  );
};

export default Skill;
