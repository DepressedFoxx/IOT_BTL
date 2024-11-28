import React from "react";
import axios from "axios";

const WaterCell = () => {

    const [waterCount, setWaterCount] = React.useState(0);

    React.useEffect(() => {
        axios.get("https://blynk.cloud/external/api/get?token=VUKDdjF1InBGGWODiGHaS80aRZt__sXR&V3")
            .then(response => {
                const value = response.data;
                setWaterCount(value);
            })
            .catch(error => console.error("Error fetching data:", error));
    });

    const calculateMoney = (waterCount) => {
        return waterCount * 1000;
    }

    return (
        <div className="flex gap-4 w-full">
            <div className="flex justify-between w-1/3 h-20 items-center bg-[#2e312e] rounded-2xl px-4">
                <span className="text-white text-2xl">Total water used: </span>
                <span className="text-white text-2xl">{waterCount}</span>
                <span className="text-white text-2xl ml-2">m3</span>
            </div>
            <div className="flex justify-between w-1/3 h-20 items-center bg-[#2e312e] rounded-2xl px-4">
                <span className="text-white text-2xl">Total money: </span>
                <span className="text-white text-2xl">{calculateMoney(waterCount)}</span>
                <span className="text-white text-2xl ml-2">VND</span>
            </div>
        </div>
    );
};

export default WaterCell;