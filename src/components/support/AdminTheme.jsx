import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { RiArrowRightLine, RiArrowRightSLine } from "react-icons/ri";

const AdminTheme = ({ title, button }) => {
  const information = [
    {
      id: 1,
      name: "What admin theme does?",
      framework: "React",
    },
    {
      id: 2,
      name: " How Extended Licese works?",
      framework: "Laravel",
    },
    {
      id: 3,
      name: " How to install on a local machine?",
      framework: "VueJS",
    },
    {
      id: 4,
      name: "  How can I import Google fonts?",
      framework: "Angular",
    },
  ];
  return (
    <div className="bg-secondary-100 p-8 rounded-lg">
      {/*  Title card */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-white text-xl md:text-2xl"> {title}</h1>
        <Link to="" className="flex items-center gap-2 text-primary">
          {button} <RiArrowRightLine />
        </Link>
      </div>
      {/* Content card */}
      <div>
        {information.map((data) => {
          return (
            <div key={data.id}>
              <Disclosure>
                <Disclosure.Button className="py-2 text-sm lg:text-lg flex flex-wrap md:items-center gap-4">
                  {" "}
                  <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
                  <p className="text-[13px] sm:text-lg"> {data.name}</p>
                  <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                    {data.framework}
                  </span>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                    By Keenthemes to save tons and more to time money projects
                    are listed and outstanding{" "}
                    <Link to="/" className="text-primary">
                      Check Out
                    </Link>
                  </Disclosure.Panel>
                </Transition>
              </Disclosure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTheme;
