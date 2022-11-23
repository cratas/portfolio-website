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
    <section
      className={`${commonClasses.contentWrapper} ${classes.homeWrapper} mt-5`}
    >
      <h5 data-aos="fade-up">Hi there! I'm </h5>
      <div>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Petr Kratochvíl.
        </h1>
        <h3 data-aos="fade-up" data-aos-delay="400">
          Creative Full Stack Developer.
        </h3>
      </div>
      <p data-aos="fade-up" data-aos-delay="600">
        I'm passionate about doing{" "}
        <span className={commonClasses.highlight}>creative things</span>. My
        favourite one is{" "}
        <span className={commonClasses.highlight}>programming</span>. My biggest
        passion is creating things for the web, especially using my favorite
        tools <span className={commonClasses.highlight}>React</span> and <span className={commonClasses.highlight}>Node</span>. I also like things organized and simple.
      </p>
      <div data-aos="fade-up" data-aos-delay="800">
        <MyButton
          href="#about"
          onClick={linkAboutHandler}
          style={{ marginTop: "3vh" }}
        >
          More about me
        </MyButton>
      </div>
    </section>
  );
};

export default HomeContainer;
