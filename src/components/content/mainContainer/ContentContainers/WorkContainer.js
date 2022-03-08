import React from "react";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./WorkContainer.module.css";

import scenePic from "./../../../../assets/scene.jpg";
import homeAutomationPic from "./../../../../assets/home-automation.jpg";

const WorkContainer = () => {
  return (
    <>
      <section className={commonClasses.contentWrapper} id="work">
        <div data-aos="fade-up" className={commonClasses.titleWrapper}>
          <h2>{"> "}Some of my work.</h2>
        </div>

        <div className={classes.projectWrapper} style={{ marginTop: "5rem" }}>
          <div className={classes.textSite} data-aos="fade-right">
            <h5>Current project</h5>
            <h2>Home automation using RPi</h2>
            <div className={classes.descriptionWrapper}>
              <p>
                OpenGl game engine written in C++. The project uses
                object-oriented programming together with the technique of
                design patterns ented programming together with the technique of
                design patterns ented programming together with the technique of
                design
              </p>
            </div>
            <div className={classes.technologiesWrapper}>
              <div className={classes.technology}>RPi</div>
              <div className={classes.technology}>Flask</div>
              <div className={classes.technology}>React</div>
              <div className={classes.technology}>Python</div>
              <div className={classes.technology}>SQLlite</div>
            </div>
          </div>
          <div className={classes.imageSite} data-aos="fade-up">
            <img src={homeAutomationPic} alt="Me" sizes="500px"></img>
          </div>
        </div>
      </section>

      <section className={commonClasses.contentWrapper} id="work">
        <div className={classes.projectWrapper}>
          <div className={`${classes.textSite} ${classes.left}`}  data-aos="fade-left">
            <h5 >Recent project</h5>
            <h2 >OpenGl game engine</h2>
            <div className={classes.descriptionWrapper}>
              <p>
                OpenGl game engine written in C++. The project uses
                object-oriented programming together with the technique of
                design patterns
              </p>
            </div>
            <div
              className={`${classes.technologiesWrapper} ${classes.technologiesRight}`} ><div
                className={`${classes.technology} ${classes.technologyLeft}`}>C++</div>
              <div
                className={`${classes.technology} ${classes.technologyLeft}`}>OpenGL</div>
              <div
                className={`${classes.technology} ${classes.technologyLeft}`}>VS code</div>
              <div
                className={`${classes.technology} ${classes.technologyLeft}`}>OOP</div>
            </div>
          </div>
          <div
            className={`${classes.imageSite} ${classes.imageSiteRight}`}
            data-aos="fade-up"
          >
            <img
              src={scenePic}
              className={classes.profilePicture}
              alt="Me"
              sizes="500px"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkContainer;
