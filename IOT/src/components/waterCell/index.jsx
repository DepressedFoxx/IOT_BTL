import React from "react";
import axios from "axios";
import { WaterIcon } from "../../assets/WaterIcon";
import { MoneyIcon } from "../../assets/MoneyIcon";
import { WaveForm } from "../../assets/WaveForm";
import SquareIcon from "../../assets/SquareIcon";

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
            <div className="items-center bg-white rounded-2xl pr-12 p-4 shadow-xl min-w-[200px]">
                <div className="bg-[#EBF7FF] p-2 max-w-fit rounded-md mb-6">
                    <WaterIcon />
                </div>
                <div className="text-md font-semibold">Total water used</div>
                {/* //thêm dấu phẩy giữa 3 số */}
                <div className="text-2xl font-bold">{waterCount?.toLocaleString("en-US")} m3</div>
            </div>
            <div className="items-center bg-white rounded-2xl pr-12 p-4 shadow-xl min-w-[200px]">
                <div className="bg-[#EBF7FF] p-2 max-w-fit rounded-md mb-6">
                    <MoneyIcon />
                </div>
                <div className="text-md font-semibold">Total money</div>
                <div className="text-2xl font-bold">{calculateMoney(waterCount)} VND</div>
            </div>
            <div className="items-center bg-[#1267FE] rounded-2xl p-4 shadow-xl text-white min-w-[220px]">
                <div className="text-2xl font-bold">130 
                    <span className="text-sm text-blue-200"> ppm</span>
                </div>
                <div className="text-md font-semibold">TDS </div>
                <div className="p-2 max-w-fit rounded-md mb-6">
                    <WaveForm />
                </div>
            </div>
            <div className="items-center bg-[#FA4E5E] rounded-2xl p-4 shadow-xl text-white min-w-[220px]">
                <div className="text-2xl font-bold">7.2
                    <span className="text-sm text-red-200"> ph</span>
                </div>
                <div className="text-md font-semibold">PH </div>
                <div className="p-2 max-w-fit rounded-md mb-6">
                    <SquareIcon />
                </div>
            </div>
        </div>
    );
};

export default WaterCell;