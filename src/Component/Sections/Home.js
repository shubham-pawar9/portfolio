const Home = ({ loader, openMain }) => {
  return (
    <>
      {!loader && (
        <>
          <div className="introDiv">
            <p className="headingName">Shubham Pawar</p>
            <p className="subHeading">Frontend Web Developer</p>
            {/* <button className="openBtn" onClick={openMain}>
          Click Me
        </button> */}
          </div>
        </>
      )}
    </>
  );
};
export default Home;
