import React from "react";
import { TripsData } from "./ActiveTripsData";
import Arrow from "../../assets/Arrow.svg";
import Passenger1 from "../../assets/Passenger1.png";
import Driver1 from "../../assets/Driver1.png";

const ActiveTrips = () => {
  return (
    <div>
      {TripsData.map((tripsVal) => (
        <div className="shadow-lg shadow-gray-500/50 rounded-md px-4 py-6 my-4">
          <div className="flex justify-between items-start gap-4">
            <div>{tripsVal.time}</div>
            <img src={Arrow} alt="" />
            <div className="flex">
              <h3>{tripsVal.currentLocation}</h3>
              <h3>{tripsVal.targetLocation}</h3>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <img src={Passenger1} alt="passenger" />
              <div>
                <p className="text-sm">Passenger</p>
                <h3 className="text-sm">Ahmed Khan</h3>
              </div>
            </div>
            <div className="flex">
              <img src={Driver1} alt="driver" />
              <div>
                <p className="text-sm">Driver</p>
                <h3 className="text-sm">Nabeel Khan</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveTrips;
