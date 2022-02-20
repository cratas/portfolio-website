import React from "react";
import { Button } from "react-bootstrap";

import classes from "./UI.module.css";

const MyButton = (props) => {
  return (
    <Button variant="outline-success" className={`${classes.button} ${props.customStyle}`}>
      {props.children}
    </Button>
  );
};

export default MyButton;
