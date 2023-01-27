import { useState } from "react";
import { useDispatch } from "react-redux";
import ReactScrollDetect, { DetectSection } from "react-scroll-detect";

import { Container } from "react-bootstrap";

import NavbarContainer from "../navbar/NavbarContainer";
import AboutContainer from "./contentContainers/AboutContainer";
import ContactContainer from "./contentContainers/ContactContainer";
import HomeContainer from "./contentContainers/HomeContainer";
import WorkContainer from "./contentContainers/WorkContainer";
import FooterContainer from "./contentContainers/FooterContainer";

import { navActions } from "../../../store/nav";

import classes from "./MainContainer.module.css";
import { LINKS } from "../../../constants/navigation";
import { useEffect } from "react";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [currentSectionIndex, setSection] = useState(0);

  useEffect(() => {
    dispatch(
      navActions.changeLocation(Object.keys(LINKS)[currentSectionIndex])
    );
  }, [currentSectionIndex, dispatch]);

  return (
    <div className={classes.contentWrapper}>
      <Container id="home">
        <NavbarContainer />

        <ReactScrollDetect triggerPoint="center" onChange={setSection}>
          <DetectSection>
            <HomeContainer />
          </DetectSection>

          <DetectSection>
            <AboutContainer />
          </DetectSection>

          <DetectSection>
            <WorkContainer />
          </DetectSection>

          <DetectSection>
            <ContactContainer />
          </DetectSection>
        </ReactScrollDetect>

        <FooterContainer />
      </Container>
    </div>
  );
};

export default MainContainer;
