import { Link } from "react-router-dom";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDiscussLine,
  RiFileTextLine,
  RiGithubLine,
  RiFilter2Fill,
  RiTicketLine,
  RiSearch2Line,
} from "react-icons/ri";
import { FaInstagram, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiRuby } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Contact</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>-</span>
            <span>Support Center</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-300/50 hover:bg-secondary-300 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill /> Filter
          </button>
        </div>
      </div>
      {/* Contact */}
      <div className="bg-secondary-300 rounded-te-lg grid grid-cols-1 md:grid-cols-2 items-center mb-10 p-6 rounded shadow-md ">
        <div className="text-lg">
          <p className="mb-1">
            <strong className="font-semibold">Address:</strong> 1234 Coding
            Lane, Tech City, CodeState, 56789
          </p>

          <p className="mb-1">
            <strong className="font-semibold">Phone:</strong> +1 (123) 456-7890
          </p>

          <p className="mb-1">
            <strong className="font-semibold">Email:</strong> info@mail.com
          </p>

          <p className="mb-1">
            <strong className="font-semibold">Customer Service Hours:</strong>{" "}
            Monday to Friday, 9:00 AM to 5:00 PM (CET)
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="images/contact.svg"
            alt="Contact"
            className="sm:w-80 sm:h-72 object-cover mt-8 md:mt-0"
          />
        </div>
      </div>
      <div className="bg-secondary-300 p-8 rounded-lg grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Section 1 */}
        <div className="md:col-span-3">
          <form>
            <div className="relative">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Search programming language"
              />
            </div>
          </form>
          <h1 className="text-white text-2xl my-8">Contact a professor</h1>
          {/* Tickets */}
          <div>
            {/* Ticket */}
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="hidden sm:block bg-secondary-900 text-white p-2 rounded-full">
                  <FaReact />
                </span>
                <Link
                  to=""
                  className="md:text-xl hover:text-blue-500 transition-colors"
                >
                  Doubts about the React JS course?
                </Link>
              </div>
              <div className="md:px-10">
                <p className="text-gray-500 md:ml-2">
                  If you have any questions or issues with your React JS course,
                  your teacher is ready to help you. Contact them to solve any
                  problem.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="hidden sm:block bg-secondary-900 text-white p-2 rounded-full">
                  <IoLogoJavascript />
                </span>
                <Link
                  to=""
                  className="md:text-xl hover:text-blue-500 transition-colors"
                >
                  Need help with JavaScript?
                </Link>
              </div>
              <div className="md:px-10">
                <p className="text-gray-500 md:ml-2">
                  If you have any questions or issues with your JavaScript
                  course, don’t hesitate to contact your teacher. They are here
                  to help you succeed.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="hidden sm:block bg-secondary-900 text-white p-2 rounded-full">
                  <FaPython />
                </span>
                <Link
                  to=""
                  className="md:text-xl hover:text-blue-500 transition-colors"
                >
                  Confused with Python?
                </Link>
              </div>
              <div className="md:px-10">
                <p className="text-gray-500 md:ml-2">
                  Do you have doubts about your Python course? Contact your
                  teacher for a detailed and personalized explanation.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="hidden sm:block bg-secondary-900 text-white p-2 rounded-full">
                  <DiRuby />
                </span>
                <Link
                  to=""
                  className="md:text-xl hover:text-blue-500 transition-colors"
                >
                  Questions about Ruby?
                </Link>
              </div>
              <div className="md:px-10">
                <p className="text-gray-500 md:ml-2">
                  If you have any questions about your Ruby course, your teacher
                  is here to help you. Don’t hesitate to reach out.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="hidden sm:block bg-secondary-900 text-white p-2 rounded-full">
                  <SiCplusplus />
                </span>
                <Link
                  to=""
                  className="md:text-xl hover:text-blue-500 transition-colors"
                >
                  Problems with C++?
                </Link>
              </div>
              <div className="md:px-10">
                <p className="text-gray-500 md:ml-2">
                  If you find yourself stuck in your C++ course, your teacher is
                  just a click away. Don’t hesitate to ask for help.
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
                <button className="py-2 px-4 bg-secondary-900 rounded-lg transition-colors text-gray-100">
                  1
                </button>
                <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
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
                <RiDiscussLine className="text-4xl text-primary cursor-pointer" />
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
                <RiGithubLine className="text-4xl text-primary cursor-pointer" />
                <div className="flex flex-col gap-1">
                  <h5 className="text-white">Github Access</h5>
                  <p className="text-xs">
                    Our{" "}
                    <Link to="" className="text-primary">
                      github{" "}
                    </Link>
                    repo
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <FaXTwitter className="text-4xl text-primary cursor-pointer" />
                <div className="flex flex-col gap-1">
                  <h5 className="text-white">Latest News</h5>
                  <p className="text-xs">
                    Follow us at{" "}
                    <Link to="" className="text-primary">
                      X
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <FaInstagram className="text-4xl text-primary cursor-pointer" />
                <div className="flex flex-col gap-1">
                  <h5 className="text-white">Project Briefing</h5>
                  <p className="text-xs">
                    Follow us at{" "}
                    <Link to="" className="text-primary">
                      Instagram
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary-900 p-8 rounded-lg">
            <h1 className="text-2xl text-white mb-8">Adipisicing Elit</h1>
            <ul className="flex flex-col gap-y-4">
              <li>
                <Link
                  to=""
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <RiArrowRightSLine />
                  Tenetur voluptatem praesentium
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <RiArrowRightSLine /> Voluptatem praesentium totam
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <RiArrowRightSLine /> Ratione aliquid accusamus
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <RiArrowRightSLine /> Nich Admin Lorem
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <RiArrowRightSLine /> Consequuntur error enim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
