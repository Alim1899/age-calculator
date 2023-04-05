import React, { useState } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const fieldValidationd = (event, max, calMax) => {
    if (event.target.value.length > max || +event.target.value > calMax) {
      event.target.style.outline = "1px solid red";
      if (event.target.id === "day") setDay(event.target.value.substring(0, 2));
      if (event.target.id === "month")
        setMonth(event.target.value.substring(0, 2));
      if (event.target.id === "year")
        setYear(event.target.value.substring(0, 4));
    } else {
      event.target.style.outline = "none";
      if (event.target.id === "day") setDay(event.target.value);
      if (event.target.id === "month") setMonth(event.target.value);
      if (event.target.id === "year") setYear(event.target.value);
    }
  };
  const calculate = (e, dd, mm, yyyy) => {
    const enteredDate = new Date(year, month - 1, day);
    const now = new Date();
    
     yyyy = now.getFullYear() - enteredDate.getFullYear();
     mm = Math.abs(now.getMonth() - enteredDate.getMonth());
    dd = Math.abs(now.getDate() - enteredDate.getDate());
    console.log(enteredDate);
    console.log(now.getDate(), enteredDate.getDate() );
    console.log(yyyy, "Years", mm, 'Months', dd, "Days old");
    // if ((day, month, year)) console.log("true");
    // else console.log("false");
  };
  const reset = (event) => {
    calculate();
    event.preventDefault();
    props.onCalculate(day, month, year);
    setYear("");
    setDay("");
    setMonth("");
  };
  return (
    <div className={classes.form}>
      <label htmlFor="day">
        <h4>Day</h4>
        <input
          type="number"
          max="31"
          min="0"
          id="day"
          placeholder="dd"
          value={day}
          onChange={(e) => fieldValidationd(e, 2, 31)}
        />
      </label>
      <label htmlFor="month">
        <h4>Month</h4>
        <input
          type="number"
          min="0"
          max="12"
          id="month"
          placeholder="mm"
          value={month}
          onChange={(e) => fieldValidationd(e, 2, 12)}
        />
      </label>
      <label htmlFor="year">
        <h4>Year</h4>
        <input
          type="number"
          min="0"
          max="2023"
          id="year"
          value={year}
          placeholder="yyyy"
          onChange={(e) => fieldValidationd(e, 4, 2023)}
        />
      </label>
      <button onClick={reset} id="submit" type="submit">
        Calculate
      </button>
    </div>
  );
};

export default Form;
