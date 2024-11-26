import React from "react";

const TemperatureCell = ({ temperature }) => {
    return (
        <div className="flex w-48 h-20 items-center bg-[#2e312e] rounded-2xl">
            <span className="text-white text-2xl">DEMO: {temperature}</span>
            <span className="text-white text-lg ml-2">°C</span>
        </div>
    );
};

export default TemperatureCell;