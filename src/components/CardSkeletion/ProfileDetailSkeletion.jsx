import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

const ProfileDetailSkeletion = (pdetail) => {
  return Array(pdetail)
    .fill(0)
    .map((_, index) => (
      <div className="flex justify-between mb-10" key={index}>
        <div className="flex gap-3">
          <div className=" w-[6rem] h-[16vh] rounded">
           <Skeleton width={100} height={100} className="rounded">
           </Skeleton>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="font-bold text-lg"><Skeleton width={200} className="ml-8"/></p>
            <div className="flex gap-4 items-center">
              <MdOutlineMail className="text-lg" />
              <span className="text-[#107ACA] cursor-pointer">
              <Skeleton width={200}/>
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <IoIosCall className="text-lg" />
              <span><Skeleton width={200}/></span>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default ProfileDetailSkeletion;
