import React from "react";
import { useDispatch } from "react-redux";

import classes from "./ContentContainers.module.css";
import MyButton from "../../UI/MyButton";

import { navActions } from "../../../../store/nav";

const HomeContainer = () => {
  const dispatch = useDispatch();

  const linkAboutHandler = () => {
    dispatch(navActions.linkAbout());
  };

  return (
    <section
      className={classes.contentWrapper}
      style={{ marginTop: "4rem" }}
    >
      <div className={classes.alignWrapper}>
        <h5 data-aos="fade-up" >
          Hey! I am
        </h5>
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ marginTop: "1rem" }}
        >
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
          I'am a guy who really likes to do creative things. My favourites 
          are design and build something what is blabla. I also like to
          think a lot about things, so logical side of application called
          backend isn't bogy for me either.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          style={{ marginTop: "3rem" }}
        >
          <MyButton href="#about" onClick={linkAboutHandler}>
            More about me
          </MyButton>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
