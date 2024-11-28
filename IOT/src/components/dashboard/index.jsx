import React from "react";
import WaterCell from "../waterCell";
import { Switch } from "antd";
import ChartTDS from "../chartTDS";
import ChartPH from "../chartPH";
import axios from "axios";

const Dashboard = () => {

    const handleOpenVans = (checked) => {
        if (checked) {
            console.log("Open vans");
            axios.get("https://blynk.cloud/external/api/update?token=VUKDdjF1InBGGWODiGHaS80aRZt__sXR&V0=1")
                .then(response => console.log("Response:", response))
                .catch(error => console.error("Error:", error));
        } else {
            console.log("Close vans");
            axios.get("https://blynk.cloud/external/api/update?token=VUKDdjF1InBGGWODiGHaS80aRZt__sXR&V0=0")
                .then(response => console.log("Response:", response))
                .catch(error => console.error("Error:", error));
        }
    }

    return (
        <div className="space-y-4 px-4">
            <div className="flex justify-between">
                <span className="text-white text-2xl ml-3">System Overview</span>
                <div className="flex items-center">
                    <span className="text-white text-2xl ml-3">Open Vans</span>
                    <Switch className="ml-4" onChange={handleOpenVans} />
                </div>
            </div>
            <div className="flex gap-4">
                <WaterCell />
            </div>
            <ChartTDS/>
            <ChartPH/>
        </div>
    )
};

export default Dashboard;