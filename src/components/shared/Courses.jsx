import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { FaPlay } from "react-icons/fa";

const Courses = (props) => {
  const { course, number, logo, img } = props;

  return (
    <div className="bg-secondary-300 rounded-xl h-60">
      <div className="p-0 ">
        <div
          className="w-full h-40 rounded-t-xl relative"
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
      </div>
      <div className="gap-8 grid grid-cols-6 items-center p-4 cursor-pointer">
        {logo}

        <div className="col-span-5 flex flex-col">
          <p>{number}</p>
          <p>{course}</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
