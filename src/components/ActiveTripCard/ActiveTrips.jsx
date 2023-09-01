import React, { useEffect, useState } from "react";
import Arrow from "../../assets/Arrow.svg";
import Passenger1 from "../../assets/Passenger1.png";
import Driver1 from "../../assets/Driver1.png";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebaseConfig";
import axios from "axios";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmFpZ3VsbGFoNDQiLCJhIjoiY2xoOGx4dWc4MDl1NDNlbmF4djRzcDNwNCJ9.l4v24ee6iOf3f_THqmzfAA";

const ActiveTrips = () => {
  const [activeTrips, setActiveTrips] = useState([]);
  useEffect(() => {
    onValue(ref(db, "RiderActiveRides"), (snapshot) => {
      console.log(snapshot.val());

      const tripRef = snapshot.val();
      const tripsArray = Object.values(tripRef); //converts obj to array
      
      const fetchLocations = async () => {
        const ridesWithLocation = await Promise.all(
          tripsArray.map(async (ride) => {
            const userOriginLatitude = ride.userOriginLatitude;
            const userOriginLongitude = ride.userOriginLongitude;
            const userDestLatitude = ride.userDestLatitude;
            const userDestLongitude = ride.userDestLongitude;

            const originalLocation = await getLocationFromCoordinates(
              userOriginLatitude,
              userOriginLongitude
            );
            const destinationLocation = await getLocationFromCoordinates(
              userDestLatitude,
              userDestLongitude
            );

            return {
              ...ride,
              originalLocation,
              destinationLocation,
            };
          })
        );
        setActiveTrips(ridesWithLocation);
      };

      fetchLocations();
    });
  }, []);

  const getLocationFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_TOKEN}`
      );
      const features = response.data.features;
      if (features.length > 0) {
        return features[0].place_name;
      } else {
        return "Unknown Location";
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      return "Unknown Location";
    }
  };

  return (
    <div>
      {activeTrips.map((tripsVal, index) => {
        const tripsDate = new Date(parseInt(tripsVal.currentTime)); //Converting date from millSec to Date;
        const formatedTime = tripsDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }); //Converts milliSecs into time

        return (
          <div
            className="shadow-lg shadow-y-gray-500/50 rounded-md px-1 py-6 my-4"
            key={index}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="text-[12px]">{formatedTime}</div>
              <img src={Arrow} alt="" />
              <div className="flex mt-1 flex-col">
                <h3 className="text-[11.6px]">{tripsVal.originalLocation}</h3>
                <h3 className="text-[11.6px]">{tripsVal.destinationLocation}</h3>
              </div>
            </div>

            <div className="flex justify-around">
              <div className="flex mt-2">
                <img src={Passenger1} alt="passenger" className="mr-2" />
                <div>
                  <p className="text-[12px]">Passenger</p>
                  <h3 className="text-[12px]">{tripsVal.riderName}</h3>
                </div>
              </div>
              <div className="flex mt-2">
                <img src={Driver1} alt="driver" className="mr-2" />
                <div>
                  <p className="text-[12px]">Driver</p>
                  <h3 className="text-[12px]">{tripsVal.driverName}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveTrips;
