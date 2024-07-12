import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/slices/authSlice";
import {
  RiBarChart2Line,
  RiMessage3Line,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
  RiHome6Line,
} from "react-icons/ri";
import { BsPersonVideo2 } from "react-icons/bs";
import SidebarButtons from "./sidebar/SidebarButtons";
import SidebarAccordion from "./sidebar/SidebarAccordion";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static  w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-300 p-4 flex flex-col justify-between z-50 ${
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
              icon={<BsPersonVideo2 className="text-primary" />}
              name="My Courses"
            />
            <SidebarButtons
              route={"/"}
              icon={<RiBarChart2Line className="text-primary" />}
              name="My Progress"
            />
            <SidebarButtons
              route={"/"}
              icon={<RiMessage3Line className="text-primary" />}
              name="Notifications"
            />
            <SidebarAccordion />
          </ul>
        </div>
        <nav>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiLogoutCircleRLine className="text-primary" /> Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiLogoutCircleRLine className="text-primary" /> Log In
            </Link>
          )}
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
