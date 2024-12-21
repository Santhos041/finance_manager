import React from 'react';
import "./Report.css";
 function Report({expenses}){
   
    return(
       <div className='report'>
       <div className="row">
    <div className="column"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '20%' }}>Date</div>
    <div className="column"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '17%' }}>Account</div>
    <div className="column"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '17%'}}>Category</div>
    <div className="column"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '13%'}}>Amount</div>
    <div className="column_des"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '33%'}}> Description</div>
</div>
{expenses.map((expense, index) => (
        <div className="row" key={index}><div className="column" style={{ width: '20%' }}>
        {new Date(expense.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
      </div>
          <div className="column" style={{ width: '17%' }}>{expense.account}</div>
          <div className="column" style={{ width: '17%' }}>{expense.category}</div>
          <div className="column" style={{ width: '13%' }}>{expense.amount}</div>
          <div className="column_des" style={{ width: '33%' }}>{expense.description}</div>
        </div>
      ))}

       </div>
       
    )
 }
 export default Report;