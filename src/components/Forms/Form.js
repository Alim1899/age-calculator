import React, { useState } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [button, setButton] = useState(true);

  const validateFields = (e) => {
    
      if (e.target.checkValidity()) {
        e.target.style.outline = "1px solid green";
        if(!e.target.value)e.target.style.outline = "1px solid red";
        if (e.target.id === "day") {
          setDay(e.target.value);
        }
        if (e.target.id === "month") {
          setMonth(e.target.value);
        }
        if (e.target.id === "year") {
          setYear(e.target.value);
        }
      } else {
        e.target.style.outline = "1px solid red";
        setTimeout(() => {
          e.target.style.outline = "1px solid green";
        }, 1000);
      }
      
  };

  const calculate = (e, dd, mm, yyyy) => {
    const enteredDate = new Date(year, month - 1, day);
    const now = new Date();
    yyyy = now.getFullYear() - enteredDate.getFullYear();
    mm = Math.abs(now.getMonth() - enteredDate.getMonth());
    dd = Math.abs(now.getDate() - enteredDate.getDate());

    if (month && day && year) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const reset = (event) => {
    event.preventDefault();
    props.onCalculate(day, month, year);
    console.log(day, month, year);
    setYear("");
    setDay("");
    setMonth("");
    setButton(true);
  };
  return (
    <form onSubmit={calculate}>
      <div className={classes.form}>
        <label htmlFor="day">
          <h4>Day</h4>
          <input
            type="number"
            max="31"
            min="1"
            id="day"
            placeholder="dd"
            maxLength="2"
            value={day}
            onChange={validateFields}
          />
        </label>
        <label htmlFor="month">
          <h4>Month</h4>
          <input
            type="number"
            min="1"
            max="12"
            id="month"
            placeholder="mm"
            maxLength="2"
            value={month}
            onChange={validateFields}
          />
        </label>
        <label htmlFor="year">
          <h4>Year</h4>
          <input
            type="number"
            min="1"
            max="2023"
            id="year"
            value={year}
            maxLength="4"
            placeholder="yyyy"
            onChange={validateFields}
          />
        </label>
        <button onClick={reset} id="submit" type="submit" disabled={button}>
          Calculate
        </button>
      </div>
    </form>
  );
};

export default Form;
