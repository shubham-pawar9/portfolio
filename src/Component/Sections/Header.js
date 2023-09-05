import { useRef } from "react";

const Header = ({ setNav, setLoader, loader }) => {
  const loaderRef = useRef();
  const aboutFunction = () => {
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
  const projectFunction = () => {
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
  return (
    <>
      <div>
        <ul className="navList">
          <li className="listItems">Home</li>
          <li className="listItems" onClick={aboutFunction}>
            About
          </li>
          <li className="listItems" onClick={projectFunction}>
            Projects
          </li>
          <li className="listItems">Social</li>
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
