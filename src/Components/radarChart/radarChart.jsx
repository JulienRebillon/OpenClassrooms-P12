
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './radarChart.css';

// Translations for activity kinds
const kindTranslations = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité"
};

// Function to transform performance data
const transformPerformanceData = (performanceData) => {
    return performanceData && performanceData.data
        ? performanceData.data.map(item => ({
            kind: kindTranslations[item.kind] ?? "Unknown", // Translate 'kind' using kindTranslations
            value: item.value
        }))
        : [];
};

const SimpleRadarChart = ({ performanceData }) => {
    // Transform performance data for the chart
    const transformedData = transformPerformanceData(performanceData);

    // Check if transformedData has values
    if (!transformedData || transformedData.length === 0) {
        return <div>radarChart: No performance data available.</div>; // Display message if data is missing
    }

    // Debugging: Log the transformed data
    console.log("Transformed Data: ", transformedData);

    // Rearrange data to match desired order: intensity, speed, strength, endurance, energy, cardio
    const reorderedData = [
        transformedData.find(item => item.kind === kindTranslations[6]), // intensity
        transformedData.find(item => item.kind === kindTranslations[5]), // speed
        transformedData.find(item => item.kind === kindTranslations[4]), // strength
        transformedData.find(item => item.kind === kindTranslations[3]), // endurance
        transformedData.find(item => item.kind === kindTranslations[2]), // energy
        transformedData.find(item => item.kind === kindTranslations[1])  // cardio
    ];
    console.log("reodered data avant graph", reorderedData);
    console.log("kind translation avant graph", kindTranslations)

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
                        //    tickFormatter={(kind) => kindTranslations[kind]} // Translate to French
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
