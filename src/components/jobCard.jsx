const JobCard = ({ job }) => (
  <>
    {/* JOB TITLE */}
    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
      {job.title}
    </div>
    {/* JOB DESC */}
    <div className="p-3 text-sm italic">{job.desc}</div>
    {/* JOB DATE */}
    <div className="p-3 text-red-400 text-sm font-semibold">{job.date}</div>
    {/* JOB COMPANY */}
    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
      {job.company}
    </div>
  </>
);

export default JobCard;
