import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

type ExpertTeachersProps = {
  title: string;
  course: string;
  teacher: string;
  logo: JSX.Element;
  image: string;
};

const ExpertTeachers = ({
  title,
  course,
  teacher,
  logo,
  image,
}: ExpertTeachersProps) => {
  return (
    <div className="bg-secondary-300 hover:bg-secondary-100 rounded-xl cursor-pointer group">
      {/* Number of tickets */}
      <div className="p-0 ">
        <div className="w-full h-auto bg-black rounded-t-xl relative overflow-hidden">
          <img
            src={image}
            alt="Teacher Image"
            className="w-full h-auto bg-black rounded-t-xl transform transition-all duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg">{title}</h3>
        <p>{teacher}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50" />
      <div className="gap-8 grid grid-cols-6 items-center p-4">
        {logo}

        <div className="col-span-5 flex flex-col">
          <p>{course}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeachers;
