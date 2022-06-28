
import classes from "./Loader.module.css";
import mainLogo from "../../assets/main-logo.png";
import tagsLogo from "../../assets/tags-logo.png";

function Loader() {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.imageWrapper}>
        <img src={tagsLogo} alt="main-logo"></img>
        <img className={classes.mainLogo}  src={mainLogo} alt="main-logo"></img>
      </div>
    </div>
  );
}

export default Loader;
