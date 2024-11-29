import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ChartTDS = () => {

    const [seconds, setSeconds] = React.useState(0);
    
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            axios.get("https://blynk.cloud/external/api/get?token=VUKDdjF1InBGGWODiGHaS80aRZt__sXR&V1")
                .then(response => {
                    const value = response.data;
                    setData(oldState => [...oldState, { value, time: seconds }]);
                    setSeconds(prevSeconds => prevSeconds + 1);
                })
                .catch(error => console.error("Error fetching data:", error));
        }, 10000);
    
        return () => clearInterval(interval);
    }, [seconds]);
    

    return (
        <div className="w-full h-96 ">
            <Line
                data={{
                    labels: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90],
                    datasets: [
                        {
                            label: "TDS",
                            data: [0, 130, 200, 289, 250, 200, 150, 100, 50, 130],
                            borderColor: "blue",
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

export default ChartTDS