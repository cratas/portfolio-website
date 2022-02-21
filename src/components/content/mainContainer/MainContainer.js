import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import NavbarContainer from "../Navbar/NavbarContainer";
import AboutContainer from "./ContentContainers/AboutContainer";
import ContactContainer from "./ContentContainers/ContactContainer";
import HomeContainer from "./ContentContainers/HomeContainer";
import WorkContainer from "./ContentContainers/WorkContainer";
import FooterContainer from "./ContentContainers/FooterContainer";

import classes from "./MainContainer.module.css";

function MainContainer() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollPosition(window.pageYOffset);

      console.log(scrollPosition);

      const element = document.getElementById("aboutSection");
      console.log(element.getBoundingClientRect().y);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);


  return (
    <div className={classes.contentWrapper}>
      <Container className={classes.container}>
        <NavbarContainer />

        <HomeContainer />
        <AboutContainer />
        <WorkContainer />
        <ContactContainer />
        <FooterContainer />
      </Container>
    </div>
  );
}

export default MainContainer;
