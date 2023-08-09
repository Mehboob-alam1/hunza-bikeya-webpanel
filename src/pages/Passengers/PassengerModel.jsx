import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";

const PassengerModel = ({ passenger, onClose }) => {
  
  return (
    <>
      {/* Main modal */}
      <div
      >
        <div className="relative   w-[100%] left-0 h-[100vh] top-0 flex justify-center items-center modelOpacity overflow-y-scroll pt-[18rem]  ">
          {/* Modal content */}
          <div className=" bg-white rounded shadow w-[45%] h-[132vh] z-index-50 bottom-0 top-5  ">
            {/* Modal header */}
            <div className="flex items-start justify-between rounded-lg dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
              <button
                onClick={onClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            {/* Modal body */}
            <div className="p-6 space">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className=" w-[100%] h-[15vh]">
                    <img
                      // src={passenger.img}
                      alt=""
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-lg">{passenger.name}</p>
                    <div className="flex gap-4 items-center">
                      <MdOutlineMail className="text-lg" />
                      <span className="text-[#107ACA] cursor-pointer">
                        {passenger.email}
                      </span>
                    </div>
                    <div className="flex gap-4 items-center">
                      <IoIosCall className="text-lg" />
                      <span>{passenger.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pr-4 gap-2 text-center justify-center items-center">
                  {/* <button
                    className={` btn btn-sm bg-green-100 text-green-500 status p-2 bg-gray-50 rounded-md ${
                      passenger.status.toLowerCase() === "online"
                        ? "online"
                        : "offline"
                    }`}
                  >
                    {passenger.status}
                  </button> */}
                  <div className="rating flex gap-2">
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
                  </div>
                  <span className="text-sm">125 Reviews</span>
                </div>
              </div>

              <div className="py-6 bg-gray-100 p-4 mt-20 rounded-md">
                <p className="border-b-2 pb-3 text-sm font-bold">
                  8 june 2023 to 24
                </p>

                <div className="flex pt-4">
                  <div className="flex flex-col gap-12">
                    <div className="flex gap-10 items-center">
                      <span className="text-sm text-gray-300">11:24</span>
                      <BsFillCircleFill className="text-green-400 text-xs" />
                    </div>
                    <div className="flex gap-10 items-center ">
                      <span className="text-sm text-gray-400">12:24</span>
                      <RxTriangleDown className="text-lg" />
                    </div>
                  </div>
                  <div className="flex flex-col pl-10 justify-center gap-2">
                    <span className="text-sm text-gray-500">
                      japan chok karimabad street 4
                    </span>
                    <span className="text-sm text-gray-500">
                      Aliabad Shopping Centreplaza,hnz
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-6 bg-[#FDE6E9] p-4 mt-5 rounded-md h-40">
                <div className="flex justify-between">
                  <p className="pb-3 text-sm font-bold">8 june 2023 to 24</p>
                  <p className="font-bold text-red-500">Cancelled</p>
                </div>
                <div className="flex gap-14">
                  <span className="text-sm text-gray-400">Reveview</span>
                  <span className="text-sm text-gray-500">Lorem ipsum street the london mccyk</span>
                </div>
              </div>

               <div className="py-6 bg-gray-100 p-4 mt-5 rounded-md">
                <p className="border-b-2 pb-3 text-sm font-bold">
                  8 june 2023 to 24
                </p>

                <div className="flex pt-4">
                  <div className="flex flex-col gap-12">
                    <div className="flex gap-10 items-center">
                      <span className="text-sm text-gray-300">11:24</span>
                      <BsFillCircleFill className="text-green-400 text-xs" />
                    </div>
                    <div className="flex gap-10 items-center ">
                      <span className="text-sm text-gray-400">12:24</span>
                      <RxTriangleDown className="text-lg" />
                    </div>
                  </div>
                  <div className="flex flex-col pl-10 justify-center gap-2">
                    <span className="text-sm text-gray-500">
                      japan chok karimabad street 4
                    </span>
                    <span className="text-sm text-gray-500">
                      Aliabad Shopping Centreplaza,hnz
                    </span>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Modal footer */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerModel;
