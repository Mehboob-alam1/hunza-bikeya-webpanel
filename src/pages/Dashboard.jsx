import React from "react";
import UsersCard from "../components/UsersCard/UsersCard";
import Greeting from "../components/Greetings/Greeting";
import Aside from "../components/Aside/Aside";
import OverviewCharts from "../Charts/OverviewCharts";
import EarningsRadialBar from "../Charts/EarningsRadialBar";

const Dashboard = () => {
  return (
    // Dashboard Main Wrapper //
    <section className="flex ">
      {/* Dashboard Section */}
      <div className="p-4 w-[100%] col-span-2">
        {/* Greetings */}
        <div>
          <Greeting />
        </div>
        <div className="flex justify-between">
          <UsersCard />
          <UsersCard />
          <UsersCard />
        </div>

        {/* Dashboard Chart Section */}
        <div className="w-full shadow-lg shadow-gray-500/50 rounded-md p-6">
          <OverviewCharts />
        </div>

        <div className="flex justify-between">
          <div className="w-[48%] shadow-lg shadow-gray-500/50 rounded-md p-6 flex justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0CAA0D] text-[1.45rem] font-normal">
                Earnings
              </h3>
              <p className="text-[rgba(34, 34, 34, 0.81)] text-[0.726rem] font-normal">
                Total Expense
              </p>
              <h3 className="text-[#0CAA0D] text-[1.45rem] font-normal">
                $9589.59
              </h3>
              <p className="text-[rgba(34, 34, 34, 0.81)] text-[0.726rem] font-normal">
                Profit is <span>68%</span> More than last Month.
              </p>
            </div>
            <div>
              <EarningsRadialBar />
            </div>
          </div>

          <div className="w-[48%] flex flex-col justify-between">
            <div className="shadow-lg shadow-gray-500/50 rounded-md p-6 text-[#000] text-xl font-normal flex justify-between">
              <p>Online Passengers</p>
              <p className="text-[#FF5F55] text-sm]">21,464</p>
            </div>
            <div className="shadow-lg shadow-gray-500/50 rounded-md p-6 text-[#000] text-xl font-normal flex justify-between">
              <p>Online Drivers</p>
              <p className="text-[#FFD533] text-sm]">21,464</p>
            </div>
          </div>
        </div>
      </div>

      {/* Aside Section */}
      <div className=" w-[41%] p-2.5 border-l-2">
        <Aside />
      </div>
    </section>
  );
};

export default Dashboard;
