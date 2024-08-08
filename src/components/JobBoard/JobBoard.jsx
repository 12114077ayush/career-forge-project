// src/components/JobBoard.js
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchJobs } from "../features/jobs/jobsSlice";
import Jobcard from "./Jobcard";
import { jobs } from "./Jobdata";

const JobBoard = () => {
  //   const dispatch = useDispatch();
  //   const jobs = useSelector((state) => state.jobs.items);

  //   useEffect(() => {
  //     dispatch(fetchJobs());
  //   }, [dispatch]);

  return (
    <div className="job-board mt-3 p-8">
      <h1 className="text-2xl font-bold mb-4 ml-[45%] text-inactive">
        Job Board
      </h1>
      <div className=" gap-4 flex flex-col">
        {jobs.map((job) => (
          <Jobcard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
