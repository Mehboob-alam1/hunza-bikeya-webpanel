import React from "react";
import BankModelSkeletion from "../../components/CardSkeletion/BankModelSkeletion";

const BankModel = ({ bankData, isLoading, onClose }) => {
  console.log(bankData);
  return (
    <>
      {/* Main modal */}
      <div className="relative w-[100%] left-0 h-[100vh] top-0 flex justify-center items-center modelOpacity overflow-y-scroll pt-[18rem]  ">
        {/* Modal content */}
        <div className=" bg-white rounded shadow w-[45%] h-[50vh] z-index-50 mt-[-14rem]  ">
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
          <div className="p-6 space ">
            <div className="">
              <h3 className="text-2xl font-bold mb-2 text-center">
                Rider Bank Details
              </h3>
              <div className="flex gap-3">
                {isLoading ? (
                  <BankModelSkeletion />
                ) : (
                  <>
                    {bankData && (
                      <div className="flex flex-col gap-5 mt-5 ml-10">
                        <div className="flex gap-[25px] text-xl justify-between text-left">
                          <h5>User Name:</h5>
                          <span className="font-bold text-green-600">
                            {bankData.userBankName}
                          </span>
                        </div>
                        <div className="flex gap-[25px] text-xl justify-between text-left">
                          <h5>User Bank:</h5>
                          <span className="font-bold text-green-600">
                            {bankData.bankName}
                          </span>
                        </div>
                        <div className="flex gap-[25px] text-xl justify-between text-left">
                          <h5>User Account Number:</h5>
                          <span className="font-bold text-green-600">
                            {bankData.userAccountNumber}
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankModel;
