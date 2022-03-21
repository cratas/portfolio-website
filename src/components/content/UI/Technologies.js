import classes from "./UI.module.css";

const Technologies = (props) => {

  let technologyClasses = props.leftAlligned
    ? `shadow ${classes.technology} ${classes.technologyLeft}`
    : `shadow ${classes.technology}`;

  let technologiesClass = props.leftAlligned
    ? `${classes.technologiesWrapper} ${classes.technologiesLeft}`
    : `${classes.technologiesWrapper}`;

  if(props.centered) {
    technologiesClass = `${classes.technologiesWrapper} ${classes.technologiesCentered}`
    technologyClasses = `${classes.technology} ${classes.technologyCentered}`
  }

  const technologies = props.usedTechnologies.map((technology) => (
    <div className={technologyClasses} key={Math.random().toString()}>
      {technology}
    </div>
  ));

  return <div className={technologiesClass}>{technologies}</div>
};

export default Technologies;
