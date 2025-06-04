import { Link } from "react-router-dom";
import {
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiTwitterXFill,
} from "react-icons/ri";

type SocialMediaProps = {
  activeSubmenu: boolean;
  id: number;
};

// Definimos correctamente el mapa de datos con claves numéricas
const dataMap: Record<
  number,
  { id: number; to?: string; name: string; icon: React.ReactNode }[]
> = {
  2: [
    { id: 1, name: "LinkedIn", icon: <RiLinkedinBoxFill /> },
    { id: 2, name: "YouTube", icon: <RiYoutubeFill /> },
    { id: 3, name: "Twitter / X", icon: <RiTwitterXFill /> },
  ],
};

const SocialMedia = ({ activeSubmenu, id }: SocialMediaProps) => {
  const handleClick = () => {};

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
            className={`flex gap-3  py-2 px-4  ml-6  relative  hover:text-white hover:bg-secondary-900 transition-colors rounded-lg`}
            onClick={() => handleClick()}
          >
            <div className="text-primary text-md pt-[5px]">{item.icon}</div>{" "}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
