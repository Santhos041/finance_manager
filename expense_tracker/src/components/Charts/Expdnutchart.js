import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function Expdnutchart({ expenses }) {
  const COLORS = ['#8884d8', '#8dd1e1', '#ffc658', '#82ca9d', '#a4de6c', '#d0ed57', '#ffa07a'];
  const chartData = expenses.map((expense, index) => ({
    name: expense.category,
    value: expense.amount,
    color: COLORS[index % COLORS.length], 
  }));

  return (
    <div className="expbar" style={{ marginTop: '7%', width: '72%', marginLeft: '2%',backgroundColor: 'black', }}>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            align="right"
            verticalAlign="middle"
            layout="vertical"
            iconSize={15}
            wrapperStyle={{ right: '-20%', top: '10%', lineHeight: '24px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Expdnutchart;
