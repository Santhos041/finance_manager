import React, { useEffect, useState } from 'react';
import Navcomponent from '../../components/Navcomponent/Navcomponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import Addincome from '../../components/Addincome/Addincome';
import IncomeReport from '../../components/IncomeReport/IncomeReport';
import "./Income.css";
import axios from 'axios';
import IncomeAreaChart from '../../components/Charts/InAreachart';
import Indnutchart from '../../components/Charts/Indnutchart';
import IncomeSummary from '../../components/Addincome/IncomeSummary';

function Income() {
    const [showInAreaChart, setShowInAreaChart] = useState(true);
    const [showDoughnutChart, setShowDoughnutChart] = useState(false);

    const [incomes, setIncomes] = useState([]);
    
    useEffect(() => {
        // Fetch income data from backend when component mounts
        const fetchIncomes = async () => {
            try {
                const response = await axios.get("http://localhost:8000/Income");
                setIncomes(response.data);
            } catch (error) {
                console.error("Error fetching incomes:", error);
            }
        };

        fetchIncomes();
    }, []);
    
    const toggleInAreaChart = () => {
        setShowInAreaChart(true);
        setShowDoughnutChart(false); // Ensure only one chart is visible at a time
    };

    const toggleDoughnutChart = () => {
        setShowDoughnutChart(true);
        setShowInAreaChart(false); // Ensure only one chart is visible at a time
    };
    
    return (
        <div className='container'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='navbar'>
                <Navcomponent />
            </div>
            <div className='in_chart'>
                <div className='in_opt'>
                    <button className="in_area" onClick={toggleInAreaChart}>Income</button>
                    <button className="cat_dbtn" onClick={toggleDoughnutChart}>Category</button>
                </div>
                {showInAreaChart && <IncomeAreaChart incomes={incomes} />}
                {showDoughnutChart && <Indnutchart incomes={incomes} />}
            </div>
            <div className='in_cat'>
                <IncomeReport incomes={incomes} />
            </div>
            <div className='add_in'>
                <Addincome />
            </div>
            <div className='more_in'>
                <IncomeSummary incomes={incomes} />
            </div>
        </div>
    );
}

export default Income;
