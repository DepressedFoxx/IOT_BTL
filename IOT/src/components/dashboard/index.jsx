import React from "react";
import WaterCell from "../waterCell";
import TotalMoneyCell from "../totalMoneyCell";
import { Switch } from "antd";
import ChartTDS from "../chartTDS";
import ChartPH from "../chartPH";

const Dashboard = () => {
    return (
        <div className="space-y-4 px-4">
            <div className="flex justify-between">
                <span className="text-white text-2xl ml-3">System Overview</span>
                <div className="flex items-center">
                    <span className="text-white text-2xl ml-3">Open Vans</span>
                    <Switch className="ml-4" defaultChecked />
                </div>
            </div>
            <div className="flex gap-4">
                <WaterCell />
                <TotalMoneyCell />
            </div>
            <ChartTDS/>
            <ChartPH/>
        </div>
    )
};

export default Dashboard;