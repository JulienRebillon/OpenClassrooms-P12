'use client';

import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

import './radarChart.css';

// Translations for activity kinds
const kindTranslations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
};

const SimpleRadarChart = ({ performanceData }) => {
    console.log('Performance Data radarchart:', performanceData); // Debug line
    if (!performanceData || performanceData.length === 0) {
        return <div>radarChart: No performance data available.</div>; // Render a message instead of null
    }

    // Rearrange data to match desired order: intensity, speed, strength, endurance, energy, cardio
    const reorderedData = [
        performanceData[5], // intensity
        performanceData[4], // speed
        performanceData[3], // strength
        performanceData[2], // endurance
        performanceData[1], // energy
        performanceData[0]  // cardio
    ];

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
