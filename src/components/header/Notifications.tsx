import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { RiNotification3Line, RiChat2Line, RiNextjsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaAngular } from "react-icons/fa";

const Notifications = () => {
  const { t } = useTranslation();
  const date = new Date().toLocaleDateString();

  return (
    <>
      <Menu
        menuButton={
          <MenuButton className="relative hover:bg-secondary-300 p-2 rounded-lg transition-colors">
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
          {t("notifications.title")}
        </h1>
        <hr className="my-6 border-gray-500" />
        <MenuItem className="p-0 hover:bg-transparent">
          <Link
            to=""
            className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
          >
            <div className="text-sm flex gap-4">
              <img
                src="https://younghollywood.com/images/stories/newsIMG/wenn/20111021/wenn2471850_46_2098_4.webp"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Mark Hoppus</span>
                  <span className="text-[8px] ml-auto">{date}</span>
                </div>
                <p className="text-gray-500 text-xs">
                  {t("notifications.message")}
                </p>
              </div>
            </div>
          </Link>
        </MenuItem>
        <MenuItem className="p-0 hover:bg-transparent">
          <Link
            to=""
            className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-3 hover:bg-secondary-900 transition-colors rounded-lg"
          >
            <div className="text-sm flex gap-4">
              <RiNextjsFill className="text-[38px] box-content rounded-full pl-[1px]" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-9">
                  <span>Tom DeLonge</span>
                  <span className="text-[8px]">{date}</span>
                </div>
                <p className="text-gray-500 text-xs">
                  {t("notifications.course_update")}
                </p>
              </div>
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
                <span>{t("notifications.new_comment")}</span>
                <span className="text-[8px]">{date}</span>
              </div>
              <p className="text-gray-500 text-xs">
                {t("notifications.travis_comment")}
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
            {t("notifications.all")}
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Notifications;
