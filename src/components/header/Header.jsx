import {
  RiArrowDownSLine,
  RiNotification3Line,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiChat2Line,
} from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/slices/authSlice";
const Header = () => {
  const date = new Date().toLocaleDateString();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-300 p-8 flex items-center justify-between xl:justify-end">
      <Link to="/" className="xl:hidden">
        <img
          src="logo.ico"
          alt="company logo"
          className="w-12 sm:w-16  md:w-20 md:h-16 object-cover hover:cursor-pointer"
        />
      </Link>

      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-300 p-2 rounded-lg transition-colors">
              {" "}
              <RiNotification3Line />
              <span className="absolute -top-0.5 -right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                3
              </span>
            </MenuButton>
          }
          transition
          align="center"
          menuClassName="bg-secondary-300 p-4"
        >
          <h1 className="text-gray-300 text-center font-medium">
            Notifications (3)
          </h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to=""
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <img
                src="https://younghollywood.com/images/stories/newsIMG/wenn/20111021/wenn2471850_46_2098_4.webp"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Mark Hoppus</span>
                  <span className="text-[8px] ml-auto">{date}</span>
                </div>
                <p className="text-gray-500 text-xs">Lorem ipsum dolor...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to=""
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiNextjsFill className="p-2 bg-black box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Tom DeLonge</span>
                  <span className="text-[8px]">{date}</span>
                </div>
                <p className="text-gray-500 text-xs">Course update...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to=""
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiChat2Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>New commente</span>
                  <span className="text-[8px]">{date}</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Travis Barker commented on...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              All notifications
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-300 p-2 rounded-lg transition-colors">
              {" "}
              <img
                src="https://img.freepik.com/foto-gratis/negocio-joven-empresario-profesional-gafas-sonriendo-camara-brazo-cruzado-sobre-pecho_1258-26377.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>DiegoWorks</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          transition
          menuClassName="bg-secondary-300 p-4"
        >
          {" "}
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
              <RiSettings3Line /> Setting
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <button
              onClick={handleLogout}
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine className="text-primary" /> Log Out
            </button>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
