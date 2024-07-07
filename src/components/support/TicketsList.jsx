import { Link } from "react-router-dom";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDiscussLine,
  RiFileTextLine,
  RiGithubLine,
  RiSearch2Line,
  RiTicketLine,
  RiTwitterLine,
} from "react-icons/ri";

const TicketsList = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-lg grid grid-cols-1 xl:grid-cols-4 gap-8">
      {/* Section 1 */}
      <div className="md:col-span-3">
        <form>
          <div className="relative">
            <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
            <input
              type="text"
              className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
              placeholder="Search for anything"
            />
          </div>
        </form>
        <h1 className="text-white text-2xl my-8">Public tickets</h1>
        {/* Tickets */}
        <div>
          {/* Ticket */}
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <RiTicketLine className="md:text-2xl text-yellow-500" />
              <Link
                to=""
                className="md:text-xl hover:text-blue-500 transition-colors"
              >
                How to use Netronic with Django Framework?
              </Link>
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                React
              </span>
            </div>
            <div className="md:px-10">
              <p className="text-gray-500">
                By Keenthemes to save tons and more to time money projects are
                listed amazing outstanding projects are listed
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <RiTicketLine className="md:text-2xl text-blue-500" />
              <Link
                to=""
                className="md:text-xl hover:text-blue-500 transition-colors"
              >
                Admin theme npm issue
              </Link>
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                Angular
              </span>
            </div>
            <div className="md:px-10">
              <p className="text-gray-500">
                By Keenthemes to save tons and more to time money projects are
                listed amazing outstanding projects are listed
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <RiTicketLine className="md:text-2xl text-green-500" />
              <Link
                to=""
                className="md:text-xl hover:text-blue-500 transition-colors"
              >
                Admin theme authentication to node.js / strapi backend
              </Link>
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                Warning
              </span>
            </div>
            <div className="md:px-10">
              <p className="text-gray-500">
                By Keenthemes to save tons and more to time money projects are
                listed amazing outstanding projects are listed
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <RiTicketLine className="md:text-2xl text-yellow-500" />
              <Link
                to=""
                className="md:text-xl hover:text-blue-500 transition-colors"
              >
                How to use Admin theme with Django Framework?
              </Link>
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                HTML
              </span>
            </div>
            <div className="md:px-10">
              <p className="text-gray-500">
                By Keenthemes to save tons and more to time money projects are
                listed amazing outstanding projects are listed
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <RiTicketLine className="md:text-2xl text-yellow-500" />
              <Link
                to=""
                className="md:text-xl hover:text-blue-500 transition-colors"
              >
                Reducing footprint of Start theme
              </Link>
              <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                Angular
              </span>
            </div>
            <div className="md:px-10">
              <p className="text-gray-500">
                By Keenthemes to save tons and more to time money projects are
                listed amazing outstanding projects are listed
              </p>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="p-8 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
              <RiArrowLeftSLine />
            </button>
            <div className="flex items-center">
              <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                1
              </button>
              <button className="py-2 px-4 bg-secondary-900 rounded-lg transition-colors text-gray-100">
                2
              </button>
              <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                3
              </button>
              <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                4
              </button>
              <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                5
              </button>
            </div>
            <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
              <RiArrowRightSLine />
            </button>
          </nav>
        </div>
      </div>
      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
        <div className="bg-secondary-900 p-8 rounded-lg xl:mb-8">
          <h1 className="text-2xl text-white mb-8">More channels</h1>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <RiFileTextLine className="text-4xl text-primary" />
              <div className="flex flex-col gap-1">
                <h5 className="text-white">Project Briefing</h5>
                <p className="text-xs">
                  Check out our{" "}
                  <Link to="" className="text-primary">
                    Support Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <RiDiscussLine className="text-4xl text-primary" />
              <div className="flex flex-col gap-1">
                <h5 className="text-white">More to discuss?</h5>
                <p className="text-xs">
                  Check out our{" "}
                  <Link to="" className="text-primary">
                    support@company.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <RiTwitterLine className="text-4xl text-primary" />
              <div className="flex flex-col gap-1">
                <h5 className="text-white">Latest News</h5>
                <p className="text-xs">
                  Follow us at{" "}
                  <Link to="" className="text-primary">
                    KeenThemes Twitter
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <RiGithubLine className="text-4xl text-primary" />
              <div className="flex flex-col gap-1">
                <h5 className="text-white">Github Access</h5>
                <p className="text-xs">
                  Our github repo{" "}
                  <Link to="" className="text-primary">
                    KeenThemes Github
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-lg">
          <h1 className="text-2xl text-white mb-8">Documentation</h1>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <RiArrowRightSLine /> Angular Admin
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <RiArrowRightSLine /> React Admin
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <RiArrowRightSLine /> Vue Admin
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <RiArrowRightSLine /> Nich Admin
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <RiArrowRightSLine /> Dashboard Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TicketsList;
