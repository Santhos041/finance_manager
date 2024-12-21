import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Expense from "./pages/Expense/Expense";
import Dashboard from "./pages/Dashboard/Dashboard";
import Income from "./pages/Income/Income";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Expense" element={<Expense />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Income" element={<Income />} />
      </Routes>
    </Router>
  );
}

export default App;
