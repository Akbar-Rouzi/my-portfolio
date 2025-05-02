"use client ";

import Sign from "@/components/svgs/sign";
import Scroll from "@/components/svgs/scroll";
import summary from "@/utils/summaryData";
const Biography = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-6 justify-center">
      {/* SUMMARY TITLE */}
      <h1 className="font-bold text-2xl">{summary.title}</h1>
      {/* SUMMARY DESC */}
      {summary.desc.map((item) => (
        <p className="md:text-lg" key={item.id}>
          {item.p}
        </p>
      ))}

      {/* SUMMARY QUOTE */}
      <span className="italic">{summary.quote}</span>
      {/* SUMMARY SIGN SVG*/}
      <Sign />
      {/* SUMMARY SCROLL SVG */}
      <Scroll />
    </div>
  );
};

export default Biography;
