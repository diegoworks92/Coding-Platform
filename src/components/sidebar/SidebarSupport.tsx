import { useState } from "react";
import { Link } from "react-router-dom";

type SocialMediaProps = {
  activeSubmenu: boolean;
  id: number;
};

// Definimos correctamente el mapa de datos con claves numéricas
const dataMap: Record<number, { id: number; to?: string; name: string }[]> = {
  1: [
    { id: 1, to: "/contact", name: "Contact" },
    { id: 2, to: "/terms-of-service", name: "TOS" },
    { id: 3, to: "/frequently-asked-questions", name: "FAQ" },
  ],
  /*   2: [
    { id: 1, name: "LinkedIn" },
    { id: 2, name: "Twitter/X" },
    { id: 3, name: "Instagram" },
    { id: 4, name: "YouTube" },
  ], */
};

const SidebarSupport = ({ activeSubmenu, id }: SocialMediaProps) => {
  // Aseguramos que selected pueda ser null o un número
  const [selected, setSelected] = useState<number | null>(null);

  // Modificamos la función click para recibir directamente un número
  const handleClick = (itemId: number) => {
    setSelected(itemId);
  };

  // Obtenemos los datos de acuerdo al id, asegurando que exista
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
            to={item.to ?? "#"} // Evitamos errores si to no está definido
            className={` ${
              selected === item.id ? "before:bg-primary" : "before:bg-gray-500"
            } py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-300 hover:text-white hover:bg-secondary-900 transition-colors rounded-r-lg`}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarSupport;
