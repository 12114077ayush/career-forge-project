import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "./Jobdata";

const JobDetail = () => {
  const { jobId } = useParams();
  const [jobobject, setJobobject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const job = jobs.find((job) => job.id === parseInt(jobId, 10));
    if (job) {
      setJobobject({
        title: job.title,
        companyName: job.companyName,
        location: job.location,
        description: job.description,
        applicationLink: job.applicationLink,
      });
    }
  }, [jobId]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!jobobject) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-500 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-active">
      <div className="bg-bgcolor p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-inactive mb-4">
          {jobobject.title}
        </h1>
        <p className="text-lg font-semibold text-gray-700 text-center mb-2">
          {jobobject.companyName}
        </p>
        <p className="text-sm text-gray-500 text-center mb-6">
          {jobobject.location}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {jobobject.description}
        </p>
        <div className="text-center">
          <button
            onClick={toggleModal}
            className="inline-block px-6 py-3 text-white bg-inactive hover:bg-blue-700 font-semibold rounded-md shadow-md transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Apply for {jobobject.title}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Resume (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
