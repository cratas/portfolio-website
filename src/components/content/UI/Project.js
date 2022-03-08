import classes from "./../mainContainer/ContentContainers/WorkContainer.module.css";

const Project = (props) => {
  const textClasses = props.leftAlligned
    ? `${classes.textSite} ${classes.left}`
    : `${classes.textSite}`;

  const technologyClasses = props.leftAlligned
    ? `${classes.technology} ${classes.technologyLeft}`
    : `${classes.technology}`;

    const technologiesClass = props.leftAlligned
    ? `${classes.technologiesWrapper} ${classes.technologiesLeft}`
    : `${classes.technologiesWrapper}`;

  const imageClasses = props.leftAlligned
    ? `${classes.imageSite} ${classes.imageSiteRight}`
    : `${classes.imageSite}`;

  const animation = props.leftAlligned ? "fade-left" : "fade-right";

  const technologies = props.usedTechnologies.map((technology) => (
    <div className={technologyClasses} key={technology.toString()}>{technology}</div>
  ));

  return (
    <div className={classes.projectWrapper} style={{ marginTop: "5rem" }}>
      <div className={textClasses} data-aos={animation}>
        <h5>{props.projectType}</h5>
        <h2>{props.projectName}</h2>
        <div className={classes.descriptionWrapper}>
          <p>
            {props.projectDescription}
          </p>
        </div>
        <div className={technologiesClass}>{technologies}</div>
      </div>
      <div className={imageClasses} data-aos="fade-up">
        <img src={props.image} alt="Me" sizes="500px"></img>
      </div>
    </div>
  );
};

export default Project;

