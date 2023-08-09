import React from "react";
import "./styles.css";

const BankModelSkeletion = ({ doc }) => {
  return (
    <div className="w-[34rem] h-[30vh] outer flex justify-center items-center">
      <span className="loader"></span>
    </div>
  );
};

export default BankModelSkeletion;
