import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import Courses from "../shared/Courses";

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import CourseStatus from "../shared/CourseStatus";

const MyCourses = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-bold text-3xl text-white">My Courses</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <Courses
          img="1"
          number="Class 1 of 46"
          course="Architecture and Databases"
          logo={
            <GoDatabase
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
            />
          }
        />
        <Courses
          img="2"
          number="Class 10 of 28"
          course="Backend with Node.js"
          logo={
            <FaNodeJs
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
            />
          }
        />
        <Courses
          img="3"
          number="Class 34 of 34"
          course="Frontend with React.js"
          logo={
            <FaReact
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
            />
          }
        />
        <Courses
          img="4"
          number="Class 34 of 43"
          course="JavaScript From Scratch"
          logo={
            <IoLogoJavascript
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
            />
          }
        />
      </div>
      <CourseStatus />
    </div>
  );
};

export default MyCourses;
