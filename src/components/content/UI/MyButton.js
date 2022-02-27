import React from "react";
import { Button } from "react-bootstrap";

import classes from "./UI.module.css";

const MyButton = (props) => {
  return (
    <Button variant="outline-success" className={`${classes.button} ${props.customStyle}`} href={props.href} onClick={props.onClick} style={props.style}>
      {props.children}
    </Button>
  );
};

export default MyButton;
