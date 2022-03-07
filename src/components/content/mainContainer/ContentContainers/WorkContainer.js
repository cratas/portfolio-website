import React from "react";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./WorkContainer.module.css";

import scenePic from "./../../../../assets/scene.jpg";

const WorkContainer = () => {
  return (
    <section className={commonClasses.contentWrapper} id="work">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>{"> "}Some of my work.</h2>
      </div>

      <div className={classes.projectWrapper}>
        <div className={classes.textSite} data-aos="fade-right">
          <h5>Recent project</h5>
          <h2>OpenGl game engine</h2>

          <div className={classes.descriptionWrapper}>
            <p>
              OpenGl game engine written in C++. The project uses
              object-oriented programming together with the technique of design
              patterns
            </p>
          </div>

          <div className={classes.technologiesWrapper}>
            <div className={classes.technology}>C++</div>
            <div className={classes.technology}>OpenGL</div>
            <div className={classes.technology}>VS code</div>
            <div className={classes.technology}>OOP</div>

          </div>
        </div>

        <div className={classes.imageSite} data-aos="fade-up">
          <img
            src={scenePic}
            className={classes.profilePicture}
            alt="Me"
            sizes="500px"
          ></img>
        </div>
      </div>
      
    </section>
  );
};

export default WorkContainer;
