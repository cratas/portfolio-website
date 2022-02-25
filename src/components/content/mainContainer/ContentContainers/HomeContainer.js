import React from "react";
import { useDispatch } from "react-redux";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./HomeContainer.module.css";

import MyButton from "../../UI/MyButton";

import { navActions } from "../../../../store/nav";

const HomeContainer = () => {
  const dispatch = useDispatch();

  const linkAboutHandler = () => {
    dispatch(navActions.linkAbout());
  };

  return (
    <section className={`${commonClasses.contentWrapper} ${classes.homeWrapper}`} style={{ marginTop: "1vw" }} >
        <h5 data-aos="fade-up" >Hey! I am</h5>
        <div><h1
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Petr Kratochvíl.
        </h1>
        <h3 data-aos="fade-up" data-aos-delay="600">
          Czech Republic based Frontend Developer.
        </h3></div>
        <p
          data-aos="fade-up"
          data-aos-delay="900"
        >
          I'am a guy who really likes to do creative things. My favourites 
          are design and build something what is blabla. I also like to
          think a lot about things, so logical side of application called
          backend isn't bogy for me either.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <MyButton href="#about" onClick={linkAboutHandler}>
            More about me
          </MyButton>
        </div>
    </section>
  );
};

export default HomeContainer;
