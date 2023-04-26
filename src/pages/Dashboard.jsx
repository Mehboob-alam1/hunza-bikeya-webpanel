import React from "react";
import Hello from "../assets/hello.png";
import UsersCard from "../components/UsersCard/UsersCard";

const Dashboard = () => {
  return (
    <section className="py-5 px-8">
      <h3 className="text-xl font-bold flex items-center gap-x-2">
        Hello Muiz! <img src={Hello} alt="hello" width="32" />
      </h3>
        <div className="flex gap-4">
          <UsersCard />
          <UsersCard />
          <UsersCard />
        </div>
    </section>
  );
};

export default Dashboard;
