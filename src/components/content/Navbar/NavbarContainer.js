import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

import { navActions } from "../../../store/nav";

import classes from "./NavbarContainer.module.css";

import mainLogo from "../../../assets/main-logo.png";
import hoverLogo from "../../../assets/empty-logo.png";
import MyButton from "../UI/MyButton";

const NavbarContainer = (props) => {
  const dispatch = useDispatch();
  const linksState = useSelector((state) => state.nav );

  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const listInnerRef = useRef();

  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       console.log("reached bottom");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   function onScroll() {
  //     setScrollPosition(window.pageYOffset);

  //     if (listInnerRef.current) {
  //       const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //       if (scrollTop + clientHeight === scrollHeight) {
  //         console.log("reached bottom");
  //       }
  //     }

  //     // const homeSectionPosition = document.getElementById("homeSection").getBoundingClientRect().top - 100;
  //     // const aboutSectionPosition = document.getElementById("aboutSection").getBoundingClientRect().y - 100;
  //     // const workSectionPosition = document.getElementById("workSection").getBoundingClientRect().y - 100;
  //     // const contactSectionPosition = document.getElementById("contactSection").getBoundingClientRect().top - 100;

  //     // console.log(scrollPosition);
  //     // console.log("about " + contactSectionPosition);

  //     // // eslint-disable-next-line default-case
  //     // if(homeSectionPosition == 0) {
  //     //   setHomeActive(true);
  //     //   setAboutActive(false);
  //     //   setWorkActive(false);
  //     //   setContactActive(false);
  //     // }
  //     // if(aboutSectionPosition === 0.0) {
  //     //   setHomeActive(false);
  //     //   setAboutActive(true);
  //     //   setWorkActive(false);
  //     //   setContactActive(false);
  //     // }
  //     // if(workSectionPosition === 0.0) {
  //     //   setHomeActive(false);
  //     //   setAboutActive(false);
  //     //   setWorkActive(true);
  //     //   setContactActive(false);
  //     // }
  //     // if(contactSectionPosition === 0.0) {
  //     //   setHomeActive(false);
  //     //   setAboutActive(false);
  //     //   setWorkActive(false);
  //     //   setContactActive(true);
  //     // }

  //     // console.log("HomeSectionPosition: " + Math.floor(Math.abs(aboutSection)));
  //     // console.log("ScrollPosition: " + scrollPosition);
  //   }

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollPosition]);

  const changeToggleStatus = () => {
    setIsToggleActive((status) => !status);
  };

  const mouserEnterLogo = () => {
    setIsLogoHovered(true);
  };

  const mouseLeaveLogo = () => {
    setIsLogoHovered(false);
  };

  const linkHomeHandler = () => {
    dispatch(navActions.linkHome());
  };

  const linkAboutHandler = () => {
    dispatch(navActions.linkAbout());
  };

  const linkWorkHandler = () => {
    dispatch(navActions.linkWork());
  };

  const linkContactHandler = () => {
    dispatch(navActions.linkContact());
  };

  
  const homeNavLinkClasses = linksState.home
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const aboutNavLinkClasses = linksState.about
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const workNavLinkClasses = linksState.work
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const contactNavLinkClasses = linksState.contact
    ? `${classes.links} ${classes.active}`
    : classes.links;

  const navbarToggleClassesFirst = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateLeft}`
    : classes.toggleIconLine;

  const navbarToggleClassesSecond = isToggleActive
    ? `${classes.toggleIconLine} ${classes.rotateRight}`
    : classes.toggleIconLine;

  return (
    <Navbar sticky="top" expand="lg" className={classes.navbarContainer}>
      <Container fluid>
        <Navbar.Brand href="#topOfPage">
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
          aria-controls="navbarNavAltMarkup"
          onClick={changeToggleStatus}
        >
          <div className={classes.toggleIcon}>
            <div className={navbarToggleClassesFirst}></div>
            <div className={navbarToggleClassesSecond}></div>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link
              className={homeNavLinkClasses}
              href="#home"
              onClick={linkHomeHandler}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={aboutNavLinkClasses}
              href="#about"
              onClick={linkAboutHandler}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={workNavLinkClasses}
              href="#work"
              onClick={linkWorkHandler}
            >
              Work
            </Nav.Link>
            <Nav.Link
              className={contactNavLinkClasses}
              href="#contact"
              onClick={linkContactHandler}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex flex-row-reverse bd-highlight">
            <MyButton customStyle={classes.navbarButtonAnimartion}>
              Resume
            </MyButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
