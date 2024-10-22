'use client';

// import { fetchUserData,
//          fetchUserActivity,
//          fetchUserAverageSessions,
//          fetchUserPerformance } from '../Data/api';

import React from "react";
import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
import './lineChart.css';



const fakeData = [
    {
        "userId": 12,
        "sessions": [
            { "day": 1, "sessionLength": 30 },
            { "day": 2, "sessionLength": 23 },
            { "day": 3, "sessionLength": 45 },
            { "day": 4, "sessionLength": 50 },
            { "day": 5, "sessionLength": 0 },
            { "day": 6, "sessionLength": 0 },
            { "day": 7, "sessionLength": 60 }
        ]
    }
];

const sessionData = fakeData[0].sessions;


  


const SimpleLineChart = () => {



    function showOverlay(e) {
        let overlay = document.querySelector(".lineChart_overlay");
  
        if (e.isTooltipActive) {
          let windowWidth = overlay.offsetWidth;
          let mouseXpercent = Math.floor(
            (e.activeCoordinate.x / windowWidth) * 100
          );
  
          overlay.style.background = `linear-gradient(to right, rgb(255,0,0) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%`;
        } else {
          overlay.style.background = "transparent";
        }
      }
  
    function hiddeOverlay() {
        let overlay = document.querySelector(".lineChart_overlay");
        overlay.style.background = "transparent";
    }

    const CustomTooltip = ({ active, payload, label, coordinate }) => {
        if (active && payload && coordinate) {
            return (
                <div className="lineChart_tooltip"
                style={{
                    position: "absolute",
                    left: `${coordinate.x + 10}px`, // Adjusting to the right of the hovered point
                    top: `${coordinate.y - 40}px`, // Adjusting above the hovered point
                    transform: "translate(0, 0)", // Resets any transform effects
                }}>
                <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }
      
        return null;
      };
      
      

    const dayLabels = ["", "L", "M", "M", "J", "V", "S", "D"]; // Days of the week (empty string to match index with 'day' value)

    return (
        <div className="graphs_content">

            <div className="lineChart_legend">
                <span>durée moyenne des</span> <span>sessions</span>
            </div>

            <div className="miniGraph" id="graph1">
                <div className="lineChart_overlay"></div>
                <ResponsiveContainer width="100%" height="100%">
                    
                    <LineChart data={sessionData}
                        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                        onMouseMove={(e) => showOverlay(e)} onMouseOut={hiddeOverlay}>
                        <XAxis 
                            dataKey="day"
                            tick={{ fill: 'white' }}
                            axisLine={{ stroke: 'white' }}
                            interval={0}
                            padding={{ left: 10, right: 10 }}
                            fontSize={14}
                            fontWeight={300}
                            tickFormatter={(day) => dayLabels[day]} // Maps the numbers to day initials
                        />
                        <YAxis hide={true} domain={[0, (max) => max * 1.33]} dataKey="sessionLength"/>
                        <Tooltip content={<CustomTooltip />} />
                        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={ false } />
                    </LineChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
};

export default SimpleLineChart;