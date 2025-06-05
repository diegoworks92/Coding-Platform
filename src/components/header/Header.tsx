import {
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/slices/authSlice";
import LogoHeader from "./LogoHeader";
import LanguageSwitcher from "./LanguageSwitcher";
import Notifications from "./Notifications";
import { useTranslation } from "react-i18next";

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header
      key={i18n.language}
      className="h-[7vh] md:h-[10vh] border-b border-secondary-300 p-8 flex items-center justify-between xl:justify-end"
    >
      <LogoHeader />
      <nav className="flex items-center gap-2">
        <LanguageSwitcher />
        <Notifications />
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-1 hover:bg-secondary-300 p-2 rounded-lg transition-colors">
              <img
                src="https://img.freepik.com/foto-gratis/negocio-joven-empresario-profesional-gafas-sonriendo-camara-brazo-cruzado-sobre-pecho_1258-26377.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>DiegoWorks</span>
              <span className="pt-2">
                <RiArrowDownSLine />
              </span>
            </MenuButton>
          }
          align="end"
          transition
          menuClassName="bg-secondary-300 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/profile"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="https://img.freepik.com/foto-gratis/negocio-joven-empresario-profesional-gafas-sonriendo-camara-brazo-cruzado-sobre-pecho_1258-26377.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Diego Reyes</span>
                <span className="text-xs text-gray-500">
                  diegoreyes@diegoworks.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to=""
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> {t("header.settings")}
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <button
              onClick={handleLogout}
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine className="text-primary" />{" "}
              {t("header.log_out")}
            </button>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
