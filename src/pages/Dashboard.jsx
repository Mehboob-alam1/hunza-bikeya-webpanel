import React from "react";
import Hello from "../assets/hello.png";
import UsersCard from "../components/UsersCard/UsersCard";
import Greeting from "../components/Greetings/Greeting";

const Dashboard = () => {
  return (
    <section className="py-5 px-8">
      <Greeting/>
        <div className="flex gap-4">
          <UsersCard />
          <UsersCard />
          <UsersCard />
        </div>
    </section>
  );
};

export default Dashboard;
