import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import InitialHeader from "../components/header/InitialHeader";

const LayoutAuth = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
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
