import { useState } from "react";

import { Link } from "react-router-dom";
import {
  RiBarChart2Line,
  RiMessage3Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
  RiHome6Line,
} from "react-icons/ri";
import SidebarButtons from "./sidebar/SidebarButtons";
import SidebarAccordion from "./sidebar/SidebarAccordion";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static  w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="logo.ico"
                alt="company logo"
                className="w-20 h-16 mb-10 mt-3 object-cover hover:cursor-pointer"
              />
            </Link>
          </div>
          <ul>
            <SidebarButtons
              route={"/"}
              icon={<RiHome6Line className="text-primary" />}
              name="Home"
            />
            <SidebarButtons
              route={"/my-courses"}
              icon={<RiCalendarTodoLine className="text-primary" />}
              name="My Courses"
            />
            <SidebarButtons
              route={"/my-progress"}
              icon={<RiBarChart2Line className="text-primary" />}
              name="My Progress"
            />
            <SidebarButtons
              route={"/notifications"}
              icon={<RiMessage3Line className="text-primary" />}
              name="Notifications"
            />
            <SidebarAccordion />
          </ul>
        </div>
        <nav>
          <Link
            to="/login"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiLogoutCircleRLine className="text-primary" /> Log Out
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
