'use client';

// import { fetchUserData,
//          fetchUserActivity,
//          fetchUserAverageSessions,
//          fetchUserPerformance } from '../Data/api';

import React, { useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
  } from "recharts";

import './radarChart.css';








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





const SimpleRadarChart = () => {



    return (
        <div className="graphs_content">

            <div className="miniGraph" id="graph2">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={100} width={400} height={400} data={fakeData3}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" />
                        <PolarRadiusAxis angle={30} domain={[0, 200]} />
                        <Radar name="data" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default SimpleRadarChart;