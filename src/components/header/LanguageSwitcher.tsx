import { useTranslation } from "react-i18next";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import LanguageButton from "./LanguageButton";
import { IoLanguage } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
const LanguageSwitcher = () => {
  const { t } = useTranslation();
  return (
    <Menu
      menuButton={
        <MenuButton className="flex items-center gap-x-1 hover:bg-secondary-300 p-2 rounded-lg transition-colors">
          <span className="text-primary text-xl">
            <IoLanguage />
          </span>

          <span>{t("header.language_button")}</span>
          <span className="pt-2">
            <RiArrowDownSLine />
          </span>
        </MenuButton>
      }
      align="end"
      transition
      menuClassName="bg-secondary-300 p-4"
    >
      {/*       <hr className="my-4 border-gray-500" /> */}
      <MenuItem className="p-0 hover:bg-transparent flex flex-col">
        <LanguageButton language="en" name="English" />
        <LanguageButton language="es" name="Español" />
        <LanguageButton language="ca" name="Català" />
      </MenuItem>
    </Menu>
  );
};

export default LanguageSwitcher;
