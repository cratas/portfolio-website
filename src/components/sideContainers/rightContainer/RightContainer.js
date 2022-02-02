import React from "react";

import classes from "./RightContainer.module.css";

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

function RightContainer() {
  return (
    <div className={classes.rightContainer}>
      <div className={classes.rightSide}>
        <div className={classes.rightTriangle}></div>
      </div>
      <div className={classes.leftSide}>
        <div className={classes.leftTriangle}></div>
      </div>
      <div className={classes.iconsContainer}>
          <AiFillGithub className={classes.icon}/>
          <FaLinkedin className={classes.icon}/>
      </div>
    </div>
  );
}

export default RightContainer;
