import React, { useState } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const dataSaver = (event) => {
    if (event.target.id === "day") setDay(event.target.value);
    if (event.target.id === "month") setMonth(event.target.value);
    if (event.target.id === "year") setYear(event.target.value);
  };
  const reset = (event) => {
    event.preventDefault();
    setYear("");
    setDay("");
    setMonth("");
    console.log(month, day, year);
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
        onChange={dataSaver}
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
        onChange={dataSaver}
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
        onChange={dataSaver}
      />
      </label>
      <button onClick={reset} id="submit" type="submit">
        Calculate
      </button>
    </div>
  );
};

export default Form;
