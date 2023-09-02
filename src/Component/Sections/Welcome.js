import { useRef, useState } from "react";

const Welcome = ({ setNav }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const openMain = () => {
    ref1.current.classList.add("open-transition");
    ref2.current.classList.add("open-transition");
    ref3.current.classList.add("introAnim");
    setNav({
      welcome: true,
      header: true,
    });
    setTimeout(() => {
      setNav({
        welcome: false,
        header: true,
      });
    }, 1000);
  };
  return (
    <>
      <div className="main">
        <div ref={ref1} className="left"></div>
        <div ref={ref2} className="right"></div>
      </div>
      <div ref={ref3} className="introDiv">
        <p className="headingName">Shubham Pawar</p>
        <p className="subHeading">Frontend Web Developer</p>
        <button className="openBtn" onClick={openMain}>
          Click Me
        </button>
      </div>
    </>
  );
};
export default Welcome;
