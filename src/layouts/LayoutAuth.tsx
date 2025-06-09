import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import InitialHeader from "../components/header/InitialHeader";
import { RootState } from "../store/store";

const LayoutAuth = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6 bg-secondary-900 text-white notranslate">
      <Sidebar />
      <div className="xl:col-span-5">
        {!isLoggedIn ? <InitialHeader /> : <Header />}
        <div className="h-[90vh] overflow-y-scroll p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
