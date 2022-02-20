import React from "react";

import classes from "./ContentContainers.module.css";

const AboutContainer = () => {
  return (
    <div className={classes.contentWrapper}>
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>About me</h2>
      </div>
    </div>
  );
};

export default AboutContainer;
