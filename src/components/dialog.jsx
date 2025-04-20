import { AnimatePresence, motion } from "framer-motion";

const Dialog = ({ isOpen, isActive, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && isActive && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-red-100 p-6 rounded-xl shadow-xl max-w-xl text-center m-8"
            initial={{ scale: 0.8, y: -30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 30, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* TODO: When the project is completed, remove or enable this section. */}
            {/* <h2 className="text-2xl font-bold mb-4">{isActive.title}</h2>
            <p className="mb-4">{isActive.desc}</p>
            <a
              href={isActive.link}
              target="_blank"
              className="inline-block px-6 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go to Project
            </a> */}
            <h2 className="text-xl font-semibold mb-4">
              🚧 Under Construction
            </h2>
            <p className="mb-6 text-gray-700">
              This project is currently being worked on and isn’t available for
              viewing just yet.
              <br />
              Please check back later or reach out if you're curious!
            </p>
            <div>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
