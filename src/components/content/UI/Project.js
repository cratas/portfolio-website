import classes from "./../mainContainer/contentContainers/WorkContainer.module.css";
import Technologies from "./Technologies";

const Project = (props) => {
  const textClasses = props.leftAlligned
    ? `${classes.textSite} ${classes.left}`
    : `${classes.textSite}`;

  const imageClasses = props.leftAlligned
    ? `${classes.imageSite} ${classes.imageSiteRight}`
    : `${classes.imageSite}`;

  const animation = props.leftAlligned ? "fade-left" : "fade-right";



  return (
    <div className={classes.projectWrapper} style={{ marginTop: "5rem" }}>
      <div className={classes.alignWrapper}>
        <div className={textClasses} data-aos={animation}>
          <h5>{props.projectType}</h5>
          <h2>{props.projectName}</h2>
          <div className={classes.descriptionWrapper}>
            <p>{props.projectDescription}</p>
          </div>
          <Technologies usedTechnologies={props.usedTechnologies} leftAlligned={props.leftAlligned}/>
        </div>
        <div className={imageClasses} data-aos="fade-up">
          <img src={props.image} alt="Me" sizes="500px"></img>
        </div>
      </div>
    </div>
  );
};

export default Project;
