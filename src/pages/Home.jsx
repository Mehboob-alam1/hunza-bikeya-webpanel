import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="w-[100%]">
      <Outlet />
    </div>
  );
};

export default Home;
