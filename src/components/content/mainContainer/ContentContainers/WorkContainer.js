import React from "react";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./WorkContainer.module.css";

import scenePic from './../../../../assets/scene.jpg';

const WorkContainer = () => {
  return (
    <section className={commonClasses.contentWrapper} id="work">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>{"> "}Some of my work.</h2>
      </div>

      <div className={classes.projectWrapper}>
        <div className={classes.textSite}>
          <h2>OpenGl game engine</h2>

          <div className={classes.descriptionWrapper}>
            <p>
              OpenGl game engine written in C++. The project uses
              object-oriented programming and together with the technique of
              design patterns
            </p>
          </div>
        </div>

        <div className={classes.imageSite}>
            <img src={scenePic} className={classes.profilePicture} alt="Me" sizes='500px'></img>
        </div>
      </div>
    </section>
  );
};

export default WorkContainer;
