import React from "react";
import Form from "../Forms/Form";
const Content = (props) => {
  return (
    <>
      <Form />
      <h2>{props.day}</h2>
    </>
  );
};
export default Content;
