import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
