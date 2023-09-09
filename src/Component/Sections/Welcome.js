import { useRef, useState } from "react";

const Welcome = ({ openMain, ref1, ref2, ref3 }) => {
  return (
    <>
      <div className="main">
        <div ref={ref1} className="left"></div>
        <div ref={ref2} className="right"></div>
      </div>
      <div className="welcomeDescText">
        <h2 className="code">&lt;Code /&gt;</h2>
        <h2 className="create">Create</h2>
        <h2 className="inspire">Inspire</h2>
      </div>
      <div className="welcomeMainDiv">
        <div>
          <h2 className="welcomeHeading">
            LET'S <span style={{ color: "#000" }}>BEGIN</span>
          </h2>
          <h3 className="welcomeSubHeading">WEB DEVELOPER</h3>
        </div>
        <button className="openBtn" onClick={openMain}>
          Click Me
        </button>
      </div>
    </>
  );
};
export default Welcome;
