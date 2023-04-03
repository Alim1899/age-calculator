import React, { useState } from "react";

const Form = (props) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dataSaver = (event) => {
    if (event.target.id === "day") setDay(( event.target.value));
    if (event.target.id === "month") setMonth(event.target.value);
    if (event.target.id === "year") setYear(event.target.value);
  };
  
    console.log(month,day,year);

  const reset = (event) => {
    event.preventDefault();
    setYear('');
    setDay('');
    setMonth('');
    console.log(month,day,year);
  };

  return (
    <div>
      <input
        type="number"
        max="31"
        min="0"
        id="day"
        placeholder="dd"
        value={day}
        onChange={dataSaver}
      />
      <input
        type="number"
        min="0"
        max="12"
        id="month"
        placeholder="mm"
        value={month}
        onChange={dataSaver}
      />
      <input
        type="number"
        min="0"
        max="2023"
        id="year"
        value={year}
        placeholder="yyyy"
        onChange={dataSaver}
      />
      <button onClick={reset} id="submit" type="submit">
        Calculate
      </button>
    </div>
  );
};

export default Form;
