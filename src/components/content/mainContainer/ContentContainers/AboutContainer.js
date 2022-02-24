import classes from "./ContentContainers.module.css";
import { useEffect, useState } from "react";


const AboutContainer = () => {
  const [scrollPosition, setScrollPosition] = useState();
  const [isScroller, setIsScroller] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrollPosition(window.pageYOffset - window.innerHeight  );
     
      const el = document.querySelector('#about');
      const atBottom = ((Math.ceil(el.scrollTop + scrollPosition) + 200 )) > 0;
      
      if(atBottom === true) {
        console.log("ano");
        return;
      }
      console.log((Math.ceil(el.scrollTop + scrollPosition)  + 200));
    }
  

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);



  return (
    <section className={classes.contentWrapper} id="about">
      <div data-aos="fade-up" className={classes.titleWrapper}>
        <h2>About me</h2>
      </div>
    </section>
  );
};

export default AboutContainer;
