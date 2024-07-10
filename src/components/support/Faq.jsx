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
          The Frequently Asked Questions (FAQs) section is a resource where you
          will find answers to the most common doubts about our service,
          organized by categories. If you can’t find what you’re looking for,
          contact us for more help.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1 */}
        <div>
          <h1 className="text-xl text-white mb-8">Online Shopping</h1>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                <p>What payment methods do you accept?</p>
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
                  Is it safe to use my credit card on your website?
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
                How can I know if a product is available?
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
                Can I place an order by phone?
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
          <h1 className="text-xl text-white mb-8">Technical Support</h1>
          <div className="border-b border-dashed border-gray-600 p-2">
            <Disclosure>
              <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />
                How can I reset my password?
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
                Where can I find the user manual?
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
                How can I update the app or software?
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
                What do I do if I find an error in the app?
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
