import React from "react";

const TotalMoneyCell = () => {
    return (
        <div className="flex justify-between w-1/3 h-20 items-center bg-[#2e312e] rounded-2xl px-4">
            <span className="text-white text-2xl">Total money: </span>
            <span className="text-white text-2xl ml-2">VND</span>
        </div>
    );
};

export default TotalMoneyCell;