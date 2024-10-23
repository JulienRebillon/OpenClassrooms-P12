'use client';

import React from "react";
import {
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import './radialChart.css';

const SimpleRadialChart = ({ todayScore }) => {
    if (!todayScore) {
        return null; // Render nothing if no data
    }

    // Convert the score to a percentage
    const scorePercentage = todayScore * 100;

    return (
        <div className="graphs_content">
            <div className="miniGraph" id="graph3">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        innerRadius="70%" // Adjust the inner radius for the hole in the center
                        outerRadius="90%" // Adjust the outer radius to control the size
                        barSize={15} // Thickness of the bars
                        data={[
                            { name: 'Score', value: scorePercentage }, // User score
                        ]}
                        startAngle={90} // Starting angle for the bars
                        endAngle={90 + (todayScore * 360)} // End angle based on todayScore
                    >
                        <RadialBar
                            minAngle={15}
                            background={{ fill: "#E0E0E0" }} // Grey background for the rest of the circle
                            clockWise
                            dataKey="value"
                            cornerRadius={10}
                            fill="Red"
                        />
                        <Tooltip />
                        <text
                            x="50%"
                            y="45%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="progress-label"
                            style={{ fontSize: '28px', fontWeight: 'bold' }}
                        >
                            {`${scorePercentage}%`}
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="radialChart_legend">
                    <span>de votre</span>
                    <span>objectif</span>
                </div>
            </div>
        </div>
    );
};

export default SimpleRadialChart;
