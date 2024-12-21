import React from "react";
import{Link} from 'react-router-dom';
import "./Navcomponent.css";


const Navbar = () => {
 return (
  <div className="topnav">
   
   <li><Link to ="/Analytics">Home</Link></li>
   <li><Link to ="/Expense">About</Link></li>
   <li><Link to ="/Savings">News</Link></li>
   <li><Link to ="/Income">FAQ</Link></li>
   <div className="profile">
  <Link to="">Profile</Link>
  
  </div>
</div>
 );
};

export default Navbar;