import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type SocialMediaProps = {
  activeSubmenu: boolean;
  id: number;
};

// Definimos el mapa de datos con claves de traducción
const dataMap: Record<number, { id: number; to?: string; name: string }[]> = {
  1: [
    { id: 1, to: "/contact", name: "sidebar.contact" },
    { id: 2, to: "/terms-of-service", name: "sidebar.tos" },
    { id: 3, to: "/frequently-asked-questions", name: "sidebar.faq" },
  ],
};

const SidebarSupport = ({ activeSubmenu, id }: SocialMediaProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useTranslation(); // Activar traducción

  const handleClick = (itemId: number) => {
    setSelected(itemId);
  };

  const data = dataMap[id] ?? [];

  return (
    <ul
      className={`${
        activeSubmenu ? "h-[130px]" : "h-0"
      } overflow-hidden transition-all`}
    >
      {data.map((item) => (
        <li key={item.id}>
          <Link
            to={item.to ?? "#"}
            className={` ${
              selected === item.id ? "before:bg-primary" : "before:bg-gray-500"
            } py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-300 hover:text-white hover:bg-secondary-900 transition-colors rounded-r-lg`}
            onClick={() => handleClick(item.id)}
          >
            {t(item.name)} {/* Traducir automáticamente */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarSupport;
