import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  //this is not the best way to show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center">
      <div>
        <h2 className="text-7xl">Featured Jobs: {jobs.length} </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-error m-2"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
