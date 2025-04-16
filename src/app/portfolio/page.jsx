"use client";
import { motion } from "framer-motion";

const PorfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      Porfolio
    </motion.div>
  );
};

export default PorfolioPage;
