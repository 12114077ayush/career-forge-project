import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Jobcard = ({ job }) => (
  <motion.div
    className="job-card p-4 border rounded-lg shadow-md min-w-[34rem] m-auto mt-5 bg-bgcolor"
    whileHover={{
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    }}
  >
    <h2 className="text-xl font-semibold text-inactive flex justify-between">
      {job.title}
      <span>
        <ApartmentIcon />
      </span>
    </h2>
    <p className="text-sm text-inactive">{job.companyName}</p>
    <p className="text-sm text-inactive">{job.location}</p>
    <Link to={`/jobs/${job.id}`} className="text-inactive">
      View Details
    </Link>
  </motion.div>
);

Jobcard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Jobcard;
