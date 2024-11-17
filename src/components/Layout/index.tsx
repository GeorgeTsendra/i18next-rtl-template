import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="flex flex-row h-[100vh]">
      <Sidebar />
      <div className="flex flex-col flex-1 p-8 pt-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
