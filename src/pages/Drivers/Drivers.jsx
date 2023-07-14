import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { CgChevronDown } from "react-icons/cg";
import profile from "../../assets/passengerImages/profile.png";
import "./Drivers.css";
import { AiOutlineSearch } from "react-icons/ai";
import { DriversData } from "./DriversData";
import DriversModel from "./DriversModel";

const Drivers = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);
  
  const handleToggle = (driver) => {
    setSelectedDriver(driver)
  };
  return (
    <div className="w-[100%] pl-5 pr-6 pt-6 bg-gray-50">
      <div className="flex justify-between ">
        <span className="text-3xl">Drivers</span>

        <div className="flex items-center gap-4 ">
          <div className="notification">
            <GrNotification />
          </div>

          <div className="rounded-full h-6 w-6 flex items-center justify-center border-green-500 border-2">
            <img src={profile} alt="" className="rounded-full" />
          </div>
          <CgChevronDown />
        </div>
      </div>
      <div className="flex justify-between pt-6 items-center">
        <div className="flex items-center gap-1 bg-white p-1 shadow rounded-sm">
          <AiOutlineSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg">Sort By:</span>
          <select
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-50 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          >
            <option selected value="Trips 0 to Eng to Limit">
              Trips 0 to Eng to Limit
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-sm mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr className="border-b border-grey-50">
              <th scope="col" className="px-6 py-3 border-r">
                Name
              </th>
              <th scope="col" className="px-6 py-3 border-r">
                Email
              </th>
              <th scope="col" className="px-6 py-3 border-r">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 border-r">
                Trips
              </th>
              <th scope="col" className="pl-3 py-3">
                Canceled
              </th>
              <th scope="col" className="px-0 py-3">
                status
              </th>
              <th scope="col" className="px-0 py-3"></th>
            </tr>
          </thead>
          {DriversData.map((driver) => (
            <tbody key={driver.id}>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-b">
                <td
                  scope="row"
                  className="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2"
                >
                  <img src={driver.img} alt="" />
                  <span>{driver.name}</span>
                </td>
                <td className="pl-2 py-4">{driver.email}</td>
                <td className="px-2 py-4">{driver.phone}</td>
                <td className="px-4 py-4">{driver.trips}</td>
                <td className="px-4 py-4">{driver.cancel}</td>
                <td className="px-0 py-4">
                  <button
                    className={`status p-2 bg-gray-50 rounded-md ${
                      driver.status.toLowerCase() === "online"
                        ? "online"
                        : "offline"
                    }`}
                  >
                    {driver.status}
                  </button>
                </td>
                <td className="px-2 py-4">
                  <button
                    className="p-1 bg-green-500 text-white rounded-md"
                    onClick={() => handleToggle(driver)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

      </div>
        <div className="absolute top-[0] left-0 z-index-[999] w-[100%]">
          {selectedDriver && (
            <DriversModel
              driver={selectedDriver}
              onClose={() => setSelectedDriver(null)}
            />
          )}
        </div>
    </div>
  );
};

export default Drivers;
