import { useState } from "react";
import { Link } from "react-router-dom";

const SocialMedia = ({ activeSubmenu, id }) => {
  const [selected, setSelected] = useState(null);

  const click = (id) => {
    setSelected(id);
  };

  const dataMap = {
    1: [
      {
        id: "1",
        to: "/contact",
        name: "Contact",
      },
      {
        id: "2",
        to: "/terms-of-service",
        name: "TOS",
      },
      {
        id: "3",
        to: "/frequently-asked-questions",
        name: "FAQ",
      },
    ],
    2: [
      {
        id: "1",
        name: "Social Media Post",
      },
      {
        id: "2",
        name: "Social Media Statistic",
      },
      {
        id: "3",
        name: "Social Media Profile",
      },
    ],
  };
  const data = dataMap[id];

  return (
    <ul
      className={`${
        activeSubmenu ? "h-[130px]" : "h-0"
      } overflow-hidden transition-all`}
    >
      {data.map((d) => {
        return (
          <li key={d.id}>
            <Link
              to={d.to}
              className={` ${
                selected === d.id ? "before:bg-primary" : "before:bg-gray-500"
              } py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white`}
              onClick={() => click(d.id)}
            >
              {d.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
