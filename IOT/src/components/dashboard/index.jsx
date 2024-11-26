import React from "react";
import TemperatureCell from "../temperatureCell";

const Dashboard = () => {
    return (
        <div className="space-y-4">
            <span className="text-white text-2xl ml-3">System Overview</span>
            <TemperatureCell temperature={25} />
        </div>
    )
};

export default Dashboard;