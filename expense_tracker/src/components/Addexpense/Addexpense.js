import React,{useState,useEffect} from "react";
import "./Addexpense.css";
import axios from 'axios';
import ExpenseList from "./ExpenseList";
import Report from "../../components/Report/Report";

function Addexpense(){
    const[date,setDate]=useState("")
  const[account,setAccount]=useState("")
  const[amount,setAmount]=useState("")
  const[category,setCategory]=useState("")
  const[description,setDescription]=useState("")
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Modify the Axios GET request to fetch only the date and amount fields
        const response = await axios.get("http://localhost:8000/ex_collection", {
          params: {
            fields: "date,account,amount,category,description"
          }
        });
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Rest of the component code remains unchanged

  async function submit(e){
    e.preventDefault();
    await axios.post("http://localhost:8000/Expense",{
                date,account,amount,category,description
            })
            setDate("");
    setAccount("");
    setAmount("");
    setCategory("");
    setDescription("");
  }

    return(
        <div className="datacard add_expense">

  <form id="expenseForm">
  <h3>Add Expense</h3>
  <label htmlFor="date" id="date">Date:</label>
  <input type="date"onChange={(e) => {
              setDate(e.target.value);
            }} id="in_date" name="date" required="" />
  <br />
  <label htmlFor="account" id="acc">Account:</label>
  <select id="account" onChange={(e) => {
              setAccount(e.target.value);
            }} name="account">
    <option value="cash">Cash</option>
    <option value="accounts">Accounts</option>
    <option value="cards">Card</option>
    
  </select>
  <br />
  <label htmlFor="amount">Amount:</label>
  <input type="number" onChange={(e) => {
              setAmount(e.target.value);
            }}id="amount" name="amount" required="" />
  <br />
  <label htmlFor="category">Category:</label>
  <input type="text" onChange={(e) => {
              setCategory(e.target.value);
            }}id="category" name="category" required="" />
  <br />
  <label htmlFor="description">Description:</label>
  <br />
  <textarea onChange={(e) => {
              setDescription(e.target.value);
            }}
    id="description"
    name="description"
    rows={4}
    cols={35}
    defaultValue={""}
  />
  <br /><div id="btn">
  <Report expenses={expenses} /> 
  <ExpenseList expenses={expenses} />
  <input type="submit" onClick={submit} value="Save" />
  </div>
</form>

  </div>
    )
}
export default Addexpense;