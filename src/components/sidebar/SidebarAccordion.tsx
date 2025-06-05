import {
  RiArrowRightSLine,
  RiCustomerService2Line,
  RiEarthLine,
} from "react-icons/ri";
import SocialMedia from "./SocialMedia";
import { useState } from "react";
import SidebarSupport from "./SidebarSupport";
import { useTranslation } from "react-i18next";

const SidebarAccordion = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<null | number>(null);
  const { t } = useTranslation(); // Añadir traducción

  const handleButton = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  const information = [
    {
      id: 1,
      name: "sidebar.support", // Cambiar el nombre a clave de traducción
      ico: <RiCustomerService2Line className="text-primary" />,
      children: <SidebarSupport activeSubmenu={activeSubmenu === 1} id={1} />,
    },
    {
      id: 2,
      name: "sidebar.social_media", // Cambiar el nombre a clave de traducción
      ico: <RiEarthLine className="text-primary" />,
      children: <SocialMedia activeSubmenu={activeSubmenu === 2} id={2} />,
    },
  ];

  return (
    <>
      {information.map((data) => {
        return (
          <li key={data.id}>
            <button
              onClick={() => handleButton(data.id)}
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <span className="flex items-center gap-4">
                {data.ico} {t(data.name)} {/* Traducir el texto */}
              </span>
              <RiArrowRightSLine
                className={`mt-1 ${
                  activeSubmenu === data.id && "rotate-90"
                } transition-all`}
              />
            </button>

            {data.children}
          </li>
        );
      })}
    </>
  );
};

export default SidebarAccordion;
