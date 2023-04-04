import React from "react";
import classes from './Calculated.module.css';
const Calculated = (props) => {
  return <div className={classes.list}>
    <h2><span>{props.year?props.year:'--'}</span>Years</h2>
    <h2><span>{props.month?props.month:'--'}</span>Months</h2>
    <h2><span>{props.day?props.day:'--'}</span>Days</h2>
  </div>;
};

export default Calculated;
