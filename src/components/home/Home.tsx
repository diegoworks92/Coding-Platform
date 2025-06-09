import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import ExpertTeachers from "./ExpertTeachers";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import HomeCarousel from "./HomeCarousel";
import Pricing from "../pricing/Pricing";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeCarousel />
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl mb-6 mt-20">
          {t("home.expert_teachers")}
        </h2>
        <div className="flex items-center gap-2 text-3xl mt-16">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors hidden md:block" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors hidden md:block" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ExpertTeachers
          image="images/Sarah.webp"
          title={t("teachers.sarah.name")}
          teacher={t("teachers.sarah.role")}
          course={t("teachers.sarah.course")}
          logo={
            <FaReact className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />

        <ExpertTeachers
          image="images/Robert.webp"
          title={t("teachers.robert.name")}
          teacher={t("teachers.robert.role")}
          course={t("teachers.robert.course")}
          logo={
            <IoLogoJavascript className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />

        <ExpertTeachers
          image="images/Jhon.webp"
          title={t("teachers.john.name")}
          teacher={t("teachers.john.role")}
          course={t("teachers.john.course")}
          logo={
            <FaNodeJs className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />

        <ExpertTeachers
          image="images/Emily.webp"
          title={t("teachers.emily.name")}
          teacher={t("teachers.emily.role")}
          course={t("teachers.emily.course")}
          logo={
            <GoDatabase className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
      </div>
      <Pricing />
    </>
  );
};

export default Home;
