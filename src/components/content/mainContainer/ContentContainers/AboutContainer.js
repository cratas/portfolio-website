import classes from "./ContentContainers.module.css";


const AboutContainer = () => {
  return (
    <section className={classes.contentWrapper} id="about">
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>About me</h2>
      </div>
    </section>
  );
};

export default AboutContainer;
