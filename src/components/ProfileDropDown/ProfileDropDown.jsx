import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";
import { useBikeya } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";

const ProfileDropDown = () => {
  const [notification, setNotification] = useState();

  const firebase = useBikeya();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await firebase.logOut();
      navigate("/");
    } catch {
      alert("Error Aya");
    }
  };
  const { user } = useBikeya();
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <div className="notification" onClick={() => setNotification(true)}>
          <GrNotification
            className="text-xl"
            
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-14 rounded-lg mb-10 flex justify-between">
              <img src={user.photoURL} />
              <CgChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 relative top-[37px] z-50 "
          >
            <li>
              <a>Profile</a>
            </li>
            <li onClick={handleSignOut}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute top-[0] left-0 z-55 w-[100%]">
        {notification && (
          <Notification
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileDropDown;
