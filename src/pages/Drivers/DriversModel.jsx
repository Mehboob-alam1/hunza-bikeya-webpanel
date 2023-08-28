import React, { useEffect, useMemo, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { RiEBikeFill } from "react-icons/ri";
import { AiFillBank } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import process from "process";
import DocumentsModel from "./DocumentsModel";
import { db } from "../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import Location from "../../assets/location.png";
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import BankModel from "./BankModel";
import Rating from "../../components/RatingComponent/Rating";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmFpZ3VsbGFoNDQiLCJhIjoiY2xoOGx4dWc4MDl1NDNlbmF4djRzcDNwNCJ9.l4v24ee6iOf3f_THqmzfAA"; // Set your mapbox token here

const DriversModel = ({ rider, onClose, stars, reviews }) => {
  const [vehData, setVehData] = useState([]);

  // bank detail state
  const [showBankDetails, setShowBankDetails] = useState(null);
  const [bankData, setBankData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // documents state
  const [selectDocument, setSelectedDocument] = useState(null);
  const [documentsData, setDocumentsData] = useState(null);

  // fetching vehicle information
  useEffect(() => {
    if (rider) {
      onValue(ref(db, `/Riders/Vehicles/${rider.userId}`), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setVehData(data);
      });
    }
  }, [rider]);

  // fetching documents

  const handleDocument = () => {
    if (rider) {
      onValue(ref(db, `/Riders/documents/${rider.userId}`), (snapshot) => {
        const docData = snapshot.val();
        console.log(docData);
        setDocumentsData(docData);
      });
    }
    setIsLoading(false);
    setSelectedDocument(true);
  };

  // fetching bank details
  const handleBank = () => {
    if (rider) {
      onValue(ref(db, `/Riders/BankDetails/${rider.userId}`), (snapshot) => {
        const bankData = snapshot.val();
        setBankData(bankData);
      });
      setShowBankDetails(true);
      setIsLoading(false);
    }
  };

  // fetching user location 

  const [viewPort, setViewPort] = useState({
    latitude: 35.9208102,
    longitude: 74.314044,
    zoom: 12,
  })

  const [newPlace, setNewPlace] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [popupContent, setPopupContent] = useState(null);

  const handleMarkerClick = async (location) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.longitude},${location.latitude}.json?access_token=${MAPBOX_TOKEN}`
      );
      const data = await response.json();

      // Look for more specific locality levels in the context array
      const specificLocality = data.features.find(feature =>
        ['quarter', 'ward', 'neighborhood'].includes(feature.place_type[0])
      );

      const placeName = specificLocality ? specificLocality.text : data.features[0].place_name;
      setPopupContent(placeName);

      setSelectedLocation(location);

      setViewPort({
        ...viewPort,
        latitude: parseFloat(location.latitude),
        longitude: parseFloat(location.longitude),
        zoom: 20, // Adjust the zoom level as needed
      });
    } catch (error) {
      console.error('Error fetching place information:', error);
    }
  };

  useEffect(() => {
    if (selectedLocation) {
      setViewPort({
        latitude: parseFloat(selectedLocation.latitude),
        longitude: parseFloat(selectedLocation.longitude),
        zoom: 15, // Adjust the zoom level as needed
      });
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (rider) {
      onValue(ref(db, `/Riders/location/${rider.userId}`), (snapshot) => {
        const locData = snapshot.val();
        // console.log(latitude, longitude);
        setNewPlace(locData);
      });
    }
  }, [])

  // fetching active rides
  const [riderActiveRides, setRiderActiveRides] = useState([]);
  useEffect(() => {
    if (rider) {
      onValue(ref(db, 'RiderActiveRides/'), (snapshot) => {
        const riderRef = snapshot.val();
        const riderActiveArray = Object.values(riderRef)
        setRiderActiveRides(riderActiveArray)
      })
    }
    console.log("current Rider", rider)
  }, [])

  return (
    <>
      {/* Main modal */}
      <div>
        <div className="absolute w-[100%] left-0 h-[100vh] top-0 flex justify-center items-start modelOpacity overflow-y-scroll pt-[3rem] flex  ">
          {/* Modal content */}
          <div className=" bg-white rounded shadow w-[35%] h-content z-index-50 bottom-0 top-5  ">
            {/* Modal header */}
            <div className="flex items-start justify-between rounded-lg dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
            </div>
            {/* Modal body */}
            <div className="p-6 space mt-4">
              <div className="flex justify-between">
                <div className="flex gap-1 items-start">
                  <div className=" w-[100%] h-[15vh]">
                    {/* <img src={driver.img} alt="" className="w-[90%] h-[90%]" /> */}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-md">{rider.userName}</p>
                    <div className="flex gap-2 items-center">
                      <MdOutlineMail className="text-md" />
                      <span className="text-[#107ACA] cursor-pointer text-sm">
                        {rider.userEmail}
                      </span>
                    </div>
                    <div className="flex gap-4 items-center">
                      <IoIosCall className="text-md" />
                      <span className="text-sm">{rider.userPhoneNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pr-4 gap-2 text-center justify-center items-center">
                  <button
                    className={` btn btn-sm bg-green-100 text-green-500 text-xs status  bg-gray-50 rounded-md `}
                  >
                    {rider.avaliable === true ? "Online" : "Offline"}
                  </button>
                  <Rating stars={stars} reviews={reviews} />
                  {/* <div className="rating flex gap-1">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#FFD533]"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#FFD533]"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#FFD533]"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-[#FFD533]"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      checked
                      className="mask mask-star bg-[#FFD533]"
                    />
                  </div> */}
                  {/* <span className="text-xs">125 Reviews</span> */}
                </div>
              </div>
              {/* trips */}

              {
                riderActiveRides.map((activeride) => (
                  <div className="py-6 bg-gray-100 p-4 pb-3 pt-2 mt-10 rounded-md">
                    <p className="border-b-2 pb-2 text-xs font-bold">
                      {activeride.currentTime}
                    </p>

                    <div className="flex pt-2">
                      <div className="flex flex-col gap-6">
                        <div className="flex gap-10 items-center justify-center">
                          <span className="text-xs text-gray-300">11:24</span>
                          <BsFillCircleFill className="text-green-400 text-xs" />
                        </div>
                        <div className="flex gap-10 items-center ">
                          <span className="text-xs text-gray-400">12:24</span>
                          <RxTriangleDown className="text-lg" />
                        </div>
                      </div>
                      <div className="flex flex-col pl-10 justify-center gap-2">
                        <span className="text-xs text-gray-500">
                          japan chok karimabad street 4
                        </span>
                        <span className="text-xs text-gray-500">
                          Aliabad Shopping Centreplaza,hnz
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              }
              {/* trips */}

              <div className="py-6 bg-gray-100 p-4 pb-3 pt-2 mt-5 rounded-md">
                <p className="border-b-2 pb-2 text-xs font-bold">
                  8 june 2023 to 24
                </p>

                <div className="flex pt-2">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-10 items-center justify-center">
                      <span className="text-xs text-gray-300">11:24</span>
                      <BsFillCircleFill className="text-green-400 text-xs" />
                    </div>
                    <div className="flex gap-10 items-center ">
                      <span className="text-xs text-gray-400">12:24</span>
                      <RxTriangleDown className="text-lg" />
                    </div>
                  </div>
                  <div className="flex flex-col pl-10 justify-center gap-2">
                    <span className="text-xs text-gray-500">
                      japan chok karimabad street 4
                    </span>
                    <span className="text-xs text-gray-500">
                      Aliabad Shopping Centreplaza,hnz
                    </span>
                  </div>
                </div>
              </div>

              {/* cancelled */}
              <div className="py-6 bg-[#FDE6E9] p-4 mt-5 rounded-md h-[16vh]">
                <div className="flex justify-between">
                  <p className="pb-3 text-xs font-bold">8 june 2023 to 24</p>
                  <p className="font-bold text-red-500 text-sm">Cancelled</p>
                </div>
                <div className="flex gap-14">
                  <span className="text-xs text-gray-400">Reveview</span>
                  <span className="text-xs text-gray-500">
                    Lorem ipsum street the london mccyk
                  </span>
                </div>
              </div>

              <div className="py-6 bg-gray-100 p-4 pb-3 pt-2 mt-5 rounded-md">
                <p className="border-b-2 pb-2 text-xs font-bold">
                  8 june 2023 to 24
                </p>

                <div className="flex pt-2">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-10 items-center justify-center">
                      <span className="text-xs text-gray-300">11:24</span>
                      <BsFillCircleFill className="text-green-400 text-xs" />
                    </div>
                    <div className="flex gap-10 items-center ">
                      <span className="text-xs text-gray-400">12:24</span>
                      <RxTriangleDown className="text-lg" />
                    </div>
                  </div>
                  <div className="flex flex-col pl-10 justify-center gap-2">
                    <span className="text-xs text-gray-500">
                      japan chok karimabad street 4
                    </span>
                    <span className="text-xs text-gray-500">
                      Aliabad Shopping Centreplaza,hnz
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal footer */}
          </div>

          <div className="bg-[#F6F7F7] w-[35%] p-4 pt-1 pr-1">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex self-end items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="black"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <p className="text-lg font-bold mb-3">Vehicle Information</p>

            <div className="flex gap-10 items-start justify-start">
              <div className=" w-[20%] h-[15vh] ">
                {/* <img
                  src={driver.img}
                  alt=""
                  className="w-[100%] h-[90%] object-cover" d
                /> */}
              </div>
              { }

              {vehData && (
                <div className="flex flex-col gap-2 text-sm">
                  <p className="">
                    Vehicle Name:{" "}
                    <span className="font-bold">{vehData.vehicleBrand}</span>
                  </p>
                  <div className="flex gap-2 items-center">
                    <span className=" cursor-pointer">
                      Vehicle ModeL:{" "}
                      <span className="font-bold">{vehData.vehicleModel}</span>
                    </span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="">
                      Vehicle Type:{" "}
                      <span className="font-bold">{vehData.vehicleType}</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-4  pr-2 mt-10">
              <div className="card text-center flex flex-col gap-4 items-center bg-white pl-5 pr-5 pb-3 pt-3 rounded-md">
                <AiFillBank className="text-2xl" />
                <span className="text-sm">Bank Details</span>
                <button
                  className="btn btn-sm btn-outline  text-green-500 border-green"
                  onClick={handleBank}
                >
                  View
                </button>
              </div>
              <div className="card flex flex-col gap-4 text-center items-center bg-white pl-6 pr-5 pb-3 pt-3 rounded-md">
                <RiEBikeFill className="text-2xl" />
                <span className="text-sm">His Booking</span>
                <button className="btn btn-sm btn-outline text-green-500 border-green">
                  View
                </button>
              </div>
              <div className="card flex flex-col gap-4 text-center items-center bg-white pl-6 pr-5 pb-3 pt-3 rounded-md">
                <IoDocumentTextOutline className="text-2xl" />
                <span className="text-sm">Docoments</span>
                <button
                  className="btn btn-sm btn-outline text-green-500 border-green"
                  onClick={handleDocument}
                >
                  View
                </button>
              </div>
            </div>

            {/* last active location */}

            <div className="mt-5">
              <h6 className="font-bold">Last Active Location</h6>
              <ReactMapGl
                {...viewPort}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                height={290}
                width={420}
                mapStyle="mapbox://styles/baigullah44/clku9wg7u000a01qpagiydb3t"
                onViewportChange={(viewPort) => setViewPort(viewPort)}
              // onDblClick={handleClick}
              >
                {newPlace ? (
                  <div key={newPlace.userId}>
                    <Marker
                      latitude={parseFloat(newPlace.latitude)}
                      longitude={parseFloat(newPlace.longitude)}
                      onClick={() => handleMarkerClick(newPlace)}
                    >
                      {console.log("latitude", newPlace.latitude, "longitude", newPlace.longitude)}
                      <img src={Location} alt="" width={40} />
                    </Marker>
                  </div>
                ) : null}

                {selectedLocation && popupContent && (
                  <Popup
                    latitude={parseFloat(selectedLocation.latitude)}
                    longitude={parseFloat(selectedLocation.longitude)}
                    onClose={() => {
                      setSelectedLocation(null);
                      setPopupContent(null);
                    }}
                  >
                    <div>{popupContent}</div>
                  </Popup>
                )}

              </ReactMapGl>
            </div>
          </div>
        </div>
        <div className="absolute top-[0] left-0 z-index-[999] w-[100%]">
          {selectDocument && (
            <DocumentsModel
              documentData={documentsData}
              isLoading={isLoading}
              onClose={() => setSelectedDocument(false)}
            />
          )}
        </div>
        <div className="absolute top-[0] left-0 z-index-[999] w-[100%]">
          {showBankDetails && (
            <BankModel
              bankData={bankData}
              isLoading={isLoading}
              onClose={() => setShowBankDetails(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DriversModel;
