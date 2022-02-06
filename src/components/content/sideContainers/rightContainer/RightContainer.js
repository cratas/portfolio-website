import React from "react";

import classes from "./RightContainer.module.css";

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

function RightContainer() {

  const openGithub = () => {
    window.open('https://github.com/cratas', '_blank');
  }

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/feed/','_blank');
  }

  return (
    <div className={classes.rightContainer}>
      <div className={classes.rightSide}>
        <div className={classes.rightTriangle}></div>
      </div>
      <div className={classes.leftSide}>
        <div className={classes.leftTriangle}></div>
      </div>
      <div className={classes.iconsContainer}>
          <AiFillGithub onClick={openGithub} className={classes.icon}/>
          <FaLinkedin onClick={openLinkedin} className={classes.icon}/>
      </div>
    </div>
  );
}

export default RightContainer;
