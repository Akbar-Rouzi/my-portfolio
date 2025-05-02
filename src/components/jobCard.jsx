"use client";
import { useState } from "react";

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-white rounded-lg shadow p-4">
      {/* Title */}
      <div className="font-semibold lg:text-lg mb-2">{job.title}</div>

      {/* Description */}
      <div
        className={`relative overflow-hidden ${expanded ? "" : "line-clamp-4"}`}
      >
        <p className="text-sm italic text-gray-700 whitespace-pre-line">
          {job.desc}
        </p>

        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Toggle Button */}
      <span
        onClick={() => setExpanded(!expanded)}
        className="text-sm font-semibold mt-2 text-gray-500 cursor-pointer "
      >
        {expanded ? "Show less " : "...Show more "}
      </span>

      {/* Date and Company */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="text-red-400 text-xs font-semibold">{job.date}</div>
        <div className=" bg-gray-100 px-2 py-1 rounded text-base font-medium max-w-fit">
          {job.company}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
