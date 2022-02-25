import commonClasses from "./CommonContentContainer.module.css";
import classes from "./AboutContainer.module.css";

import profilePic from '../../../../assets/profile-pic.jpg';

const AboutContainer = () => {
  return (
    <section className={commonClasses.contentWrapper} id="about">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>About me</h2>
      </div>

      <div className={classes.aboutWrapper}>
        <div className={classes.aboutLeft} data-aos="fade-up" data-aos-delay="300" >
          <p>
            My name is Petr Kratochvíl and I’am 21 y.o. developer currently
            focusing on building user interfaces. When I’ve discovered React.js,
            it has became my favourite tool.
          </p>
          <p>
            I started coding on high school, where I started to study Computer
            science. After that I’ve decided to continue at VSB - Technical
            University of Ostrava, where I’am completing my Bachelor’s degree
            this year.
          </p>
          <p>
            My name is Petr Kratochvíl and I’am 21 y.o. developer currently
            focusing on building user interfaces.
          </p>
          <p>
            I started coding on high school, where I started to study Computer
            science. After that I’ve decided to continue at VSB - Technical
            University of Ostrava, where I’am completing my Bachelor’s degree
            this year.
          </p>
        </div>
        <div className={classes.aboutRight} data-aos="fade-up" data-aos-delay="600">
          <div className={classes.imageWrapper}>
            <img src={profilePic} className={classes.profilePicture} alt="Me" sizes='500px'></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
