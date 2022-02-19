import React from "react";

import classes from "./ContentContainers.module.css";

const ContactContainer = () => {
  return (
    <div className={classes.contentWrapper}>
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h1>Contact me.</h1>
      </div>
    </div>
  );
};

export default ContactContainer;
