import commonClasses from "./CommonContentContainer.module.css";
import classes from "./AboutContainer.module.css";
import { Row, Col } from "react-bootstrap";

import profilePic from "../../../../assets/profile-image.png";

const AboutContainer = () => {
  const handeTypingTest = () => {
    window.open("https://monkeytype.com/", "_blank");
  };

  return (
    <section className={commonClasses.contentWrapper} id="about">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>{"> "}About me</h2>
      </div>

      <div className={classes.aboutWrapper}>
        <div className={classes.aboutLeft}>
          <p data-aos="fade-up">
            My name is Petr Kratochvíl, software developer currently focusing on
            building{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              things for web in React
            </span>
            . I also have experience with
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              {" "}
              Backend development
            </span>
            , especially in
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              {" "}
              Django
            </span>{" "}
            framework.
          </p>

          <p data-aos="fade-up">
            My interest in coding started on high school, where I’ve started to
            study{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              Computer science
            </span>
            . Now I’m studying at{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              VSB - Technical University of Ostrava
            </span>
            , where I’ve completed my Bachelor’s degree this year.
          </p>
          <p data-aos="fade-up">
            In addition to web development, I have experience with{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              algorithms
            </span>
            ,{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>databases</span>{" "}
            and{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              operating systems
            </span>
            . My average typing speed is around{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>120 wpm</span>,
            try yours{" "}
            <span className={classes.typingSpeed} onClick={handeTypingTest}>
              here
            </span>
            .
          </p>

          <div className={classes.techStack}>
            <h4 data-aos="fade-up">{"> "}My tech stack</h4>
            <Row data-aos="fade-up">
              <Col>
                <ul>
                  <li>JS ES6+</li>
                  <li>HTML/CSS</li>
                  <li>React</li>
                  <li>Django</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Git</li>
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
