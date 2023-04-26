import React from "react";
import Passenger from "../../assets/passenger.png";
import Group from "../../assets/group.png";

const UsersCard = () => {
  return (
    <div className="w-64 my-4 h-32 p-4 shadow-lg shadow-gray-500/50 rounded-md flex flex-col justify-between cursor-pointer hover:shadow-gray-800/50 ease-in duration-150">
      <div className="flex justify-between">
        <h4 className="flex gap-3 text-base font-normal">
          <img className="w-5 h-5" src={Passenger} alt="" /> Passengers
        </h4>
        <p>198,646</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <p>
          <span className="text-green-dark">+2396</span> more <br /> from this
          week
        </p>
        <img src={Group} alt="" className="w-11 h-11" />
      </div>
    </div>
  );
};

export default UsersCard;
