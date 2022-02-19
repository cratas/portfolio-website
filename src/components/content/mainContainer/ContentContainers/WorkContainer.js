import React from "react";

import classes from "./ContentContainers.module.css";

const WorkContainer = () => {
  return (
    <div className={classes.contentWrapper}>
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h1>Some of my work.</h1>
      </div>
    </div>
  );
};

export default WorkContainer;
