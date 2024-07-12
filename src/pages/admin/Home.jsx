import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import ExpertTeachers from "../../components/home/ExpertTeachers";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import HomeCarousel from "../../components/home/HomeCarousel";
import Pricing from "../../components/pricing/Pricing";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <h2 className="font-bold text-3xl mb-6 mt-20">Our expert teachers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <ExpertTeachers
          image={"images/Sarah.webp"}
          title="Sarah Miller"
          teacher="Software Engineer"
          course="Frontend with React.js"
          logo={
            <FaReact
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
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
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
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
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
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
              className={`text-xl p-2 box-content rounded-full col-span-1 bg-black`}
            />
          }
        />
      </div>
      <Pricing />
    </>
  );
};

export default Home;
