import React from 'react';
import Navcomponent from '../../components/Navcomponent/Navcomponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Analytics.css";
 function Analytics(){
    return(
        <div className='container'>
            <div className='sidebar'>
                <Sidebar />

            </div>
            <div className='navbar'>
                <Navcomponent />
            </div>
            <div className='income'>
             
            </div>
            <div className='income_cat'>

            </div>
            <div className='expense'>

            </div>
            <div className='expense_cat'>
                
            </div>
            
        </div>
    )
 }
 export default Analytics;