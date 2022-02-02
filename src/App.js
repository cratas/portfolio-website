import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";

import LeftContainer from "./components/sideContainers/leftContainer/LeftContainer";
import RightContainer from "./components/sideContainers/rightContainer/RightContainer";

const App = () => {
  return (
    <>
      <LeftContainer />
      <Container style={{ backgroundColor: "red" }}>sadfasd</Container>
      <RightContainer />
    </>
  );
};

export default App;
