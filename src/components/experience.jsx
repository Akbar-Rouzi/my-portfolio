const Experience = () => {
  return (
    <div className="flex flex-col gap-12 justify-center pb-48">
      {/* EXPERIENCE TITLE */}
      <h1 className="font-bold text-2xl">EXPERIENCE</h1>
      {/* EXPERIENCE LIST */}
      <div className="">
        {/* EXPERIENCE LIST ITEM 01 */}
        <div className=" flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3">
            {/* JOB TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {" "}
              Front End Developer
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              My current employment. Way better than the position before!
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              2024 - Present
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              Apple
            </div>
          </div>
          {/* CENTER */}
          <div className="w-1/6">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3"></div>
        </div>
        {/* EXPERIENCE LIST ITEM 02 */}
        <div className=" flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3"></div>
          {/* CENTER */}
          <div className="w-1/6">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3">
            {/* JOB TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {" "}
              Full Stack Developer
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              My current employment. Way better than the position before!
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              2024 - Present
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              Apple
            </div>
          </div>
        </div>
        {/* EXPERIENCE LIST ITEM 03 */}
        <div className=" flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3">
            {/* JOB TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {" "}
              Senior JavaScript Engineer
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              My current employment. Way better than the position before!
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              2024 - Present
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              Apple
            </div>
          </div>
          {/* CENTER */}
          <div className="w-1/6">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
