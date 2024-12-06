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
            
            axios.get("https://blynk.cloud/external/api/get?token=iVlinC-os9hUU-P6fvF5u1CKwRWjQxbE&V2")
                .then(response => {
                    const value = response.data;
                    setData(oldState => [...oldState, { value, time: second }]);
                    setSecond(prevSeconds => prevSeconds + 10);
                })
                .catch(error => console.error("Error fetching data:", error));
        }, 10000);
    
        return () => clearInterval(interval);
    }, [second]);
    

    return (
        <div className="w-full h-96">
            <Line
                data={{
                    labels: data.map(item => item.time),
                    datasets: [
                        {
                            label: "PH",
                            data: data.map(item => item.value),
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