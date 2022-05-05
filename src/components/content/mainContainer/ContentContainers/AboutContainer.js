import commonClasses from "./CommonContentContainer.module.css";
import classes from "./AboutContainer.module.css";
import { Row, Col } from "react-bootstrap";
import Technologies from "../../UI/Technologies";

import profilePic from "../../../../assets/profile-pic.jpg";

const AboutContainer = () => {
  return (
    <section className={commonClasses.contentWrapper} id="about">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>{"> "}About me</h2>
      </div>

      <div className={classes.aboutWrapper}>
        <div className={classes.aboutLeft}>
          <p data-aos="fade-up">
            My name is Petr Kratochvíl and I’m 21 y.o. developer currently
            focusing on building user interfaces. When I’ve discovered React.js,
            it has became my favourite tool.
          </p>

          <p data-aos="fade-up">
            I started coding on high school, where I started to study Computer
            science. After that I’ve decided to continue at VSB - Technical
            University of Ostrava, where I’m completing my Bachelor’s degree
            this year.
          </p>
          <p data-aos="fade-up">
            My name is Petr Kratochvíl and I’m 21 y.o. developer currently
            focusing on building user interfaces.
          </p>

          <div className={classes.techStack}>
            <h4 data-aos="fade-up">{"> "}My tech stack</h4>
            <Row data-aos="fade-up">
              <Col>
                <ul>
                  <li>JavaScript ES6+</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>React</li>
                  <li>Django</li>
                  <li>Git</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C/C++</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className={classes.aboutRight} data-aos="fade-up">
          <div className={classes.imageWrapper}>
            <img
              src={profilePic}
              className={classes.profilePicture}
              alt="Me"
              sizes="500px"
            ></img>
          </div>
        </div>
      </div>

      <div className={classes.techStack}>
        {/* <p data-aos="fade-up">
        My name is Petr Kratochvíl and I’am 21 y.o. developer currently focusing
        on building user interfaces.
      </p> */}
        {/* <Technologies centered={true} usedTechnologies={["React", "ES6", "GIT", "Java","Python", "C/C++", "SQL", "OOP", "Design patterns", "VS code"]} leftAlligned={true}/> */}
      </div>
    </section>
  );
};

export default AboutContainer;
