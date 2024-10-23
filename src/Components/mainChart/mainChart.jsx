

import React from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './mainChart.css';

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
    return (
        <div className="mainChart_content">
            <h2>Activité quotidienne</h2>

            <ResponsiveContainer height="100%" width="100%">
                <BarChart data={data} barGap={8} margin={{ top: 40, right: 40, left: 40, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="kilogram" orientation="right" />
                    <YAxis yAxisId="calories" orientation="right" hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#000000" barSize={15} radius={[10, 10, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#FF0101" barSize={15} radius={[10, 10, 0, 0]} />
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
