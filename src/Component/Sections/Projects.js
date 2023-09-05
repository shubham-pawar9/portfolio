const Projects = ({ loader }) => {
  const projectData = [
    {
      project: "AI-Tool (Personal Assistant)",
      imageUrl: "../../images/card-AI-tool.jpg",
      link: "",
    },
    {
      project: "News Application UI Template",
      imageUrl: "../../images/card-news-app.jpg",
      link: "",
    },
    {
      project: "AI-Tool (Personal Assistant)",
      imageUrl: "../../images/card-AI-tool.jpg",
      link: "",
    },
    {
      project: "AI-Tool (Personal Assistant)",
      imageUrl: "../../images/card-AI-tool.jpg",
      link: "",
    },
  ];
  return (
    <>
      {!loader && (
        <div className="projectsDivMain">
          <div className="cardsDiv">
            {projectData &&
              projectData.map((val) => {
                return (
                  <div className="card">
                    <img className="cardImage" src={val.imageUrl} />
                    <span className="title">{val.project}</span>
                    <a className="link" href={val.link}>
                      githubLink
                    </a>
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
