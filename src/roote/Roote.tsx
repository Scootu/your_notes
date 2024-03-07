import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Roote: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
