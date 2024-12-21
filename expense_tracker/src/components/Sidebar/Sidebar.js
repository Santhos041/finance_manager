import React from 'react';
import{Link,useLocation} from 'react-router-dom';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChartLine, faMoneyBillAlt, faWallet } from '@fortawesome/free-solid-svg-icons';

function Sidebar(){
    const location = useLocation();
    return(
        <div className="sidebar">
             <div className="logo">
    <img  className="logo_img" src="/images/Finflow.png" alt="Logo" />
    </div>
    
        <ul>
                
                <li><Link to="/Dashboard" className={location.pathname === '/Dashboard' ? 'active' : ''}><FontAwesomeIcon icon={faChartLine} /> Dashboard</Link></li>
                <li><Link to="/Expense" className={location.pathname === '/Expense' ? 'active' : ''}><FontAwesomeIcon icon={faMoneyBillAlt} /> Expense</Link></li>
                <li><Link to="/Income" className={location.pathname === '/Income' ? 'active' : ''}><FontAwesomeIcon icon={faWallet} /> Income</Link></li>
            </ul>
    </div>
    )
}
export default Sidebar;