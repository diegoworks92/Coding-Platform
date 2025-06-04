import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <>
      <Link to="/" className="xl:hidden">
        <img
          src="favicon.ico"
          alt="company logo"
          className="w-10 object-cover hover:cursor-pointer"
        />
      </Link>
    </>
  );
};

export default LogoHeader;
