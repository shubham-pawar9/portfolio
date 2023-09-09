const About = ({ loader }) => {
  const handleResumeDownload = () => {
    const resumePdfUrl = "/shubham-resume.pdf"; // Specify the path to your resume.pdf
    const link = document.createElement("a");
    link.href = resumePdfUrl;
    link.download = "shubham-pawar-resume.pdf"; // Specify the desired download file name
    link.click();
    window.alert("Resume downloaded successfully!");
  };
  return (
    <>
      {!loader && (
        <div className="aboutSection">
          <div className="insideAbout">
            <div className="image-container">
              <img
                className="aboutImg"
                src="../../../images/about.jpeg"
                alt="personal Image"
              />
              <button className="resumeShow" onClick={handleResumeDownload}>
                Download CV
              </button>
            </div>
            <div className="aboutDetails">
              {/* <h1>About Me -</h1> */}
              <p>
                Greetings! I'm Shubham Pawar, an individual with a passion for
                both the precision of Mechanical Engineering and the artistry of
                Frontend Development. My journey began with a strong foundation
                in Mechanical Engineering, which instilled in me the importance
                of precision, problem-solving, and attention to detail.
              </p>
              <p>
                My relentless curiosity and a desire to expand my horizons led
                me to explore the world of Frontend Development. Enrolling in
                classes and diving deep into the world of web design, I
                discovered my knack for creating intuitive and visually
                appealing user interfaces.
              </p>
              <p>
                With three years of dedicated experience in the realm of
                Frontend Development, I have honed my skills in crafting
                seamless, user-friendly websites. What truly drives me is the
                challenge of making websites responsive, ensuring that they
                adapt flawlessly to different devices and screen sizes. It's a
                thrilling puzzle that I enjoy solving with every project.
              </p>
              <p>
                I thrive on turning ideas into interactive digital experiences,
                and I'm always eager to tackle new challenges in the
                ever-evolving world of UI development. My dedication to staying
                updated with the latest trends and technologies in web
                development is a testament to my commitment to delivering
                top-notch results.
              </p>
              <p>
                When I'm not crafting pixel-perfect interfaces or meticulously
                optimizing code, you can find me seeking inspiration from the
                world around me. I believe that creativity knows no bounds, and
                it's in the everyday moments that I discover the seeds of
                innovation.
              </p>
              <p>
                Join me on this exciting journey where form meets function, and
                let's create digital experiences that not only look stunning but
                also work seamlessly. If you're looking for a passionate UI
                developer who is dedicated to making your vision a reality,
                let's connect and embark on this exciting digital adventure
                together.
              </p>
            </div>
          </div>
          <h1 className="bottomHeading">
            Thank you for visiting my portfolio, and I look forward to the
            opportunity of working with you!
          </h1>
        </div>
      )}
    </>
  );
};
export default About;
