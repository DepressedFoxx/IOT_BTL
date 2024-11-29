import { Button } from "antd";
import React from "react";
import Dashboard from "../components/dashboard";
import Bill from "../components/bill";

const Content = () => {

    const [tab, setTab] = React.useState("dashboard");

    return (
        <main className="flex gap-4 w-full h-[calc(100%-64px)] py-6">
            <div className="w-1/5 px-4 space-y-4">
                <button 
                    className="bg-blue-500 w-full py-2 rounded-full text-white "
                    onClick={() => setTab("dashboard")}
                >
                    Dashboard
                </button>
                <button 
                    className="bg-blue-500 w-full py-2 rounded-full text-white "
                    onClick={() => setTab("bill")}
                >
                    Bill
                </button>
            </div>
            <div className="w-4/5">
                {tab === "dashboard" && <Dashboard />}
                {tab === "bill" && <Bill/>}
            </div>
        </main>
    );
};

export default Content;