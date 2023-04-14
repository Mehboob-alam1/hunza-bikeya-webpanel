import React from "react";
import { CiGrid42 } from "react-icons/ci";
import { VscPerson } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="w-72 h-screen pl-10 pr-10 pt-10 pb-10 shadow-lg shadow-gray-500/50">
      <h2 className="font-bold text-xl leading-8 text-green-500">
        Hunza Bikeya
      </h2>
      <ul className="mt-12">
        <Link to="/dashboard" className="bg-green-dark text-lg mt-4 mb-4 pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 text-white cursor-pointer">
          <CiGrid42 className="text-xl font-extrabold" /> Dashboard
        </Link>
        <Link to="/passengers" className="text-lg mt-4 mb-4 pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer">
          <VscPerson className="text-xl font-extrabold" /> Passengers
        </Link>
        <Link to="/drivers" className="text-lg mt-4 mb-4 pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer">
          Drivers
        </Link>
        <Link to="/offer-banner" className="text-lg mt-4 mb-4 pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-dark hover:text-white cursor-pointer">
          Offer Banner
        </Link>
      </ul>
    </section>
  );
};

export default Sidebar;
