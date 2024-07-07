import { Link } from "react-router-dom";
import { RiTicketLine, RiMore2Fill, RiAddLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { FaPlay } from "react-icons/fa";

const Courses = (props) => {
  const { ticket, course, number, logo } = props;

  let status = "";
  let textColor = "";

  switch (ticket) {
    case "pending":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500";
      break;
    case "inProcess":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case "close":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    case "total":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      break;
  }

  return (
    <div className="bg-secondary-100 rounded-xl h-60">
      {/* Number of tickets */}
      <div className="p-0 ">
        <div className="w-full h-40 bg-black rounded-t-xl relative">
          <FaPlay
            className={`absolute text-2xl p-2 px-4 box-content rounded-md bg-white top-0 bottom-0 left-0 right-0 m-auto cursor-pointer`}
          />
        </div>
      </div>
      <div className="gap-8 grid grid-cols-6 items-center p-4">
        {logo}

        <div className="col-span-5 flex flex-col">
          <p>{number}</p>
          <p>{course}</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
