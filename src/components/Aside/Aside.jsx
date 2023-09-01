import React from "react";
import ActiveTrips from "../ActiveTripCard/ActiveTrips";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";

const Aside = () => {
  return (
    <div className="overflow-y-scroll no-scrollbar h-[140vh] p-1">
      <div className="flex justify-end mr-4">
      <ProfileDropDown/>
      </div>
      <h1 className="text-center text-base font-bold">Active Trips</h1>
      <ActiveTrips />
    </div>
  );
};

export default Aside;
