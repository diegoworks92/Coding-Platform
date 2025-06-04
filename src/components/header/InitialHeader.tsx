import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import LogoHeader from "./LogoHeader";
const InitialHeader = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-300 p-8 flex items-center justify-between xl:justify-end">
      <LogoHeader />
    </header>
  );
};

export default InitialHeader;
