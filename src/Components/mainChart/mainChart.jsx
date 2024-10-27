// src/Components/MainChart.js

import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './mainChart.css';

// Custom tooltip component to display on click
function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="barChartWrapper_tooltip">
                <p>{`${payload[0].value}Kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
}

const MainChart = ({ data }) => {
    const [activeData, setActiveData] = useState(null);  // State to store the clicked bar's data

    // Click handler to set active data for tooltip
    const handleBarClick = (data, index) => {
        setActiveData(data);
    };

    return (
        <div className="mainChart_content">
            <h2>Activité quotidienne</h2>

            <ResponsiveContainer height="100%" width="100%">
                <BarChart 
                    data={data} 
                    barGap={8} 
                    margin={{ top: 30, right: 20, left: 20, bottom: 40 }}
                    onClick={(e) => handleBarClick(e.activePayload ? e.activePayload[0].payload : null)}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="kilogram" orientation="right" />
                    <YAxis yAxisId="calories" orientation="right" hide={true} />
                    
                    {/* Display tooltip only when activeData is set */}
                    <Tooltip 
                        content={<CustomTooltip active={!!activeData} payload={activeData ? [{ value: activeData.kilogram }, { value: activeData.calories }] : []} />} 
                        cursor={activeData ? { fill: "rgba(0, 0, 0, 0.1)" } : false} 
                    />
                    
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#000000" barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#FF0101" barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

            <div className="mainLegend">
                <div className="blackDot mainDot"></div>
                <p>Poids(kg)</p>
                <div className="redDot mainDot"></div>
                <p>Calories brûlées (kCal)</p>
            </div>
        </div>
    );
};

export default MainChart;

