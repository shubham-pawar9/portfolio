import Welcome from "./Sections/Welcome";
import "./All.css";
import Header from "./Sections/Header";
import About from "./Sections/About";
import { useRef, useState } from "react";
import Projects from "./Sections/Projects";
import Social from "./Sections/Social";
const Main = () => {
  const [nav, setNav] = useState({
    welcome: true,
    header: "",
    about: "",
    project: "",
    social: "",
  });
  const [loader, setLoader] = useState();
  // animation: fillLoader 2s ease-in-out 1 forwards;
  return (
    <>
      {nav.welcome && <Welcome header={nav.header} setNav={setNav} />}
      {nav.header && (
        <Header setNav={setNav} setLoader={setLoader} loader={loader} />
      )}
      {nav.about && <About setNav={setNav} loader={loader} />}
      {nav.project && <Projects loader={loader} />}
      {nav.social && <Social loader={loader} />}
    </>
  );
};
export default Main;
