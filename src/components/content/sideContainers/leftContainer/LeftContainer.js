import React from 'react';

import classes from "./LeftContainer.module.css";

import trianglesImage from "../../../../assets/triangles.png";

const LeftContainer = () => {
  return (
    <div className={classes.leftContainer}>
      <div className={classes.imageContainer}>
        <img src={trianglesImage} alt="trianglesImage" />
      </div>
      {/* <Indicators /> */}
    </div>
  );
};

export default LeftContainer;
