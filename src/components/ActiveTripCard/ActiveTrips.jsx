import React from "react";
import { TripsData } from "./ActiveTripsData";
import Arrow from "../../assets/Arrow.svg";
import Passenger1 from "../../assets/Passenger1.png";
import Driver1 from "../../assets/Driver1.png";

const ActiveTrips = () => {
  return (
    <div>

      {TripsData.map((tripsVal, index) => (
        <div className="shadow-lg shadow-gray-500/50 rounded-md px-1 py-6 my-4" key={index}>
          <div className="flex justify-between items-start gap-4">
            <div className="text-[12px]">{tripsVal.time}</div>
            <img src={Arrow} alt="" />
            <div className="flex mt-2">
              <h3 className="text-[12px]">{tripsVal.currentLocation}</h3>
              <h3 className="text-[12px]">{tripsVal.targetLocation}</h3>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex mt-2">
              <img src={Passenger1} alt="passenger" className="mr-2" />
              <div>
                <p className="text-[12px]">Passenger</p>
                <h3 className="text-[12px]">Ahmed Khan</h3>
              </div>
            </div>
            <div className="flex mt-2">
              <img src={Driver1} alt="driver" className="mr-2" />
              <div>
                <p className="text-[12px]">Driver</p>
                <h3 className="text-[12px]">Nabeel Khan</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveTrips;
