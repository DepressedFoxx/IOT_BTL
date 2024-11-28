import React from "react";

const WaterCell = () => {
    return (
        <div className="flex justify-between w-1/3 h-20 items-center bg-[#2e312e] rounded-2xl px-4">
            <span className="text-white text-2xl">Total water used: </span>
            <span className="text-white text-2xl ml-2">m3</span>
        </div>
    );
};

export default WaterCell;