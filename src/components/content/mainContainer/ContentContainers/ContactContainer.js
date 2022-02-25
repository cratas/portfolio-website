import React from "react";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <section className={commonClasses.contentWrapper} id="contact">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>Contact me.</h2>
      </div>
    </section>
  );
};

export default ContactContainer;
