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
      {/* <Loader/> */}
    </>
  );
};

export default App;



// .loaderContainer {
//   width: 100%;
//   height: 100vh;
//   background-color: var(--color-dark);
//   display: grid;
//   justify-content: center;
//   align-content: center;
// }

// .imageWrapper {
//   width: 12rem;
//   text-align: center;
//   margin-bottom: 2.5rem;
//   opacity: 100%;
//   animation: 1s progress-animation;
// }

// img {  
//   width: 5rem;
//   position: absolute;
//   transform: translate(-50%, -50%);
// }

// .mainLogo {
//   /* opacity: 0; */
//   /* animation-delay: 3s; */
//   /* opacity: 0; */
//   animation: 2s opacity-animation;
// }

// .progressBarWrapper {
//   width: 12rem;
//   height: 0.25rem;
//   background-color: var(--color-white-dark);
// }

// .progressBar {
//   width: 0%;
//   height: 100%;
//   animation: 3s progress-animation;
//   background-color: var(--color-white);
// }

// @media screen and (max-width: 480px) {
//   .loaderContainer {
//     transform: scale(0.75);
//   }
// }

// @keyframes progress-animation {
//   0% {
//     transform: scale(40%)
//   }
//   100% {
//     transform: scale(100%)
//   }
// }

// @keyframes opacity-animation {
//   0% {
//     opacity: 0%;
//   }
//   70% {
//     opacity: 0%;
//   }
//   100% {
//     opacity: 100%;
//   }
// }
