import React from "react";

import classes from "./ContentContainers.module.css";

const ContactContainer = () => {
  return (
    <div className={classes.contentWrapper}>
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>Contact me.</h2>
      </div>
    </div>
  );
};

export default ContactContainer;
