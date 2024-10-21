'use client';

// import { fetchUserData,
//          fetchUserActivity,
//          fetchUserAverageSessions,
//          fetchUserPerformance } from '../Data/api';

import React, { useState } from "react";
import {
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";

import './radialChart.css';



const fakeData = [
    {
        "userId": 12,
        "sessions": [
            {
                "day": 1,
                "sessionLength": 30
            },
            {
                "day": 2,
                "sessionLength": 23
            },
            {
                "day": 3,
                "sessionLength": 45
            },
            {
                "day": 4,
                "sessionLength": 50
            },
            {
                "day": 5,
                "sessionLength": 0
            },
            {
                "day": 6,
                "sessionLength": 0
            },
            {
                "day": 7,
                "sessionLength": 60
            }
        ]
    }
];

const sessionData = fakeData[0].sessions;


const fakeData3 = [
    {
      value: 80,
      kind: "cardio"
    },
    {
      value: 120,
      kind: "energy"
    },
    {
      value: 140,
      kind: "endurance"
    },
    {
      value: 50,
      kind: "strength"
    },
    {
      value: 200,
      kind: "speed"
    },
    {
      value: 90,
      kind: "intensity"
    }
  ];


  const fakeData4 = [
    {
        "id": "12",
        "userInfos": {
            "firstName": "Karl",
            "lastName": "Dovineau",
            "age": 31
        },
        "todayScore": 0.12,
        "keyData": {
            "calorieCount": 1930,
            "proteinCount": 155,
            "carbohydrateCount": 290,
            "lipidCount": 50
        }
    },
]
  


const SimpleRadialChart = () => {



    return (
        <div className="graphs_content">


            <div className="miniGraph" id="graph3">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                    innerRadius="70%" // Adjust the inner radius for the hole in the center
                    outerRadius="90%" // Adjust the outer radius to control the size
                    barSize={15} // Thickness of the bars
                    data={[
                        { name: 'Score', value: fakeData4[0].todayScore * 100 }, // User score (12%)
                    ]}
                    startAngle={90} // Starting angle for the bars
                    endAngle={450} // End angle (360 degrees + 90 to complete the circle)
                    >
                    <RadialBar
                        minAngle={15}
                        background={{ fill: "#E0E0E0" }} // Grey background for the rest of the circle
                        clockWise
                        dataKey="value"
                        cornerRadius={10}
                        fill="Red"/>
                    <Tooltip />
                    <text
                        x="50%" 
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                        style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        {`${fakeData4[0].todayScore * 100}%`}
                    </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
};

export default SimpleRadialChart;