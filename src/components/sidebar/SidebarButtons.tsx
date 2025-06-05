import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type SidebarButtonsProps = {
  icon: React.ReactNode;
  name: string;
  route: string;
};

const SidebarButtons = ({ icon, name, route }: SidebarButtonsProps) => {
  const { t } = useTranslation();

  return (
    <li>
      <Link
        to={route}
        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
      >
        {icon} {t(name)} {/* Traducción dinámica */}
      </Link>
    </li>
  );
};

export default SidebarButtons;
