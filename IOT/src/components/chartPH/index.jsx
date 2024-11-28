import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ChartPH = () => {
    return (
        <div className="w-full h-96 bg-[#2e312e]">
            <Line
                data={{
                    labels: [
                        "Thứ 2",
                        "Thứ 3",
                        "Thứ 4",
                        "Thứ 5",
                        "Thứ 6",
                        "Thứ 7",
                        "Chủ nhật",
                    ],
                    datasets: [
                        {
                            label: "TDS",
                            data: [12, 19, 3, 5, 2, 3, 10],
                            borderColor: "white",
                            backgroundColor: "white",
                        },
                    ],
                }}  
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    );
};

export default ChartPH