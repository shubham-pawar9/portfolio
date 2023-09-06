import { useState } from "react";
import { projectData } from "./ProjectData";
const Projects = ({ loader }) => {
  const [projectDetails, setProjectDetails] = useState({
    aiTool: "",
    newsApp: "",
    excelTable: "",
    taskList: "",
    liftDemo: "",
    piano: "",
  });

  const showProjectDetails = (e) => {
    setProjectDetails({ [e.target.id]: true });
  };
  return (
    <>
      {!loader && (
        <div className="projectsDivMain">
          <div className="cardsDiv">
            {projectData &&
              projectData.map((val) => {
                return (
                  <div className="card">
                    <img
                      id={val.id}
                      className="cardImage"
                      src={val.imageUrl}
                      onClick={showProjectDetails}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
export default Projects;
