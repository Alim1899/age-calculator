import React, { useState, useRef } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [button, setButton] = useState(true);

  const enteredDay = useRef();
  const enteredMonth = useRef();
  const enteredYear = useRef();

  const validateFields = (e) => {
  
    if (e.target.checkValidity()) {
      e.target.style.outline = "1px solid green";
      if (!e.target.value) e.target.style.outline = "1px solid red";
      if (e.target.id === "day") {
        setDay(enteredDay.current.value);
      }
      if (e.target.id === "month") {
        setMonth(enteredMonth.current.value);
      }
      if (e.target.id === "year") {
        setYear(enteredYear.current.value);
        if(enteredYear.current.value<1920){
          e.target.style.outline = '1px solid red';
        }
      }
    } else {
      e.target.style.outline = "1px solid red";
      setTimeout(() => {
        e.target.style.outline = "1px solid black";
      }, 1000);
    }
  };

  const btnEnabler = (e) => {
    if (
      enteredDay.current.value > 0 &&
      enteredMonth.current.value > 0 &&
      enteredYear.current.value>= 1920
    ) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const calculate = (props) => {
    const now = new Date();
    const userDate = new Date(year, month - 1, day);
    let yyyy = now.getFullYear() - userDate.getFullYear();
    let mm = now.getMonth() - userDate.getMonth();
    let dd = now.getDate() - userDate.getDate();
    if (dd < 0) {
      dd = 31 - Math.abs(dd);
      mm = mm - 1;
    }

    if (mm < 0) {
      mm = 12 - Math.abs(mm);
      yyyy = yyyy - 1;
    }
    return [dd, mm, yyyy];
  };
  calculate();

  const reset = (event) => {
    event.preventDefault();
    props.onCalculate(calculate()[0], calculate()[1], calculate()[2]);
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
          ref={enteredDay}
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
          ref={enteredMonth}
          onChange={validateFields}
        />
      </label>
      <label htmlFor="year">
        <h4>
          Year
          <span style={{ backgroundColor: "white", fontSize: "8px" }}>
            (min:1900)
          </span>
        </h4>
        <input
          type="number"
          min="1"
          max="2022"
          id="year"
          value={year}
          ref={enteredYear}
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
