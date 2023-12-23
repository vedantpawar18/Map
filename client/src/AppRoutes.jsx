import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

const AppRoutes = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
