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


const kindTranslations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
};

// Rearranging the data in counter-clockwise order
const reorderedData = [
    fakeData3[5], // intensity
    fakeData3[4], // speed
    fakeData3[3], // strength
    fakeData3[2], // endurance
    fakeData3[1], // energy
    fakeData3[0]  // cardio
];



const SimpleRadarChart = () => {
    return (
        <div className="graphs_content">
            <div className="miniGraph" id="graph2">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={100} data={reorderedData}>
                        <PolarGrid radialLines={false}/>
                        <PolarAngleAxis 
                            dataKey="kind" 
                            tick={{ fill: 'white' }}
                            fontSize={12}
                            tickFormatter={(kind) => kindTranslations[kind]} // Translate to French
                        />
                        <PolarRadiusAxis axisLine={false} tick={false}/> {/* Hides the radius axis */}
                        <Radar 
                            name="data" 
                            dataKey="value" 
                            stroke="#FF0101" 
                            fill="#FF0101" 
                            fillOpacity={0.7} 
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SimpleRadarChart;