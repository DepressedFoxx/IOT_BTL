import React from "react";
import axios from "axios";
import { WaterIcon } from "../../assets/WaterIcon";
import { MoneyIcon } from "../../assets/MoneyIcon";
import { WaveForm } from "../../assets/WaveForm";
import SquareIcon from "../../assets/SquareIcon";

const WaterCell = () => {

    const [waterCount, setWaterCount] = React.useState(0);

    const [tds, setTDS] = React.useState(0);
    const [ph, setPH] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            axios.get("https://blynk.cloud/external/api/get?token=iVlinC-os9hUU-P6fvF5u1CKwRWjQxbE&V3")
            .then(response => {
                const value = response.data;
                setWaterCount(value);
            })
            .catch(error => console.error("Error fetching data:", error));

            axios.get("https://blynk.cloud/external/api/get?token=iVlinC-os9hUU-P6fvF5u1CKwRWjQxbE&V1")
                .then(response => {
                    const value = response.data;
                    setTDS(value);
                })
                .catch(error => console.error("Error fetching data:", error));

            axios.get("https://blynk.cloud/external/api/get?token=iVlinC-os9hUU-P6fvF5u1CKwRWjQxbE&V2")
                .then(response => {
                    const value = response.data;
                    setPH(value);
                })
                .catch(error => console.error("Error fetching data:", error));
        }, 10000);
        
        return () => clearInterval();
    }, [waterCount]);

    const calculateMoney  = (waterCount) => {
            // Định nghĩa các mức giá theo bậc thang (VND/m3)
            const PRICE_LEVEL_1 = 5973;  // 0-10m3
            const PRICE_LEVEL_2 = 7052;  // 10-20m3
            const PRICE_LEVEL_3 = 8669;  // 20-30m3
            const PRICE_LEVEL_4 = 15929; // >30m3
            let totalMoney = 0;
            if (waterCount <= 0) {
                return 0;
            }
            // Tính tiền theo từng bậc
            if (waterCount > 30) {
                totalMoney += (waterCount - 30) * PRICE_LEVEL_4;
                waterCount = 30;
            }
            if (waterCount > 20) {
                totalMoney += (waterCount - 20) * PRICE_LEVEL_3;
                waterCount = 20;
            }
            if (waterCount > 10) {
                totalMoney += (waterCount - 10) * PRICE_LEVEL_2;
                waterCount = 10;
            }
            if (waterCount > 0) {
                totalMoney += waterCount * PRICE_LEVEL_1;
            }
            // Làm tròn đến số nguyên
            return Math.round(totalMoney).toLocaleString('vi-VN');
        }

    return (
        <div className="flex gap-4 w-full">
            <div className="items-center bg-white rounded-2xl pr-12 p-4 shadow-xl min-w-[200px]">
                <div className="bg-[#EBF7FF] p-2 max-w-fit rounded-md mb-6">
                    <WaterIcon />
                </div>
                <div className="text-md font-semibold">Total water used</div>
                {/* //thêm dấu phẩy giữa 3 số */}
                <div className="text-2xl font-bold">{Math.round(waterCount*100)/100} liters</div>
            </div>
            <div className="items-center bg-white rounded-2xl pr-12 p-4 shadow-xl min-w-[200px]">
                <div className="bg-[#EBF7FF] p-2 max-w-fit rounded-md mb-6">
                    <MoneyIcon />
                </div>
                <div className="text-md font-semibold">Total money</div>
                <div className="text-2xl font-bold">{calculateMoney(waterCount)} VND</div>
            </div>
            <div className="items-center bg-[#1267FE] rounded-2xl p-4 shadow-xl text-white min-w-[220px]">
                <div className="text-2xl font-bold">
                    <span className="text-sm text-blue-200">{tds} ppm</span>
                </div>
                <div className="text-md font-semibold">TDS </div>
                <div className="p-2 max-w-fit rounded-md mb-6">
                    <WaveForm />
                </div>
            </div>
            <div className="items-center bg-[#FA4E5E] rounded-2xl p-4 shadow-xl text-white min-w-[220px]">
                <div className="text-2xl font-bold">
                    <span className="text-sm text-red-200">{ph} ph</span>
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