import React from "react";

import classes from "./ContentContainers.module.css";

const WorkContainer = () => {
  return (
    <div className={classes.contentWrapper}>
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>Some of my work.</h2>
      </div>
    </div>
  );
};

export default WorkContainer;
