import React from "react";

const EmpData = ({ employee }) => {
  let currDate = new Date();
  let newDate = currDate.getDate();
  let newDate_1 = newDate < 10 ? `0${newDate}` : `${newDate}`;
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let current_Month = month[currDate.getMonth()];

  let actual_Date = `${newDate_1} ${current_Month}`;

  return employee.map(({ id, name, dob, age, gender, image }) => {
    let empDOB = dob;
    if (empDOB === actual_Date) {
      return (
        <div key={id} className="person">
          <img src={image} alt={name} />
          <div className="emp_details">
            <h4>{name}</h4>
            <p>Gender: {gender}</p>
            <p>{dob}</p>
            <h4>Age: {age}</h4>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
};

export default EmpData;
