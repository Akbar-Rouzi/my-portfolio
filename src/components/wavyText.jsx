"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyText({ wavyText, className }) {
  const containerRef = useRef();

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      const wavyElement = containerRef.current.querySelector(".wavy");
      if (!wavyElement || !wavyElement.textContent.trim()) return;

      const { chars } = splitText(wavyElement);
      containerRef.current.style.visibility = "visible";

      const staggerDelay = 0.15;

      animate(
        chars,
        { y: [-20, 20] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(
            staggerDelay,
            // By setting this as a negative delay we can start
            // the animation part-way through, to ensure we don't
            // get an initial iteration where the characters look
            // like they're starting to animate one by one.
            { startDelay: -staggerDelay * chars.length }
          ),
        }
      );
    });
  }, []);

  return (
    <span
      className={`container flex items-center w-full visibility-hidden ${className}`}
      ref={containerRef}
    >
      <span className="pl-2 wavy">{wavyText}</span>
    </span>
  );
}
