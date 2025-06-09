import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import CourseStatus from "@components/my-progress/CourseStatus";
import ChartBarMixed from "./ChartBarMixed";
import ChartLineDots from "./ChartLineDots";
import { ChartPieDonutText } from "./ChartPieDonutText";
import { t } from "i18next";

const MyProgress = () => {
  return (
    <>
      <CourseStatus />
      <h1 className="font-bold text-3xl text-white mt-20">
        {t("progress_status.title")}
      </h1>
      <div className="flex justify-between flex-col xl:flex-row">
        <ChartBarMixed />
        <ChartLineDots />
        <ChartPieDonutText />
      </div>
    </>
  );
};

export default MyProgress;
