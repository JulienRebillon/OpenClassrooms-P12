'use client';

// import { fetchUserData,
//          fetchUserActivity,
//          fetchUserAverageSessions,
//          fetchUserPerformance } from '../Data/api';

import React, { useState } from "react";
import { Bar, 
    BarChart, 
    CartesianGrid, 
    Legend, 
    ResponsiveContainer, 
    Tooltip, 
    XAxis, 
    YAxis } from 'recharts';
import './mainChart.css';



const fakeData2 = [
    {
        "userId": 12,
        "sessions": [
            {
                "day": 1,
                "kilogram": 80,
                "calories": 240
            },
            {
                "day": 2,
                "kilogram": 80,
                "calories": 220
            },
            {
                "day": 3,
                "kilogram": 81,
                "calories": 280
            },
            {
                "day": 4,
                "kilogram": 81,
                "calories": 290
            },
            {
                "day": 5,
                "kilogram": 80,
                "calories": 160
            },
            {
                "day": 6,
                "kilogram": 78,
                "calories": 162
            },
            {
                "day": 7,
                "kilogram": 76,
                "calories": 390
            }
        ]
    } 
]



function CustomTooltip({ active, payload }) {
    if (active && payload) {
        return (
            <div className="barChartWrapper_tooltip">
                <p>{`${payload[0].value}Kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
}


const MainChart = ({ data = fakeData2[0].sessions }) => {
    return (
        <div className="mainChart_content">
            <h2>Activité quotidienne</h2>

            <ResponsiveContainer height="100%" width="100%">
                <BarChart data={data} barGap={8} margin={{ top: 40, right: 40, left: 40, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="kilogram" orientation="right"/>
                    <YAxis yAxisId="calories" orientation="right" hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#000000" barSize={15} radius={[10, 10, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#FF0101" barSize={15} radius={[10, 10, 0, 0]}/>
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