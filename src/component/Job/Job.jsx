import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { AiFillDollarCircle } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    job_description,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {job_title} </h2>
        <p> {company_name} </p>
        <div className="flex flex-row gap-10 ">
          <button className="btn bg-success px-5 py-2 font-extrabold">
            {" "}
            {remote_or_onsite}{" "}
          </button>
          <button className="btn bg-success px-5 py-2 font-extrabold">
            {job_type}
          </button>
        </div>
        <div>
          <h2 className="flex flex-row gap-2">
            {" "}
            <FaLocationDot className="text-2xl" />
            {location}
            <h2 className="flex flex-row gap-2">
              <AiFillDollarCircle className="text-2xl" />
              <p>Salary: {salary} </p>
            </h2>
          </h2>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary">View Details </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
