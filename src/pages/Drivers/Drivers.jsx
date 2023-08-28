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
  const { user } = useBikeya()
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  //state for  getting rider's data from database
  const [riderData, setRiderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [filterOption, setFilterOption] = useState('all')




  const handleToggle = (rider) => {
    setSelectedDriver(rider);
  };

  useEffect(() => {
    const ridersRef = ref(db, "/Riders/Profiles");

    const unsubscribe = onValue(ridersRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const ridersArray = Object.keys(data).map((userId) => ({
          id: userId,
          ...data[userId],
        }));
        setRiderData(ridersArray);
        setIsLoading(false);
      }
    });
    return () => {
      // Cleanup the listener when the component unmounts
      unsubscribe();
    };
  }, [db]);

  useEffect(() => {
    // Filter the riderData based on the search query
    // const filteredResults = riderData.filter(
    //   (rider) =>
    //     rider.userName.toLowerCase().includes(searchQuery) ||
    //     rider.userEmail.toLowerCase().includes(searchQuery) ||
    //     rider.userPhoneNumber.toLowerCase().includes(searchQuery)
    // );
    // setFilteredData(filteredResults);
    let filteredResults = [...riderData];

    if (searchQuery) {
      filteredResults = filteredResults.filter(
        (rider) =>
          rider.userName.toLowerCase().includes(searchQuery) ||
          rider.userEmail.toLowerCase().includes(searchQuery) ||
          rider.userPhoneNumber.toLowerCase().includes(searchQuery)
      );
    }

    if (filterOption === 'online') {
      filteredResults = filteredResults.filter((rider) => rider.status === 'online'); // Replace with your rider status field
    } else if (filterOption === 'trips') {
      filteredResults = filteredResults.sort((a, b) => b.numTrips - a.numTrips); // Replace with your rider trips field
    } else if (filterOption === 'cancelledTrips') {
      filteredResults = filteredResults.sort((a, b) => b.numCancelledTrips - a.numCancelledTrips); // Replace with your rider cancelled trips field
    }

    setFilteredData(filteredResults);
  }, [riderData, searchQuery, filterOption]);
  // }, [riderData, searchQuery]);

  const handleFilterChange = (e) => {
    const option = e.target.value;
    setFilterOption(option);
  }
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };


  const usersAval = () => {
    onValue(ref(db, '/Riders/available'), (snapshot) => {
      const aval = snapshot.val();
      console.log(aval)
    })
  }


  // all nodes

  const [banners, setBanners] = useState([]);
  const [hunzaBykea, setHunzaBykea] = useState([]);
  const [riderCancelledRides, setRiderCancelledRides] = useState([]);
  const [riderCompletedRides, setRiderCompletedRides] = useState([]);
  const [riders, setRiders] = useState([]);
  const [userCancelledRides, setUserCancelledRides] = useState([]);
  const [userCompletedRides, setUserCompletedRides] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, "Banners");
    const dbRef2 = ref(db, "HunzaBykea");
    const dbRef3 = ref(db, "RiderCancelledRides");
    const dbRef4 = ref(db, "RiderCompletedRides");
    const dbRef5 = ref(db, "Riders");
    const dbRef6 = ref(db, "UserCancelledRides");
    const dbRef7 = ref(db, "UserCompletedRides");

    Promise.all([
      // ====Banners Object ====///
      onValue(dbRef, (snapshot) => {

        let bannerdata = []
        snapshot.forEach((childSnapshot) => {
          let keyname = childSnapshot.key;
          let nestedData = childSnapshot.val();
          bannerdata.push(nestedData);
        });

        setBanners(bannerdata);
        // console.log(snapshot.val());
      }),

      // ==== HunzaBykea Object -===//
      onValue(dbRef2, (snapshot) => {
        let recordnusted = [];
        snapshot.forEach((childSnapshot) => {
          let keyname = childSnapshot.key;
          let nestedData = childSnapshot.val();

          // id there is nusted node we have  Iterate through them
          // Object.keys(nestedData).forEach((nestedKey) => {
          //   let nestedObj = nestedData[nestedKey];
          //   let data = {
          //     key: nestedKey,
          //     email: nestedObj.email,
          //     name: nestedObj.name,
          //     phone: nestedObj.phone,
          //     token: nestedObj.token,
          //     image: nestedObj.image,
          //   };

          //   recordnusted.push(data);
          // });

          recordnusted.push(nestedData)
        });
        setHunzaBykea(recordnusted);
        // console.log(recordnusted);
      }),

      //=== RiderCancelledRides Object ===//
      onValue(dbRef3, (snapshot) => {
        // use to store nusted nodes
        let cenclerides = [];

        // use forEach loop to itrate nusted nodes
        snapshot.forEach((childSnapshot) => {
          let keyname = childSnapshot.key;
          let nestedData = childSnapshot.val();
          cenclerides.push(nestedData);
        });

        setRiderCancelledRides(cenclerides);
        // console.log(cenclerides);
      }),

      //=== RiderCompletedRides Object ===//
      onValue(dbRef4, (snapshot) => {
        //  store whole object with nusted nodes
        let cmpletrids = [];

        // itates nodes
        snapshot.forEach((childSnapshot) => {
          let keyname = childSnapshot.key;
          let nestedData = childSnapshot.val();
          cmpletrids.push(nestedData);
        });

        setRiderCompletedRides(cmpletrids);
        // console.log(cmpletrids);
      }),

      //=== Riders Object ===//
      onValue(dbRef5, (snapshot) => {
        //store whole object here
        const riderstore = [];
        // itates nodes
        snapshot.forEach((childSnapshot) => {
          let keyname = childSnapshot.key;
          let nestedData = childSnapshot.val();
          riderstore.push(nestedData);
        });
        setRiders(riderstore);
        // console.log(riderstore);
      }),

      //=== UserCancelledRides Object ===//
      onValue(dbRef6, (snapshot) => {
        // object store here
        let cencelerides = [];
        // itrate with all nusted nodes
        snapshot.forEach((childSnapshot) => {
          let keyname = childSnapshot.key;
          let nestedData = childSnapshot.val();
          cencelerides.push(nestedData);
        });
        setUserCancelledRides(cencelerides);
        // console.log(cencelerides);
      }),

      //=== UserCompletedRides Object ===//
      onValue(dbRef7, (snapshot) => {
        // object store here
        let compleriders = [];
        // itrate with all nusted nodes
        snapshot.forEach((childSnapshot) => {
          let keyname = childSnapshot.key;
          let nestedData = childSnapshot.val();
          compleriders.push(nestedData);
        });

        setUserCompletedRides(compleriders);
        // console.log(compleriders);
      }),
    ])
      .then(() => {})
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  // allnode data in one varibale
  const allNodesData = [
    ...banners,
    ...hunzaBykea,
    ...riderCancelledRides,
    ...riderCompletedRides,
    ...riders,
    ...userCancelledRides,
    ...userCompletedRides,
  ];

  console.log(allNodesData);


  return (
    <div className="w-[100%] pl-5 pr-6 pt-6 bg-gray-50">
      <div className="flex justify-between ">
        <span className="text-3xl">Drivers</span>

        <ProfileDropDown />
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
          {/* <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search riders..." /> */}
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="online">Online</option>
          <option value="trips">Number of Trips</option>
          <option value="cancelledTrips">Cancelled Trips</option>
        </select>
          {/* <select
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
          </select> */}
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
              {filteredData.map((rider) => (
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
                      <td className="px-4 py-4">33</td>
                      <td className="px-4 py-4">444</td>
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
