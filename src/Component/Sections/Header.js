import { useEffect, useRef } from "react";

const Header = ({ setNav, setLoader, loader }) => {
  const loaderRef = useRef();
  const navListRef = useRef();

  //added for mobile menuShow but currentlt is not in use
  // const navShowOnMob = (e) => {
  //   if (navListRef.current.style.left != "0px") {
  //     navListRef.current.style.left = "0px";
  //     document.querySelector(`${e.target.className} img`).src =
  //       "../../images/close.png";
  //   } else {
  //     navListRef.current.style.left = "-100px";
  //     document.querySelector(`${e.target.className} img`).src =
  //       "../../images/menu.png";
  //   }
  // };
  const homeFunction = (e) => {
    let navBtns = document.querySelectorAll(".listItems");
    for (let i of navBtns) {
      i.classList.remove("active");
    }
    e.target.classList.add("active");
    setTimeout(() => {
      setNav({
        header: true,
        home: true,
      });
      setLoader(false);
    }, 1400);
    setLoader(true);
    setTimeout(() => {
      loaderRef.current.style.animation =
        "fillLoader 2s ease-in-out 1 forwards";
    }, 50);
  };
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
        {/* <button className="burgerBtn" onClick={navShowOnMob}>
          <img src="../../images/menu.png" alt="menuBtn" />
        </button> */}
        <ul className="navList" ref={navListRef}>
          <li className="listItems" onClick={homeFunction}>
            Home
          </li>
          <li className="listItems" onClick={aboutFunction}>
            About
          </li>
          <li className="listItems" onClick={projectFunction}>
            Projects
          </li>
          <li className="listItems" onClick={socialFunction}>
            Social
          </li>
          <li className="listItems">Contact</li>
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
