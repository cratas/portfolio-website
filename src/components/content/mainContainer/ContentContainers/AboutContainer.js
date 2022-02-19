import React from "react";

import classes from "./ContentContainers.module.css";

const AboutContainer = () => {
  return (
    <div className={classes.contentWrapper}>
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h1>About me</h1>
      </div>
    </div>
  );
};

export default AboutContainer;
