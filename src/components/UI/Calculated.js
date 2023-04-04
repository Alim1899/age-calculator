import React from "react";
import classes from "./Calculated.module.css";
const Calculated = (props) => {
  return (
    <div className={classes.list}>
      {props.year ? (
        <p className={classes.succes}><span>{props.year} </span>Years</p>
      ) : (
        <p className={classes.notSucces}>
          <span >--</span>Years
        </p>
      )}
      {props.month ? (
        <p className={classes.succes}><span >{props.month} </span>Months</p>
      ) : (
        <p className={classes.notSucces}>
          <span >--</span>Months
        </p>
      )}
      {props.day ? (
        <p className={classes.succes}><span >{props.day} </span>Days</p>
      ) : (
        <p className={classes.notSucces}>
          <span >--</span>Days
        </p>
      )}
    </div>
  );
};

export default Calculated;
