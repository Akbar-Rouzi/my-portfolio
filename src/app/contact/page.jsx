"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import StatusMessage from "@/components/statusMessage";
import FadingText from "@/components/fadingText";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const textAreRef = useRef();

  const [formError, setFormError] = useState({
    message: "",
    email: "",
  });
  const emailInputRef = useRef();
  const [showStatusMessage, setShowStatusMessage] = useState(false);

  const text = "Say Hello";

  useEffect(() => {
    textAreRef.current?.focus();
  }, []);

  useEffect(() => {
    if (showStatusMessage) {
      const timer = setTimeout(() => {
        setShowStatusMessage(false);
        setSuccess(false);
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showStatusMessage]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic regex for email
  const handleChange = (field) => {
    if (field === "message") {
      if (formError.message) {
        setFormError((prev) => ({ ...prev, message: "" }));
      }
    }
    if (field === "email") {
      if (formError.email) {
        setFormError((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setFormError({ message: "", email: "" });

    const message = form.current.user_message.value.trim();
    const email = form.current.user_email.value.trim();

    // Custom validation
    if (!message.trim()) {
      setFormError({ message: "Please enter a message", email: "" });
      textAreRef.current?.focus();
      textAreRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    if (!validateEmail(email)) {
      setFormError({ email: "Please enter a valid email address" });
      emailInputRef.current?.focus();
      emailInputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

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
          setShowStatusMessage(true);
          form.current.reset();
        },
        () => {
          setError(true);
          setShowStatusMessage(true);
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
          <FadingText text={text} emoji="😊" />
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="overflow-y-auto max-h-[80vh] min-h-[70vh] lg:h-full lg:w-1/2 bg-red-50 rounded-xl md:text-xl flex flex-col gap-4 md:gap-8 justify-center p-4 lg:p-16 xl:p-24"
        >
          <span>Dear Akbar,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-1 md:border-b-2 border-b-black outline-none resize-none flex-grow min-h-[120px]"
            name="user_message"
            placeholder="Type your message here"
            ref={textAreRef}
            onChange={() => handleChange("message")}
          />
          {/* Message Error */}
          {formError.message && (
            <span className="text-red-600 md:font-semibold">
              {formError.message}
            </span>
          )}
          <span>Email address: </span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-1 md:border-b-2 border-b-black outline-none"
            ref={emailInputRef}
            onChange={() => handleChange("email")}
          />
          {/* Email Error */}
          {formError.email && (
            <span className="text-red-600 md:font-semibold">
              {formError.email}
            </span>
          )}
          <span>Regards</span>
          <button className="bg-purple-200 font-semibold text-gray-600 p-2 lg:p-4 hover:text-gray-200 cursor-pointer">
            Send
          </button>

          {/* SUCESS OR SYSTEM ERROR */}
          <AnimatePresence>
            {success && (
              <StatusMessage
                type="success"
                message="Your message has been sent successfully!"
              />
            )}
            {error && (
              <StatusMessage type="error" message="Something went wrong!" />
            )}
          </AnimatePresence>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
