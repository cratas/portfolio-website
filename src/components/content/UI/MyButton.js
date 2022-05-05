import React from "react";
import { Button } from "react-bootstrap";

import classes from "./UI.module.css";

const MyButton = (props) => {
  const buttonStyle =
    props.buttonType === "filled"
      ? `${classes.button} ${classes.buttonFilled} ${props.customStyle}`
      : `${classes.button} ${classes.buttonBlank} ${props.customStyle}`;


  return (
    <Button
      type={props.type}
      variant="outline-success"
      className={buttonStyle}
      href={props.href}
      onClick={props.onClick}
      style={props.style}
      target={props.target} 
      rel={props.rel}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
