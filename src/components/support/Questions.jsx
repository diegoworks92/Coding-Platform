import { RiFilter2Fill, RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Faq from "../../components/support/Faq";

import FrequesntlyAskedQuestions from "./FrequesntlyAskedQuestions";
const Questions = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Questions</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>-</span>
            <span>Support Center</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill /> Filter
          </button>
        </div>
      </div>

      {/* Cover Page */}
      <div className="bg-secondary-100 p-8 mb-8 rounded-lg rounded-te-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8">How Can We Help You?</h1>
          <form>
            <div className="relative">
              <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Search question"
              ></input>
            </div>
          </form>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="../../../public/images/questions.svg"
            alt="cover page"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Faq />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <FrequesntlyAskedQuestions
          title="Accounts and Subscriptions"
          button="Support"
        />
        <FrequesntlyAskedQuestions
          title="Policies and Privacy"
          button="All FAQ"
        />
      </div>
    </div>
  );
};

export default Questions;
