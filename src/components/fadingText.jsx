"use client";

import { motion } from "framer-motion";

const FadingText = ({ text, emoji = null }) => {
  return (
    <div className="inline-block">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          {letter}
        </motion.span>
      ))}
      {emoji && <span>{emoji}</span>}
    </div>
  );
};

export default FadingText;
