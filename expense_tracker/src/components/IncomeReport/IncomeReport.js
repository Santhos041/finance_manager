import React from 'react';
import "./IncomeReport.css";
function IncomeReport({incomes}){
   
    return(
        

        
        <div className='in_report'>
        <div className="row">
     <div className="column"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '25%',backgroundColor:"lightblue" }}>Date</div>
     <div className="column"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '20%',backgroundColor:"lightblue" }}>Income</div>
     <div className="column"style={{ background: 'linear-gradient(#b789dc,#8139bc)',width: '20%',backgroundColor:"lightblue" }}>Category</div>
     <div className="column_des"style={{background: 'linear-gradient(#b789dc,#8139bc)', width: '33%',backgroundColor:"lightblue" }}> Description</div>
 </div>

 {incomes.map((income, index) => (
        <div className="row" key={index}><div className="column" style={{ width: '25%' }}>
        {new Date(income.in_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
      </div>
          <div className="column" style={{ width: '20%' }}>{income.in_income}</div>
          <div className="column" style={{ width: '20%' }}>{income.in_category}</div>
          <div className="column_des" style={{ width: '33%' }}>{income.in_description}</div>
        </div>
      ))}
 </div>
    )
}
export default  IncomeReport;