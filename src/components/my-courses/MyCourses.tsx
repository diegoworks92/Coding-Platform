import { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Courses from "./Courses";
import { useTranslation } from "react-i18next";
import LatestCourses from "./LatestCourses";

type CarouselProps = {
  children: React.ReactNode;
};
const Carousel = ({ children }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (!carouselRef.current) return; // Verificación para evitar acceder si es null

    if (
      carouselRef.current.scrollLeft >=
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    ) {
      carouselRef.current.scrollLeft = 0;
    } else {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  const prev = () => {
    if (!carouselRef.current) return; // Verificación antes de acceder a current

    if (carouselRef.current.scrollLeft <= 0) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
    } else {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  return (
    <>
      <button onClick={prev}>
        <RiArrowLeftSLine className=" text-3xl hover:cursor-pointer hover:text-white transition-colors" />
      </button>
      <button onClick={next}>
        <RiArrowRightSLine className=" text-3xl hover:cursor-pointer hover:text-white transition-colors" />
      </button>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll whitespace-nowrap gap-10"
      >
        {children}
      </div>
    </>
  );
};

const MyCourses = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-bold text-3xl text-white">{t("my_courses")}</h1>
      </div>
      <Carousel>
        <Courses
          img="1"
          number="Class 1 of 46"
          courseKey="databases_sql"
          logo={
            <GoDatabase className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
        <Courses
          img="2"
          number="Class 10 of 28"
          courseKey="backend_nodejs"
          logo={
            <FaNodeJs className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
        <Courses
          img="3"
          number="Class 36 of 36"
          courseKey="frontend_react"
          logo={
            <FaReact className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
        <Courses
          img="4"
          number="Class 42 of 42"
          courseKey="basic_js"
          logo={
            <IoLogoJavascript className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
      </Carousel>
      <LatestCourses />
    </>
  );
};

export default MyCourses;
