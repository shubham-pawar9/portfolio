import { useRef, useState } from "react";

const Welcome = ({ openMain, ref1, ref2, ref3 }) => {
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
