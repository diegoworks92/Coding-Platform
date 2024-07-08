import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { GoDatabase } from "react-icons/go";

const CourseStatus = () => {
  const currentDate = new Date();
  const threeDaysAgo = new Date(
    currentDate.getTime() - 3 * 24 * 60 * 60 * 1000
  );
  const twentyFiveDaysAgo = new Date(
    currentDate.getTime() - 25 * 24 * 60 * 60 * 1000
  );
  const fiftyFourDaysAgo = new Date(
    currentDate.getTime() - 54 * 24 * 60 * 60 * 1000
  );

  const information = [
    {
      id: 1,
      logo: (
        <GoDatabase
          className={`text-xl p-2 box-content rounded-full col-span-1 bg-white text-black`}
        />
      ),
      description: "Architecture and Databases",
      status: "Not started",
      color: "text-yellow-500 bg-yellow-500/10",
      progres: "0",
      date: currentDate.toLocaleDateString(),
    },
    {
      id: 2,
      logo: (
        <FaNodeJs
          className={`text-xl p-2 box-content rounded-full col-span-1 bg-white text-black`}
        />
      ),
      description: "Backend with Node.js",
      status: "Started",
      color: "bg-blue-500/10 text-blue-500",
      progres: "30",
      date: threeDaysAgo.toLocaleDateString(),
    },
    {
      id: 3,
      logo: (
        <FaReact
          className={`text-xl p-2 box-content rounded-full col-span-1 bg-white text-black`}
        />
      ),
      description: "Frontend with React.js",
      status: "Completed",
      color: "bg-green-500/10 text-green-500",
      progres: "100",
      date: twentyFiveDaysAgo.toLocaleDateString(),
    },
    {
      id: 4,
      logo: (
        <IoLogoJavascript
          className={`text-xl p-2 box-content rounded-full col-span-1 bg-white text-black`}
        />
      ),
      description: "JavaScript From Scratch",
      status: "Completed",
      color: "bg-green-500/10 text-green-500",
      progres: "100",
      date: fiftyFourDaysAgo.toLocaleDateString(),
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-2xl text-white my-10">Course Status</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="font-bold">Specialization</h5>
          <h5 className="font-bold">Description</h5>
          <h5 className="font-bold">Status</h5>
          <h5 className="font-bold">Last Time Date</h5>
          <h5 className="font-bold">Progress</h5>
        </div>
        {information.map((data) => {
          return (
            <div
              key={data.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl"
            >
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">
                  Specialization
                </h5>
                <span>{data.logo}</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">
                  Description
                </h5>
                <p>{data.description}</p>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Status</h5>
                <span className={`py-1 px-2 ${data.color} rounded-lg`}>
                  {data.status}
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">
                  Last Time Date
                </h5>
                <span>{data.date}</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">
                  Progress
                </h5>

                <div>
                  <p>{data.progres}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CourseStatus;
