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
      if (!e.target.value) e.target.style.outline = "1px solid red";
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

  const btnEnabler = (e) => {
    if (
      document.getElementById("day").value > 0 &&
      document.getElementById("month").value > 0 &&
      document.getElementById("year").value > 0
    ) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const calculate = (props) => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear()-year;
    //console.log("Day: ", dd, " Month: ", mm, " Year: ", yyyy);
    return [dd,mm,yyyy];
  };
  // calculate();

  const reset = (event) => {
    event.preventDefault();
    props.onCalculate(calculate()[0],calculate()[1],calculate()[2]);
    setYear("");
    setDay("");
    setMonth("");
    setButton(true);
  };
  return (
    <form onChange={btnEnabler} className={classes.form}>
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
    </form>
  );
};

export default Form;
