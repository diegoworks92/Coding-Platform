import { Link } from "react-router-dom";

import TOS from "./TOS";
const TermsOfService = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Terms of Service</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>-</span>
            <span>Support Center</span>
          </div>
        </div>
      </div>
      {/* Cover Page */}
      <div className="bg-secondary-100 p-8 rounded-lg rounded-te-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <TOS />

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="../../../public/images/tos.svg"
            alt="cover page"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
