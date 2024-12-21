import React, {useState,useEffect} from "react";
import axios from 'axios';
import Navcomponent from '../../components/Navcomponent/Navcomponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import Addexpense from '../../components/Addexpense/Addexpense';
import Report from "../../components/Report/Report";
import Expbarchart from "../../components/Charts/Expbarchart";
import Expdnutchart from "../../components/Charts/Expdnutchart";
import "./Expense.css";

function Expense(){
    const [showBarChart, setShowBarChart] = useState(false);
    const [showDoughnutChart, setShowDoughnutChart] = useState(true);
     

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // Fetch expenses data from backend when component mounts
        const fetchExpenses = async () => {
            try {
                const response = await axios.get("http://localhost:8000/Expenses");
                setExpenses(response.data);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };

        fetchExpenses();
    }, []);
    console.log("Expenses:", expenses);
    const toggleBarChart = () => {
        setShowBarChart(!showBarChart);
        setShowDoughnutChart(false); // Ensure only one chart is visible at a time
    };

    const toggleDoughnutChart = () => {
        setShowDoughnutChart(!showDoughnutChart);
        setShowBarChart(false); // Ensure only one chart is visible at a time
    };
    return(
        <div className="expense_page">
           <div className='sidebar'>
                <Sidebar />

            </div>
            <div className='navbar'>
                <Navcomponent />
            </div>
            <div className="ex_chart">
              <div className="ex_daycat">
                  <button className='cat_btn'onClick={toggleDoughnutChart}>Category</button>
                  <button className='day_btn'onClick={toggleBarChart}>Day-Day Expense</button>
                  
              </div>
              {showDoughnutChart && <Expdnutchart expenses={expenses}/>}
              {showBarChart && <Expbarchart  expenses={expenses}/>}
             
            </div>
            <div className="ex_form">
                <Addexpense />
            </div>
            <div className="ex_report">
            <Report expenses={expenses} />

            </div>
            
        </div>
    )
 }
 export default Expense;