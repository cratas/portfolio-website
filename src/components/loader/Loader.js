import React from "react";

import classes from "./Loader.module.css";
import mainLogo from "../../assets/main-logo.png";

function Loader() {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.imageWrapper}>
        <img src={mainLogo} alt="main-logo"></img>
      </div>
      <div className={classes.progressBar}></div>
    </div>
  );
}

export default Loader;
