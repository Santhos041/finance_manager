import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Navcomponent from '../../components/Navcomponent/Navcomponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import Report from '../../components/Report/Report';
import Dashboardcomp from '../../components/Dashboardcomp/Dashboardcomp';
import Expbarchart from "../../components/Charts/Expbarchart";
import Indnutchart from "../../components/Charts/Indnutchart";
import "./Dashboard.css";

 function Dashboard(){
  const [showBarChart, setShowBarChart] = useState(true);
  const [showDoughnutChart, setShowDoughnutChart] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [incomes,setIncomes]=useState([]);
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

    const fetchIncomes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/Income");
        setIncomes(response.data);
      } catch (error) {
        console.error("Error fetching incomes:", error);
      }
    };

    fetchExpenses();
    fetchIncomes();
  }, []);
  const toggleBarChart = () => {
      setShowBarChart(!showBarChart);
      setShowDoughnutChart(false); // Ensure only one chart is visible at a time
  };

  const toggleDoughnutChart = () => {
      setShowDoughnutChart(!showDoughnutChart);
      setShowBarChart(false); // Ensure only one chart is visible at a time
  };
    return(
        <div className='dashboard'>
            <div className='navbar'>
              <Navcomponent/>
            </div>
            <div className='sidebar'>
              <Sidebar/>
            </div>
            <div className='db_chart'>
            <div className='db_exin'>
              <button className='btn db_ex 'onClick={toggleBarChart}>Expense</button>
              <button className='btn db_in'onClick={toggleDoughnutChart}>Income</button>
              
            </div>
           
                            {showBarChart && <Expbarchart expenses={expenses} />}
                            {showDoughnutChart && <Indnutchart expenses={expenses} />}
                       
            </div>
            <div className='db'>
              <Dashboardcomp expenses={expenses} incomes={incomes} />
            </div>
            <div className='db_report'>
               <Report  expenses={expenses}/>
            </div>
        </div>
    )
 }
 export default Dashboard;