import React, { useState } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const reset = (event) => {
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
          onChange={(e) => setDay(e.target.value)}
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
          onChange={(e) => setMonth(e.target.value)}
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
          onChange={(e) => setYear(e.target.value)}
        />
      </label>
      <button onClick={reset} id="submit" type="submit">
        Calculate
      </button>
    </div>
  );
};

export default Form;
