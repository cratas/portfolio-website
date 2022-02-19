import React from "react";
import classes from "./ContentContainers.module.css";

const HomeContainer = () => {
  return (
    <div className={classes.contentWrapper} >
      <p data-aos="fade-up" id="top">
        Hi! I am
      </p>
      {/* <h1 data-aos="fade-up" data-aos-delay="100" data-aos-mirror="true">
        Petr Kratochvíl
      </h1>
      <h2 data-aos="fade-up" data-aos-delay="200">
        Computer science student with passion for web development.
      </h2>
      <p data-aos="fade-up" data-aos-delay="300">
        I'am a Computer Science student from Czech Republic with a passion for
        web development. I'am a Computer Science student from Czech Republic
        with a passion for web development.
      </p> */}
    </div>
  );
};

export default HomeContainer;
