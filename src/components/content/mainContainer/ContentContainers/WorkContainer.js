//import components
import Project from "../../UI/Project";
import MyButton from "../../UI/MyButton";
//bootstrap components

//import styles
import commonClasses from "./CommonContentContainer.module.css";
import classes from "./WorkContainer.module.css";

// import images
import scenePic from "./../../../../assets/scene.jpg";
import homeAutomationPic from "./../../../../assets/rooms.png";
import AgriculturalPic from "./../../../../assets/agr-services.png";
import portfolioPic from "./../../../../assets/portfolio.png";


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
          <h2>{"> "}Some of my work</h2>
        </div>

        <Project
          leftAlligned={false}
          image={AgriculturalPic}
          projectType={"Current project"}
          projectName={"Agricultural services website"}
          projectDescription={
            "Agricultural services website implemented in React. The project focuses on the design and clarity of the user interface."
          }
          usedTechnologies={["React", "MUI", "React router"]}
        />

        <Project
          leftAlligned={true}
          image={homeAutomationPic}
          projectType={"Recent project"}
          projectName={"Home automation using RPi"}
          projectDescription={
            "Home automation system using Raspberry Pi, which is able to communicate with sensors via HTTP protocol. The data are stored in a SQLite database on a RPi. Backend is implemented in Django framework and Frontend in React."
          }
          usedTechnologies={["RPI", "Django", "React", "SQLite"]}
        />

        {/* <Project
          leftAlligned={false}
          image={portfolioPic}
          projectType={"RecentProject"}
          projectName={"Portfolio website"}
          projectDescription={
            "OpenGl game engine written in C++. Part of the program is the main scene, in which it is possible to move using the camera. The project uses object-oriented programming together with the technique of design patterns. "
          }
          usedTechnologies={["C++", "OpenGL", "OOP"]}
          border={true}
        /> */}

        <Project
          leftAlligned={false}
          image={scenePic}
          projectType={"RecentProject"}
          projectName={"OpenGL game engine"}
          projectDescription={
            "OpenGl game engine written in C++. Part of the program is the main scene, in which it is possible to move using the camera. The project uses object-oriented programming together with the technique of design patterns. "
          }
          usedTechnologies={["C++", "OpenGL", "OOP"]}
        />

        <div className={classes.talkWrapper} data-aos="fade-up">
          <MyButton onClick={openGithub} buttonType="fidlled">
            More of my work
          </MyButton>
        </div>
      </section>
    </>
  );
};

export default WorkContainer;
