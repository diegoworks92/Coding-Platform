import { Link } from "react-router-dom";

type SidebarButtonsProps = {
  icon: React.ReactNode;
  name: string;
  route: string;
};

const SidebarButtons = ({ icon, name, route }: SidebarButtonsProps) => {
  return (
    <li>
      <Link
        /*  to="/" */
        to={route}
        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
      >
        {icon} {name}
      </Link>
    </li>
  );
};

export default SidebarButtons;
