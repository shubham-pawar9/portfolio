import Welcome from "./Sections/Welcome";
import "./All.css";
import Header from "./Sections/Header";
import About from "./Sections/About";
import { useRef, useState, useEffect } from "react";
import Projects from "./Sections/Projects";
import Social from "./Sections/Social";
import Home from "./Sections/Home";
const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isListenerActive, setIsListenerActive] = useState(true);
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isListenerActive) {
      window.addEventListener("mousemove", updatePosition);
    } else {
      window.removeEventListener("mousemove", updatePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [isListenerActive]);

  const [nav, setNav] = useState({
    welcome: true,
    header: "",
    home: "",
    about: "",
    project: "",
    social: "",
  });
  const [loader, setLoader] = useState();

  //for welcome click
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const CirclesPosition = () => {
    setIsListenerActive(!isListenerActive);
    let allThreeCircles = document.querySelectorAll(".cursorC");
    for (let x of allThreeCircles) {
      x.classList.add("setPosition");
    }
  };
  const openMain = () => {
    CirclesPosition();
    ref1.current.classList.add("open-transition");
    ref2.current.classList.add("open-transition");
    // ref3.current.classList.add("introAnim");
    setNav({
      welcome: true,
      header: true,
      home: true,
    });
    document.querySelector(".welcomeMainDiv").style.opacity = 0;
    setTimeout(() => {
      document.querySelector(".welcomeMainDiv").style.display = "none";
    }, 600);
  };

  return (
    <>
      <div className="allThreeCircles">
        <div
          className="circle1 cursorC"
          style={{
            transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          }}
        ></div>
        <div
          className="circle2 cursorC"
          style={{
            transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
          }}
        ></div>
        <div
          className="circle3 cursorC"
          style={{
            transform: `translate(${position.x - 70}px, ${position.y - 70}px)`,
          }}
        ></div>
      </div>
      {nav.welcome && (
        <Welcome
          header={nav.header}
          setNav={setNav}
          openMain={openMain}
          ref1={ref1}
          ref2={ref2}
          ref3={ref3}
        />
      )}
      {nav.header && (
        <Header setNav={setNav} setLoader={setLoader} loader={loader} />
      )}
      {nav.home && <Home loader={loader} />}
      {nav.about && <About loader={loader} />}
      {nav.project && <Projects loader={loader} />}
      {nav.social && <Social loader={loader} />}
    </>
  );
};
export default Main;
