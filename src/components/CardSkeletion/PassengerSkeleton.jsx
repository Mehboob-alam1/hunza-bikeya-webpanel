import React from "react";
import Skeleton from "react-loading-skeleton";

const PassengerSkeleton = ({ rows }) => {
  return (
    Array(rows).fill(0).map((_, index)=>(

    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-b">
      <td
        scope="row"
        className="pl-4 py-4 "
      >
      
          <Skeleton  />
      
      </td>
      <td className="pl-2 py-4">
        <Skeleton />
      </td>
      <td className="px-2 py-4">
        <Skeleton />
      </td>
      <td className="px-2 py-4">
        <button className="p-1 bg-green-500 text-white rounded-md">
          <Skeleton width={50} />
        </button>
      </td>
    </tr>

  )
    ))
};

export default PassengerSkeleton;
