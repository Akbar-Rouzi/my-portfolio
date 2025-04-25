import { motion } from "framer-motion";

const StatusMessage = ({ type, message }) => {
  const colorClass = type === "success" ? "text-green-600" : "text-red-600";
  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className={`${colorClass} md:font-semibold`}
    >
      {message}
    </motion.div>
  );
};

export default StatusMessage;
