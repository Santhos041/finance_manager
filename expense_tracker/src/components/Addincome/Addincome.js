import React,{useState} from 'react';
import './Addincome.css';
import axios from 'axios';

function Addincome(){
    const[in_date,setDate]=useState("")
    const[in_income,setIncome]=useState("")
    const[in_category,setCategory]=useState("")
    const[in_description,setDescription]=useState("")

    async function in_submit(e){
        
            e.preventDefault();
            await axios.post("http://localhost:8000/Income",{
                        in_date,in_income,in_category,in_description
                    })
                    setDate("");
            
            setIncome("");
            setCategory("");
            setDescription("");
          }
        
    

    return (
        <div className='addincome'>
            <h3>Add Income</h3>
            <form className='in_form'>
               <label htmlFor="date" id='date'>Date:</label>
               <input type='date' onChange={(e) => {
              setDate(e.target.value);
            }}placeholder='Date'id="in_date" name="date" required="" />

               <label htmlFor="income" id='income'>Income:</label>
               <input type='number'  onChange={(e) => {
              setIncome(e.target.value);
            }}placeholder='Income'id="in_income" name="income" required="" />

               <label htmlFor="in-cat" id='in_cat'>Category:</label>
               <input type='text'  onChange={(e) => {
              setCategory(e.target.value);
            }}placeholder='Category'id="in_cat" name="in_cat" required="" />
                   
               <label htmlFor="description" id="in_des">Description:</label>
               <textarea placeholder='Description'  onChange={(e) => {
              setDescription(e.target.value);
            }}id="in_description" name="description" ></textarea>

               <button className='in_save'type="submit" onClick={in_submit}>Add Income</button>
  
  
            </form>
        </div>
    )
}
export default Addincome;