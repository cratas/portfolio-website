import React from "react";


import commonClasses from "./CommonContentContainer.module.css";
import classes from "./WorkContainer.module.css";

const WorkContainer = () => {
  return (
    <section className={commonClasses.contentWrapper} id="work">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>{"> "}Some of my work.</h2>
      </div>


    </section>
  );
};

export default WorkContainer;
