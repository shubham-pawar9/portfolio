import { useRef, useState } from "react";

const Welcome = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const openMain = () => {
    ref1.current.classList.toggle("open-transition");
    ref2.current.classList.toggle("open-transition");
    ref3.current.classList.toggle("introAnim");
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
