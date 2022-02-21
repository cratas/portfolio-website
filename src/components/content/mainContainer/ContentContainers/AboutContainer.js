import classes from "./ContentContainers.module.css";

const AboutContainer = () => {
  // const [sectionPosition, setSectioPostion] = useState(document.getElementById("aboutSection"));


  return (
    <section className={classes.contentWrapper} id="aboutSection" >
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>About me</h2>
      </div>
    </section>
  );
};

export default AboutContainer;
