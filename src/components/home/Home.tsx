import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import ExpertTeachers from "./ExpertTeachers";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import HomeCarousel from "./HomeCarousel";
import Pricing from "../pricing/Pricing";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl mb-6 mt-20">Our expert teachers</h2>
        <div className="flex items-center gap-2 text-3xl mt-16">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors hidden md:block" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors hidden md:block" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <ExpertTeachers
          image={"images/Sarah.webp"}
          title="Sarah Miller"
          teacher="Software Engineer"
          course="Frontend with React.js"
          logo={
            <FaReact
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black`}
            />
          }
        />

        <ExpertTeachers
          image={"images/Robert.webp"}
          title="Robert Johnson"
          teacher="Web Applications Developer"
          course="JavaScript From Scratch"
          logo={
            <IoLogoJavascript
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black`}
            />
          }
        />

        <ExpertTeachers
          image={"images/Jhon.webp"}
          title="John Smith"
          teacher="Backend Engineer"
          course="Backend with Node.js"
          logo={
            <FaNodeJs
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black`}
            />
          }
        />

        <ExpertTeachers
          image={"images/Emily.webp"}
          title="Emily Davis"
          teacher="Database Professor"
          course="Architecture and Databases"
          logo={
            <GoDatabase
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black`}
            />
          }
        />
      </div>
      <Pricing />
    </>
  );
};

export default Home;
