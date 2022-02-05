import React, { useState } from "react";

import { Navbar, Button, Container, Nav, Form } from "react-bootstrap";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

import classes from "./NavbarContainer.module.css";

import mainLogo from "../../../../assets/main-logo.png";
import hoverLogo from "../../../../assets/empty-logo.png";

const NavbarContainer = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const changeToggleStatus = () => {
    setIsToggleActive((status) => !status);
  };

  const mouserEnterLogo = () => {
    setIsLogoHovered(true);
  };

  const mouseLeaveLogo = () => {
    setIsLogoHovered(false);
  };

  return (
    <Navbar sticky="top" expand="lg" className={classes.navbarContainer}>
      <Container fluid>
        <Navbar.Brand href="#">
          <div className={classes.imageContainer}>
            <img
              src={!isLogoHovered ? mainLogo : hoverLogo}
              alt="main-logo"
              onMouseEnter={mouserEnterLogo}
              onMouseLeave={mouseLeaveLogo}
            ></img>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          className={classes.navbarToggle}
          aria-controls="navbarScroll"
          onClick={changeToggleStatus}
        >
          {!isToggleActive ? (
            <BiMenuAltRight className={classes.icon} size={54} />
          ) : (
            <IoCloseSharp className={classes.icon} size={54} />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className={classes.links + " " + classes.active}
              href="#action1"
            >
              Home
            </Nav.Link>
            <Nav.Link className={classes.links} href="#">
              About
            </Nav.Link>
            <Nav.Link className={classes.links} href="#action2">
              Work
            </Nav.Link>
            <Nav.Link className={classes.links} href="#">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button className={classes.navbarButton} variant="outline-success">
              Resume
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
