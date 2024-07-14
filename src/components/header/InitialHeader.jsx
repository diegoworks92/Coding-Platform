import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
const InitialHeader = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-300 p-8 flex items-center justify-between xl:justify-end">
      <Link to="/" className="xl:hidden">
        <img
          src="logo.ico"
          alt="company logo"
          className="w-12 sm:w-16  md:w-20 md:h-16 object-cover hover:cursor-pointer"
        />
      </Link>
    </header>
  );
};

export default InitialHeader;
