import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Expbarchart({ expenses }) {
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    if (!expenses || expenses.length === 0) {
      setFormattedData([]);
      return;
    }
    const sortedExpenses = expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    const data = sortedExpenses.map(expense => ({
      date: formatDate(expense.date),
      amount: expense.amount,
    }));

    setFormattedData(data);
    console.log(data);
  }, [expenses]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={formattedData}
        margin={{ top: 18, right: 10, bottom: 60 }}
      >
         <defs>
          <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#b789dc" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8139bc" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date"stroke="#ffffff" />
        <YAxis stroke="#ffffff"/>
        <Tooltip />
        <Bar dataKey="amount" fill="url(#colorAmount)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Expbarchart;
