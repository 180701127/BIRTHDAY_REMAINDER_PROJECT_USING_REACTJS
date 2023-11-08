// import logo from './logo.svg';
// import React, { useState, useEffect } from "react";
// import './App.css';

import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
//import { Switch } from 'react-router-dom';

import EmpDetails from "./components/EmpDetails";
import EmpBirthday from "./components/EmpBirthday";
import Error from "./components/Error";


const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/empdetails" Component={EmpDetails} exact />
        <Route path="/empbirthday" Component={EmpBirthday} exact />
        <Route path="*" Component={Error} />

      </Routes>
    
    </Router>
  );
};

export default App;
