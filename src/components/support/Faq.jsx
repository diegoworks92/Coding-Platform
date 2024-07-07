import { Disclosure, Transition } from "@headlessui/react";
import { RiArrowRightSLine } from "react-icons/ri";

const Faq = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-lg">
      <div className="mb-10">
        <h1 className="text-2xl text-white mb-2">
          Frequesntly Asked Questions
        </h1>
        <p className="text-gray-500">
          First, a disclaimer – the entire process of writing a blog post often
          takes more than a couple of hours, even if you can type eighty words
          as per minute and your writing skills are sharp.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1 */}
        <div>
          <h1 className="text-xl text-white mb-8">Buying Product</h1>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                <p>How does it work?</p>
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                <p className="text-base sm:text-lg">
                  Do I need a designer to use Admin Theme?
                </p>
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                What do I need to do to start selling
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                How much does Extended license cost?
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
        </div>
        {/* Section 2 */}
        <div>
          <h1 className="text-xl text-white mb-8">Installation</h1>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
                What platforms are compatible?
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
                How many people can it support?
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                How long is the warrianty?
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
                How fast is the installation?
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
                  post often takes more than a couple of hours, event if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
