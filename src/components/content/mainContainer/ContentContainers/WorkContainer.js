//import components
import Project from "../../UI/Project";
import MyButton from "../../UI/MyButton";
//bootstrap components

//import styles
import commonClasses from "./CommonContentContainer.module.css";
import classes from "./WorkContainer.module.css";

// import images
import scenePic from "./../../../../assets/scene.jpg";
import homeAutomationPic from "./../../../../assets/home-automation.jpg";

const WorkContainer = () => {

  const openGithub = () => {
    window.open("https://github.com/cratas?tab=repositories", "_blank");
  };

  return (
    <>
      <section
        className={commonClasses.contentWrapper}
        style={{ minHeight: "0" }}
        id="work"
      >
        <div data-aos="fade-up" className={commonClasses.titleWrapper}>
          <h2>{"> "}Some of my work.</h2>
        </div>

        <Project
          leftAlligned={false}
          image={homeAutomationPic}
          projectType={"Current project"}
          projectName={"Home automation using RPi"}
          projectDescription={
            "OpenGl game engine written in C++. The project uses object-oriented programming together with the programming together with the technique of design"
          }
          usedTechnologies={["RPI", "Django", "React", "SQLite"]}
        />

        <Project
          leftAlligned={true}
          image={scenePic}
          projectType={"RecentProject"}
          projectName={"OpenGL game engine"}
          projectDescription={
            "OpenGl game engine written in C++. The project uses object-oriented programming together with the technique of design patterns ented programming together with the technique of design patterns ented programming together with the technique of design"
          }
          usedTechnologies={["C++", "OpenGL", "VS code", "OOP"]}
        />

        <Project
          leftAlligned={false}
          image={homeAutomationPic}
          projectType={"Recent project"}
          projectName={"Personal portfolio website"}
          projectDescription={
            "OpenGl game engine written in C++. The project uses object-oriented programming together with the technique of design patterns ented programming together with the technique of design patterns ented programming together with the technique of design"
          }
          usedTechnologies={["React", "Redux", "Bootstrap", "OOP"]}
        />


        <div className={classes.talkWrapper} data-aos="fade-up">
          <MyButton onClick={openGithub} buttonType="fidlled">More of my work</MyButton>
        </div>

      </section>
    </>
  );
};

export default WorkContainer;
