import React from 'react';
import './IncomeSummary.css';

function IncomeSummary({ incomes = [] }) {
  if (!incomes.length) {
    return <div>No income data available.</div>;
  }

  const totalIncome = incomes.reduce((sum, income) => sum + income.in_income, 0);
  const averageIncome = (totalIncome / incomes.length).toFixed(2);
  const highestIncome = Math.max(...incomes.map(income => income.in_income));
  const lowestIncome = Math.min(...incomes.map(income => income.in_income));

  return (
    <div className="income-summary">
      <h3>Income Summary</h3>
      <p>Total Income: Rs.{totalIncome}</p>
      <p>Average Income:Rs.{averageIncome}</p>
      <p>Number of Entries: {incomes.length}</p>
      <p>Highest Income: Rs.{highestIncome}</p>
      <p>Lowest Income:Rs.{lowestIncome}</p>
    </div>
  );
}

export default IncomeSummary;
