import React, { useState, useEffect } from "react";
import { GrNotification } from "react-icons/gr";
import { CgChevronDown } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import profile from "../../assets/passengerImages/profile.png";
import DriversModel from "./DriversModel";
import { db } from "../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import CardSkeletion from "../../components/CardSkeletion/CardSkeletion";
import "react-loading-skeleton/dist/skeleton.css";
import "./Drivers.css";
import { useBikeya } from "../../context/Context";
import ProfileDropDown from "../../components/ProfileDropDown/ProfileDropDown";

const Drivers = () => {
  const {user} = useBikeya()
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [searchQuery, setSearhQuery] = useState("");
  //state for  getting rider's data from database
  const [riderData, setRiderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearhQuery(query);
    const filteredData = riderData.filter(
      (rider) =>
        rider.userName.toLowerCase().startsWith(query) ||
        rider.userEmail.toLowerCase().startsWith(query) ||
        rider.userPhoneNumber.toLowerCase().includes(query)
    );
    setRiderData(filteredData);
  };

  const handleToggle = (rider) => {
    setSelectedDriver(rider);
  };

  useEffect(() => {
    onValue(ref(db, "/Riders/Profiles"), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data !== null) {
        const ridersArray = Object.keys(data).map((userId) => ({
          id: userId,
          ...data[userId],
        }));
        setRiderData(ridersArray);
        setIsLoading(false);
      }
    });
  }, []);

  const usersAval = ()=>{
    onValue(ref(db, '/Riders/available'), (snapshot)=>{
      const aval = snapshot.val();
      console.log(aval)
    })
  }

  return (
    <div className="w-[100%] pl-5 pr-6 pt-6 bg-gray-50">
      <div className="flex justify-between ">
        <span className="text-3xl">Drivers</span>

        <ProfileDropDown/>
      </div>
      <div className="flex justify-between pt-6 items-center">
        <div className="flex items-center gap-1 bg-white p-1 shadow rounded-sm">
          <AiOutlineSearch className="text-xl" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
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
          {isLoading ? (
            <CardSkeletion rows={2} />
          ) : (
            <>
              {riderData.map((rider) => (
                <>
                  <tbody key={rider.userId}>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-b">
                      <td
                        scope="row"
                        className="pl-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2"
                      >
                        {/* <img src={driver.img} alt="" /> */}
                        <span>{rider.userName}</span>
                      </td>
                      <td className="pl-2 py-4">{rider.userEmail}</td>
                      <td className="px-2 py-4">{rider.userPhoneNumber} </td>
                      <td className="px-4 py-4">0</td>
                      <td className="px-4 py-4">0</td>
                      <td className="px-0 py-4">
                        <button className={`status p-2 bg-gray-50 rounded-md `}>
                          {rider.available ? "Online" : "Offline"}
                        </button>
                      </td>
                      <td className="px-2 py-4">
                        <button
                          className="p-1 bg-green-500 text-white rounded-md"
                          onClick={() => handleToggle(rider)}
                        >
                          Details
                        </button>                                             
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </>
          )}
        </table>
      </div>
      <div className="absolute top-[0] left-0 z-index-[999] w-[100%]">
        {selectedDriver && (
          <DriversModel
            rider={selectedDriver}
            onClose={() => setSelectedDriver(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Drivers;
