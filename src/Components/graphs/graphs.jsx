'use client';

// import { fetchUserData,
//          fetchUserActivity,
//          fetchUserAverageSessions,
//          fetchUserPerformance } from '../Data/api';

import React, { useState } from "react";
import {
    // Line,
    LineChart,
    // RadarChart,
    // RadialBarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
import './graphs.css';



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


const Graphs = () => {



    return (
        <div className="graphs_content">

            <ResponsiveContainer width="100%" height="100%" className="miniGraph" id="graph1">
                <LineChart data={fakeData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    
                    <Tooltip />
                    
                </LineChart>
            </ResponsiveContainer>

            <div className="miniGraph" id="graph2">

            </div>

            <div className="miniGraph" id="graph3">

            </div>


        </div>
    );
};

export default Graphs;