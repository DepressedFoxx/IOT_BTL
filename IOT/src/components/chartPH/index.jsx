import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ChartPH = () => {
    const [second, setSecond] = React.useState(0);
    
    const [data, setData] = React.useState([{value: 0, time: 0}]);

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
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    

    return (
        <div className="w-full h-96 bg-[#2e312e]">
            <Line
                data={{
                    labels: data.map((item) => item.time),
                    datasets: [
                        {
                            label: "PH",
                            data: data.map((item) => item.value),
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