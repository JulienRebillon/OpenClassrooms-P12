'use client';

// import { fetchUserData,
//          fetchUserActivity,
//          fetchUserAverageSessions,
//          fetchUserPerformance } from '../Data/api';

import React, { useState } from "react";
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
  


const SimpleLineChart = () => {



    return (
        <div className="graphs_content">

            <div className="miniGraph" id="graph1">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sessionData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="day" />
                        <YAxis hide={true} domain={[0, (max) => max * 1.33]} dataKey="sessionLength"/>
                        <Tooltip />
                        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
};

export default SimpleLineChart;