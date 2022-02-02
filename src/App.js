import React from 'react';
import './App.css'

import LeftContainer from './components/sideContainers/leftContainer/LeftContainer';
import RightContainer from './components/sideContainers/rightContainer/RightContainer';

const App = () => {
  return <>
    <LeftContainer />
    {/* MainContainer */}
    <RightContainer />
  </> 
};

export default App;

{/* <Container style={{backgroundColor: "red"}} >
      sadfasd
  </Container> */}