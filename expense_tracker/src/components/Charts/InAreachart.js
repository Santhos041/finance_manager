import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { parseISO, format } from 'date-fns';

function IncomeAreaChart({ incomes = [] }) {
  const transformedIncomes = incomes
    .map(income => ({
      ...income,
      date: parseISO(income.in_date),
    }))
    .sort((a, b) => a.date - b.date);

  const incomeData = transformedIncomes.map(income => ({
    name: format(income.date, 'yyyy-MM-dd'), 
    uv: income.in_income,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        width={730}
        height={250}
        data={incomeData}
        margin={{ top: 50, right: 30, left: 0, bottom: -10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#b789dc" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8139bc" stopOpacity={0} />
          </linearGradient>
          
        </defs>
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis stroke="#ffffff"/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8139bc"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default IncomeAreaChart;
