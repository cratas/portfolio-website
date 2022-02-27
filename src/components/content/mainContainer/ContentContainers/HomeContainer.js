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
    <section className={`${commonClasses.contentWrapper} ${classes.homeWrapper}`} >
        <h5 data-aos="fade-up" >Hey! I am</h5>
        <div><h1
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Petr Kratochvíl.
        </h1>
        <h3 data-aos="fade-up" data-aos-delay="400">
          Creative Frontend Developer.
        </h3></div>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I'am a guy who really likes to do creative things. My favourites 
          are design and build something what is blabla. I also like to
          think a lot about things, so logical side of application called
          backend isn't bogy for me either.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <MyButton href="#about" onClick={linkAboutHandler} style={{marginTop: '3vh'}}>
            More about me
          </MyButton>
        </div>
    </section>
  );
};

export default HomeContainer;
