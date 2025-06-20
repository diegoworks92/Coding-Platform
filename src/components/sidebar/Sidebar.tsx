import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/slices/authSlice";
import {
  RiBarChart2Line,
  RiMessage3Line,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
  RiHome6Line,
} from "react-icons/ri";
import { BsPersonVideo2 } from "react-icons/bs";
import SidebarButtons from "./SidebarButtons";
import SidebarAccordion from "./SidebarAccordion";
import { RootState } from "store/store";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const { t, i18n } = useTranslation();

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
                src="favicon.ico"
                alt="company logo"
                className="w-16 mb-10 mt-3 object-cover hover:cursor-pointer"
              />
            </Link>
          </div>
          <ul>
            <SidebarButtons
              route={"/"}
              icon={<RiHome6Line className="text-primary" />}
              name="sidebar.home"
            />
            <SidebarButtons
              route={"/my-courses"}
              icon={<BsPersonVideo2 className="text-primary" />}
              name="sidebar.my_courses"
            />
            <SidebarButtons
              route={"/my-progress"}
              icon={<RiBarChart2Line className="text-primary" />}
              name="sidebar.my_progress"
            />
            <SidebarButtons
              route={"/"}
              icon={<RiMessage3Line className="text-primary" />}
              name="sidebar.notifications"
            />

            <SidebarAccordion />
          </ul>
        </div>
        <nav key={i18n.language}>
          {/* Forza actualización cuando cambia el idioma */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiLogoutCircleRLine className="text-primary" />{" "}
              {t("sidebar.log_out")}
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiLogoutCircleRLine className="text-primary" />{" "}
              {t("sidebar.log_in")}
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
