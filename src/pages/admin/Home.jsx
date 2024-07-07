import CardTicket from "../../components/shared/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import MostRecentTickets from "../../components/shared/MostRecentTickets";
import ExpertTeachers from "../../components/shared/ExpertTeachers";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">PAGINA PRINCIPAL</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>

        <div className="bg-gray-500 w-full h-36"></div>
      </div>
      <h2 className="text-3xl mb-6">Our expert teachers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <ExpertTeachers
          image={"../../../public/images/Sarah.webp"}
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
          image={"../../../public/images/Robert.webp"}
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
          image={"../../../public/images/Jhon.webp"}
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
          image={"../../../public/images/Emily.webp"}
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
      <MostRecentTickets />
    </div>
  );
};

export default Home;
