import React from "react";
import Hello from "../assets/hello.png";

const Dashboard = () => {
  return (
    <section className="py-5 px-8">
      <h3 className="text-xl font-bold flex items-center gap-x-2">
        Hello Muiz! <img src={Hello} alt="hello" width="32" />
      </h3>
    </section>
  );
};

export default Dashboard;
