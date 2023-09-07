import { useEffect, useRef } from "react";

const Header = ({ setNav, setLoader, loader }) => {
  const loaderRef = useRef();
  const navClicksRef = useRef();

  const aboutFunction = (e) => {
    let navBtns = document.querySelectorAll(".listItems");
    for (let i of navBtns) {
      i.classList.remove("active");
    }
    e.target.classList.add("active");
    setTimeout(() => {
      setNav({
        header: true,
        about: true,
      });
      setLoader(false);
    }, 1400);
    setLoader(true);
    setTimeout(() => {
      loaderRef.current.style.animation =
        "fillLoader 2s ease-in-out 1 forwards";
    }, 50);
  };
  const projectFunction = (e) => {
    let navBtns = document.querySelectorAll(".listItems");
    for (let i of navBtns) {
      i.classList.remove("active");
    }
    e.target.classList.add("active");
    setTimeout(() => {
      setNav({
        header: true,
        project: true,
      });
      setLoader(false);
    }, 1400);
    setLoader(true);
    setTimeout(() => {
      loaderRef.current.style.animation =
        "fillLoader 2s ease-in-out 1 forwards";
    }, 50);
  };
  const socialFunction = (e) => {
    let navBtns = document.querySelectorAll(".listItems");
    for (let i of navBtns) {
      i.classList.remove("active");
    }
    e.target.classList.add("active");
    setTimeout(() => {
      setNav({
        header: true,
        social: true,
      });
      setLoader(false);
    }, 1400);
    setLoader(true);
    setTimeout(() => {
      loaderRef.current.style.animation =
        "fillLoader 2s ease-in-out 1 forwards";
    }, 50);
  };
  return (
    <>
      <div>
        <ul className="navList">
          <li className="listItems" ref={navClicksRef}>
            Home
          </li>
          <li className="listItems" ref={navClicksRef} onClick={aboutFunction}>
            About
          </li>
          <li
            className="listItems"
            ref={navClicksRef}
            onClick={projectFunction}
          >
            Projects
          </li>
          <li className="listItems" ref={navClicksRef} onClick={socialFunction}>
            Social
          </li>
          <li className="listItems" ref={navClicksRef}>
            Contact
          </li>
        </ul>
      </div>
      {loader && (
        <div className="loaderMainDIv">
          <div className="centered-div">
            <div ref={loaderRef} className="loader"></div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
