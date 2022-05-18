import React, { useState, useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Content from "./components/content/Content";
import Loader from "./components/loader/Loader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 900 });

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoaded ? <Content /> : <Loader />;
};

export default App;
