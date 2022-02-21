import React from "react";

import classes from "./ContentContainers.module.css";

const ContactContainer = () => {
  return (
    <section className={classes.contentWrapper} id="contactSection">
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>Contact me.</h2>
      </div>
    </section>
  );
};

export default ContactContainer;
