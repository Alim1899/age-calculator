import React from "react";
import classes from './Content.module.css';
import Form from "../Forms/Form";
import Calculated from "./Calculated";
const Content = (props) => {
  return (
    <div className={classes.content}>
      <Form />
      <Calculated year='19' month='6' />
    </div>
  );
};
export default Content;
