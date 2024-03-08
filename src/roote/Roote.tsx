import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Roote: React.FC = () => {
  return (
    <div className="relative">
      <NavBar />
      <div
        className="w-full bg-cover bg-no-repeat h-[200px] dark:bg-[#000000c9]"
        style={{ backgroundImage: "url('https://i.ibb.co/HDzfx4H/Cover.png'" }}
      >
        <Outlet />
      </div>
      {/* <img
        className="w-full bg-cover bg-no-repeat h-[200px] absolute pointer-events-none z-0"
        src="https://i.ibb.co/HDzfx4H/Cover.png"
        alt="sub hed img"
      /> */}
    </div>
  );
};
