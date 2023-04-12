import React from "react";
import classes from './Content.module.css';
import Form from "../Forms/Form";
import Calculated from "./Calculated";
const Content = (props) => {
  const [date, setDate] = useState([]);
  const calculateDate = (iDay, iMonth, iYear) => {
    setDate((inputtedDate) => {
      return [...inputtedDate, { day: iDay, month: iMonth, year: iYear }];
    });
    setDate([iDay,iMonth,iYear])
    console.log(date);
  };
  return (
    <div className={classes.content}>
      <Form onCalculate={calculateDate} />
      <Calculated year={date[2]} month={date[1]} day={date[0]} />
    </div>
  );
};
export default Content;
