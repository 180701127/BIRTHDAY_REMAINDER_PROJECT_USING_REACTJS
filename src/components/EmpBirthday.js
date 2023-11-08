import React from 'react';
import { Link } from 'react-router-dom';
import data from "./Data";
import EmpData from './EmpData';

const EmpBirthday = () => {
  return (
    <div className="container">
      <h3>Today Birthday</h3>
      <EmpData employee={data}/>

      <Link to="/empdetails">Employee Details</Link>
        
      
    </div>
  )
}

export default EmpBirthday