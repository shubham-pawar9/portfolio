import { projectData } from "./ProjectData";

const ProjectDetails = ({ projectDetails, closeDetailsDiv }) => {
  console.log(projectData, projectDetails.selectedProject);
  return (
    <>
      <div className="detailsOuterDiv">
        <div className="projectDetailsDiv">
          <button className="closeDetailsDiv" onClick={closeDetailsDiv}>
            close
          </button>
          {projectData &&
            projectData.map((val) => {
              if (val.id == projectDetails.selectedProject) {
                return (
                  <>
                    <span className="headingOfProject">{val.project}</span>
                    <div className="projectDetailsSection">
                      <img className="projectDetailsImg" src={val.imageUrl} />
                      <span className="projectDescription">
                        {val.discription}
                      </span>
                    </div>
                    <div className="buttonsOfLink">
                      <a
                        className="projectLink"
                        href={val.codeLink}
                        target="_blank"
                      >
                        Code Link
                      </a>
                      <a
                        className="projectLink"
                        href={val.projectLink}
                        target="_blank"
                      >
                        Project Link
                      </a>
                    </div>
                  </>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};
export default ProjectDetails;
