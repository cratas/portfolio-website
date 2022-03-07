import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";



import classes from "./UI.module.css";

const Icon = (props) => {
  const openGithub = () => {
    window.open("https://github.com/cratas", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/feed/", "_blank");
  };

  return (
    <>
      {props.iconType === "GIT" ? (
        <FiGithub onClick={openGithub} className={classes.icon} style={props.style}/>
      ) : (
        <FaLinkedinIn onClick={openLinkedin} className={classes.icon} />
      )}
    </>
  );
};

export default Icon;
