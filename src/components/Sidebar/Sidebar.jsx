import React from "react";
import { CiGrid42, CiShop } from "react-icons/ci";
import { VscPerson } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { RiSteering2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../assets/hunzaBikeya.png";
import BikeLogo from "../../assets/BikeLogo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="w-72 h-screen py-5 px-8 shadow-lg shadow-gray-500/50 flex flex-col justify-between ">
      <div className="">
        <img src={Logo} alt="" className="mb-6" />
        <ul className="flex flex-col gap-y-1">
          <NavLink
            to="/dashboard"
            className="bg-green-dark text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 text-white cursor-pointer active:bg-green-dark"
          >
            <CiGrid42 className="text-xl font-extrabold" /> Dashboard
          </NavLink>
          <NavLink
            to="/passengers"
            className="text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer active:bg-green-dark"
          >
            <VscPerson className="text-xl font-extrabold" /> Passengers
          </NavLink>
          <NavLink
            to="/drivers"
            className="text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer active:bg-green-dark"
          >
            <RiSteering2Fill />
            Drivers
          </NavLink>
          <NavLink
            to="/offer-banner"
            className="text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer active:bg-green-dark"
          >
            <CiShop />
            Offer Banner
          </NavLink>
        </ul>
      </div>

      <div className="">
        <div className="bgContainer w-100 h-48 p-6 flex flex-col gap-y-2">
          <img src={BikeLogo} alt="" width="60" />
          <div>
            <h4 className="text-base text-white font-semibold">Need help?</h4>
            <p className="text-sm text-white font-normal">
              Please check our docs
            </p>
          </div>
          <button className="w-full bg-white rounded-lg py-1 font-bold text-xs">
            DOCUMENTATION
          </button>
        </div>

        <ul>
          <NavLink
            to="/settings"
            className="text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer active:bg-green-dark"
          >
            <AiFillSetting />
            Settings
          </NavLink>
          <NavLink
            to="/logout"
            className="text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer active:bg-green-dark"
          >
            <FiLogOut />
            Logout
          </NavLink>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
