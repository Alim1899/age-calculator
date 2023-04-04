import React from "react";
import classes from './Content.module.css';
import Form from "../Forms/Form";
import Calculated from "./Calculated";
const Content = (props) => {
  return (
    <div className={classes.content}>
      <Form />
      <Calculated/>
    </div>
  );
};
export default Content;
