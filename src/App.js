import React, { useState, useEffect } from "react";
import "./App.css";

import Content from "./components/content/Content";
import Loader from "./components/loader/Loader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    }

  }, [])

  return (
    <>
      { isLoaded && <Content />}
      { !isLoaded && <Loader /> }
    </>
  );
};

export default App;
