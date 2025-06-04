import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { FaPlay } from "react-icons/fa";

type CoursesProps = {
  course: string;
  number: string;
  logo: JSX.Element;
  img: string;
};
const Courses = ({ course, number, logo, img }: CoursesProps) => {
  return (
    <div className=" bg-secondary-300 rounded-xl min-h-60 border-2 border-primary mb-10">
      <div
        className="w-full h-40 sm:h-64 rounded-t-xl relative border-b-2 border-primary"
        style={{
          backgroundImage: `url('images/courses-img/${img}.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FaPlay
          className={`absolute text-2xl p-2 px-4 box-content rounded-md bg-black text-dark hover:text-primary top-0 bottom-0 left-0 right-0 m-auto cursor-pointer`}
        />
      </div>

      <div className="gap-8 grid grid-cols-6 items-center p-4 sm:p-0 sm:px-4 sm:pb-5 cursor-pointer sm:mt-6 w-72 sm:w-96 ">
        {logo}

        <div className="col-span-5 flex flex-col">
          <p>{number}</p>
          <p className="font-bold">{course}</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
