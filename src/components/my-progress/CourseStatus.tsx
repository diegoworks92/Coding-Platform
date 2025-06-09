import { useTranslation } from "react-i18next";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GoDatabase } from "react-icons/go";

const CourseStatus = () => {
  const { t } = useTranslation();
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
        <GoDatabase className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
      ),
      description: t("courses.databases_sql"),
      status: t("course_status.statuses.not_started"),
      color: "text-yellow-500 bg-yellow-500/10",
      progress: "0",
      date: currentDate.toLocaleDateString(),
    },
    {
      id: 2,
      logo: (
        <FaNodeJs className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
      ),
      description: t("courses.backend_nodejs"),
      status: t("course_status.statuses.started"),
      color: "bg-blue-500/10 text-blue-500",
      progress: "30",
      date: threeDaysAgo.toLocaleDateString(),
    },
    {
      id: 3,
      logo: (
        <FaReact className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
      ),
      description: t("courses.frontend_react"),
      status: t("course_status.statuses.completed"),
      color: "bg-green-500/10 text-green-500",
      progress: "100",
      date: twentyFiveDaysAgo.toLocaleDateString(),
    },
    {
      id: 4,
      logo: (
        <IoLogoJavascript className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
      ),
      description: t("courses.basic_js"),
      status: t("course_status.statuses.completed"),
      color: "bg-green-500/10 text-green-500",
      progress: "100",
      date: fiftyFourDaysAgo.toLocaleDateString(),
    },
  ];

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-white mb-10">
          {t("course_status.title")}
        </h1>
      </div>
      <div className="bg-secondary-300 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="font-bold">{t("course_status.specialization")}</h5>
          <h5 className="font-bold">{t("course_status.description")}</h5>
          <h5 className="font-bold">{t("course_status.status")}</h5>
          <h5 className="font-bold">{t("course_status.last_time_date")}</h5>
          <h5 className="font-bold">{t("course_status.progress")}</h5>
        </div>
        {information.map((data) => (
          <div
            key={data.id}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl"
          >
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                {t("course_status.specialization")}
              </h5>
              <span>{data.logo}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                {t("course_status.description")}
              </h5>
              <p>{data.description}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                {t("course_status.status")}
              </h5>
              <span className={`py-1 px-2 ${data.color} rounded-lg`}>
                {data.status}
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                {t("course_status.last_time_date")}
              </h5>
              <span>{data.date}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                {t("course_status.progress")}
              </h5>
              <div>
                <p>{data.progress}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseStatus;
