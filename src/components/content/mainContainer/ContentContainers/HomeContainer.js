import React from "react";
import classes from "./ContentContainers.module.css";
import MyButton from "../../UI/MyButton";

const HomeContainer = () => {
  return (
    <div className={classes.contentWrapper} style={{marginTop: "4rem"}}>
      <div className={classes.alignWrapper}>
        <h5 data-aos="fade-up" id="top">
          Hey! I am
        </h5>
        <h1 data-aos="fade-up" data-aos-delay="300" style={{ marginTop: "1rem" }}>
          Petr Kratochvíl.
        </h1>
        <h3 data-aos="fade-up" data-aos-delay="600">
          Czech Republic based Frontend Developer.
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="900"
          style={{ marginTop: "2rem" }}
        >
          I'am a guy who likes to do creative things, especially programming.
          I'am a guy who likes to do creative things, especially programming.
          I'am a guy who likes to do creative things, especially programming.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          style={{ marginTop: "4rem" }}
        >
          <MyButton>More about me</MyButton>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
