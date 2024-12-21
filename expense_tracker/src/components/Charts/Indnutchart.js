import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function Indnutchart() {
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Income')
      .then(response => response.json())
      .then(data => setIncomeData(data))
      .catch(error => console.error('Error fetching income data:', error));
  }, []);

  const COLORS = ['#8884d8', '#8dd1e1', '#ffc658', '#82ca9d', '#a4de6c', '#d0ed57', '#ffa07a']
  const chartData = incomeData.map((income, index) => ({
    name: income.in_category,
    value: income.in_income,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div className="income-doughnut-chart" style={{ marginTop: '2%', width: '72%', marginLeft: '4%',backgroundColor:'black' }}>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={50}  
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

export default Indnutchart;
