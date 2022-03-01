import React from "react";
import { Button } from "react-bootstrap";

import classes from "./UI.module.css";

const MyButton = (props) => {
  const buttonStyle =
    props.type === "filled"
      ? `${classes.button} ${classes.buttonFilled} ${props.customStyle}`
      : `${classes.button} ${classes.buttonBlank} ${props.customStyle}`;

  return (
    <Button
      variant="outline-success"
      className={buttonStyle}
      href={props.href}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
