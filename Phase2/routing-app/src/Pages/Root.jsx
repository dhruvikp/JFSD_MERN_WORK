import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import './Root.css';    

function RootLayout() {
  return (
    <div className="content">
        <MainNavigation />
        <hr />
        <Outlet />
    </div>
  );
}

export default RootLayout;