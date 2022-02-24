import React from "react";

import classes from "./RightContainer.module.css";

import Icon from "../../UI/Icon";

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
          <Icon iconType="GIT" />
          <Icon iconType="LINKEDIN" />
      </div>
    </div>
  );
}

export default RightContainer;
