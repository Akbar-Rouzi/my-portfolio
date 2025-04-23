"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";
  const form = useRef();
  const textAreRef = useRef();
  useEffect(() => {
    textAreRef.current?.focus();
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-2/8 md:h-full lg:w-1/2 flex items-center justify-center text-4xl lg:text-6xl">
          <div>
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
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="overflow-y-auto max-h-[80vh] min-h-[60vh] lg:h-full lg:w-1/2 bg-red-50 rounded-xl md:text-xl flex flex-col gap-4 md:gap-8 justify-center p-4 lg:p-16 xl:p-24"
        >
          <span>Dear Akbar,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-1 md:border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Type your message here"
            ref={textAreRef}
          />
          <span>Email address: </span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-1 md:border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 font-semibold text-gray-600 p-2 lg:p-4 hover:text-gray-200 cursor-pointer">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
