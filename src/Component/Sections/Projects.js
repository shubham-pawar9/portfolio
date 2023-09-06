import { useRef, useState } from "react";
import { projectData } from "./ProjectData";
import ProjectDetails from "./ProjectDetails";
const Projects = ({ loader }) => {
  const projectRef = useRef();
  const [projectDetails, setProjectDetails] = useState({
    selectedProject: "",
  });

  const showProjectDetails = (e) => {
    setProjectDetails({ selectedProject: e.target.id });
    projectRef.current.style.filter = "blur(5px)";
    projectRef.current.style.pointerEvents = "none";
  };
  const closeDetailsDiv = () => {
    setProjectDetails({ selectedProject: null });
    projectRef.current.style.filter = "none";
    projectRef.current.style.pointerEvents = "all";
  };
  return (
    <>
      {!loader && (
        <div ref={projectRef} className="projectsDivMain">
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
      {projectDetails.selectedProject && (
        <ProjectDetails
          setProjectDetails={setProjectDetails}
          projectDetails={projectDetails}
          closeDetailsDiv={closeDetailsDiv}
        />
      )}
    </>
  );
};
export default Projects;
