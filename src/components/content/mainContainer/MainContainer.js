import React from "react";
import { Container } from "react-bootstrap";

import NavbarContainer from "./Navbar/NavbarContainer";

import classes from "./MainContainer.module.css";

function MainContainer() {
  return (
    <>
      <div className={classes.contentWrapper}>
        <Container className={classes.container}>
          <NavbarContainer />
          <div className={classes.test}>
            <h1>Petr Kratochvíl</h1>
            <h2>Computer science student with passion for web development.</h2>
            <p id="pecko">
            I'am a Computer Science student from Czech Republic with a passion
            for web development. I'am a Computer Science student from Czech
            Republic with a passion for web development.
          </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MainContainer;
