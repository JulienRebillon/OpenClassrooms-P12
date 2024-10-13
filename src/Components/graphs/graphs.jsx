'use client';

// import { fetchUserData,
//          fetchUserActivity,
//          fetchUserAverageSessions,
//          fetchUserPerformance } from '../Data/api';

import React, { useState } from "react";
import {
    Line,
    LineChart,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Pie,
    PieChart,
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
  


const Graphs = () => {



    return (
        <div className="graphs_content">

            <div className="miniGraph" id="graph1">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={fakeData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="day" />
                        <YAxis dataKey="sessionLength"/>
                        
                        <Tooltip />
                        
                    </LineChart>
                </ResponsiveContainer>
            </div>







            <div className="miniGraph" id="graph2">
                <RadarChart outerRadius={120} width={400} height={400} data={fakeData3}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis angle={30} domain={[0, 200]} />
                    <Radar name="data" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </div>







            <div className="miniGraph" id="graph3">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>

                        <Pie data={fakeData}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <XAxis dataKey="day" />
                            <YAxis dataKey="sessionLength"/>
                            
                            <Tooltip />
                            
                        </Pie>

                    </PieChart>
                </ResponsiveContainer>

            </div>


        </div>
    );
};

export default Graphs;