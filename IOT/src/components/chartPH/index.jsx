import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ChartPH = () => {
    const [second, setSecond] = React.useState(0);
    
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            console.log("Fetching data...");
            
            axios.get("https://blynk.cloud/external/api/get?token=VUKDdjF1InBGGWODiGHaS80aRZt__sXR&V2")
                .then(response => {
                    const value = response.data;
                    setData(oldState => [...oldState, { value, time: second }]);
                    setSecond(prevSeconds => prevSeconds + 1);
                })
                .catch(error => console.error("Error fetching data:", error));
        }, 10000);
    
        return () => clearInterval(interval);
    }, [second]);
    

    return (
        <div className="w-full h-96">
            <Line
                data={{
                    labels: [0, 10, 20, 30, 40, 50, 60],
                    datasets: [
                        {
                            label: "PH",
                            data: [0, 2.6, 3.2, 4, 4.3, 5.4, 7.2],
                            borderColor: "#1267FE",
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