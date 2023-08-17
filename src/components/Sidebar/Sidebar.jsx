import React from "react";
import { CiGrid42, CiShop } from "react-icons/ci";
import { VscPerson } from "react-icons/vsc";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { RiSteering2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../assets/hunzaBikeya.png";
import BikeLogo from "../../assets/BikeLogo.png";
import { useBikeya } from "../../context/Context";
import "./Sidebar.css";

const Sidebar = () => {
  const firebase = useBikeya();
  const {user} = useBikeya()
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await firebase.logOut();
      navigate("/");
    } catch {
      alert("Error Aya");
    }
  };

  const sidebarRoutes = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <CiGrid42 className="text-xl font-extrabold" />,
    },
    {
      path: "/dashboard/passengers",
      label: "Passengers",
      icon: <VscPerson className="text-xl font-extrabold" />,
    },
    {
      path: "/dashboard/drivers",
      label: " Drivers",
      icon: <RiSteering2Fill />,
    },
    {
      path: "/dashboard/offer-banner",
      label: " Offer Banner",
      icon: <CiShop />,
    },
  ];

  return (
    <main className="w-[100%] flex">
      <section className=" w-[25%] h-content py-5 px-8 shadow-lg gap-20 shadow-gray-500/50 flex flex-col justify-between ">
        <div className="">
         <NavLink to="/dashboard"><img src={Logo} alt="" className="mb-10" /></NavLink>
          <ul className="flex flex-col gap-y-1">
            {sidebarRoutes.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={
                  location.pathname.startsWith(sidebarRoutes.path)
                    ? "bg-[#14CA15]"
                    : "text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-medium hover:text-white cursor-pointer ease-in duration-150 "
                }
              >
                <div className="font-bold">{item.icon}</div>
                {item.label}
              </NavLink>
            ))}
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
              to="/dashboard/settings"
              className="text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-medium hover:text-white cursor-pointer ease-in duration-150 active:bg-green-dark mb-1"
            >
              <AiFillSetting />
              Settings
            </NavLink>
            <NavLink
              onClick={handleSignOut}
              className="text-lg pt-2 pb-2 pl-4 pr-4 rounded-md flex items-center gap-2 hover:bg-green-medium hover:text-white cursor-pointer ease-in duration-150 active:bg-green-dark"
            >
              <FiLogOut />
              Logout
            </NavLink>
          </ul>
        </div>
      </section>
      <section className="w-[100%]">
        <Outlet />
      </section>
    </main>
  );
};

export default Sidebar;
