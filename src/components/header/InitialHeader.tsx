import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import LogoHeader from "./LogoHeader";
import LanguageSwitcher from "./LanguageSwitcher";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InitialHeader = () => {
  const { t, i18n } = useTranslation(); // ✅ Asegurar actualización de idioma

  return (
    <header
      key={i18n.language}
      className="h-[7vh] md:h-[10vh] border-b border-secondary-300 p-8 flex items-center justify-between xl:justify-end"
    >
      <LogoHeader />
      <LanguageSwitcher />
      <Link
        to="/login"
        className="flex items-center gap-1 py-2 px-4 rounded-lg hover:bg-secondary-300 transition-colors"
      >
        <RiLogoutCircleRLine className="text-primary" /> {t("sidebar.log_in")}
      </Link>
    </header>
  );
};

export default InitialHeader;
