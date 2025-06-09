import { useRef } from "react";
import Courses from "./Courses";
import { useTranslation } from "react-i18next";
import { FaJava, FaPhp } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";

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

const LatestCourses = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-between my-10">
        <h1 className="font-bold text-3xl text-white">{t("latest_courses")}</h1>
      </div>
      <Carousel>
        <Courses
          img="1"
          courseKey="c_plus_plus"
          logo={
            <SiCplusplus className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
        <Courses
          img="2"
          courseKey="java_dev"
          logo={
            <FaJava className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
        <Courses
          img="3"
          courseKey="php_web"
          logo={
            <FaPhp className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
        <Courses
          img="4"
          courseKey="kotlin_android"
          logo={
            <TbBrandKotlin className="text-xl p-2 box-content rounded-full col-span-1 bg-primary text-black" />
          }
        />
      </Carousel>
    </>
  );
};
export default LatestCourses;
