import React from "react";
import ActiveTrips from "../ActiveTripCard/ActiveTrips";

const Aside = () => {
  return (
    <div className="">
      <h1 className="text-center text-base font-bold">Active Trips</h1>
      <ActiveTrips />
    </div>
  );
};

export default Aside;
