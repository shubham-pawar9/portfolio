const Home = ({ loader }) => {
  return (
    <>
      {!loader && (
        <>
          <div className="homeMainDiv">
            <div>
              <h2 className="homeHeading">
                LET'S <span style={{ color: "#d85353" }}>BEGIN</span>
              </h2>
              <h3 className="homeSubHeading">WEB DEVELOPER</h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Home;
