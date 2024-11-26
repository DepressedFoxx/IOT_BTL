import { Button } from "antd";
import React from "react";
import Dashboard from "../components/dashboard";

const Content = () => {
    return (
        <main className="flex gap-4 w-full h-[calc(100%-64px)] pt-6">
            <div className="w-1/5 px-4">
                <button className="bg-[#88c47c] w-full py-2 rounded-full">Dashboard</button>
            </div>
            <div className="w-4/5">
                <Dashboard />
            </div>
        </main>
    );
};

export default Content;