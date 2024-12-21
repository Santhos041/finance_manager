import React from 'react';
import './Dashboardcomp.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp,faAngleDoubleDown,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
 
function Dashboardcomp({expenses,incomes}){
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const totalIncomes = incomes.reduce((total, income) => total + income.in_income, 0);
    return(
        <div className='db_more'>
            <div className='db_balance'>
                
                 <h2>Income</h2>
                 <FontAwesomeIcon icon={faAngleDoubleUp} style={{fontSize:"40px",color:"#126945",marginLeft:"30px",marginTop:"5px"}} />
                 <h1><FontAwesomeIcon icon={faIndianRupeeSign}/>{totalIncomes}</h1>
            </div>
            <div className='db_expense'>
                <h2>Expense</h2>
                <FontAwesomeIcon icon={faAngleDoubleDown} style={{fontSize:"40px",color:"red",marginLeft:"30px",marginTop:"5px"}}/>
                <h1><FontAwesomeIcon icon={faIndianRupeeSign}/>{totalExpenses}</h1>

            </div>
        </div>
    )
}
export default Dashboardcomp;