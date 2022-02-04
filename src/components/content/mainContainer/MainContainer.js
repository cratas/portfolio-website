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
          <div className={classes.test}></div>
        </Container>
        ;
      </div>
    </>
  );
}

export default MainContainer;
