import React from "react";

import classes from "./ContentContainers.module.css";

const WorkContainer = () => {
  return (
    <section className={classes.contentWrapper} id="work">
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>Some of my work.</h2>
      </div>
    </section>
  );
};

export default WorkContainer;
