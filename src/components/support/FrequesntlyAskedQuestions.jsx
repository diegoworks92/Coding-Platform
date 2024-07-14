import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { RiArrowRightLine, RiArrowRightSLine } from "react-icons/ri";

const FrequesntlyAskedQuestions = ({ title, button }) => {
  const information = [
    {
      id: 1,
      name: "How can I create an account?",
    },
    {
      id: 2,
      name: "How can I cancel my subscription?",
    },
    {
      id: 3,
      name: "How to modify account info?",
    },
    {
      id: 4,
      name: "Forgot password, what to do?",
    },
  ];

  return (
    <div className="bg-secondary-300 p-8 rounded-lg">
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
                    First, a disclaimer - the entire process of writing a blog
                    post often takes more than a couple of hours, event if you
                    can type eighty words as per minute and your writing skills
                    are sharp.{" "}
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

export default FrequesntlyAskedQuestions;
