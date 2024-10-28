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
                    <RadarChart outerRadius={65} data={reorderedData}>
                        <PolarGrid radialLines={false}/>
                        <PolarAngleAxis 
                            dataKey="kind" 
                            tick={{ fill: 'white' }}
                            fontSize={10}
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


// -------------------------

// import React from 'react';
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// // Translations for activity kinds
// const kindTranslations = {
//     1: "Cardio",
//     2: "Énergie",
//     3: "Endurance",
//     4: "Force",
//     5: "Vitesse",
//     6: "Intensité"
// };

// // Function to transform performance data
// const transformPerformanceData = (performanceData) => {
//     return performanceData && performanceData.data
//         ? performanceData.data.map(item => ({
//             kind: kindTranslations[item.kind] ?? "Unknown", // Translate 'kind' using kindTranslations
//             value: item.value
//         }))
//         : [];
// };

// const SimpleRadarChart = ({ performanceData }) => {
//     // Transform performance data for the chart
//     const transformedData = transformPerformanceData(performanceData);

//     if (!transformedData || transformedData.length === 0) {
//         return <div>radarChart: No performance data available.</div>; // Display message if data is missing
//     }

//     return (
//         <div className="graphs_content">
//             <div className="miniGraph" id="graph2">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <RadarChart outerRadius={65} data={transformedData}>
//                         <PolarGrid radialLines={false}/>
//                         <PolarAngleAxis 
//                             dataKey="kind" 
//                             tick={{ fill: 'white' }}
//                             fontSize={10}
//                         />
//                         <PolarRadiusAxis axisLine={false} tick={false}/> {/* Hides the radius axis */}
//                         <Radar 
//                             name="data" 
//                             dataKey="value" 
//                             stroke="#FF0101" 
//                             fill="#FF0101" 
//                             fillOpacity={0.7} 
//                         />
//                     </RadarChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// };

// export default SimpleRadarChart;
