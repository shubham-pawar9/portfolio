const Social = ({ loader }) => {
  const socialData = [
    {
      socialSite: "LinkedIn",
      userImage: "../../images/linkedeInUser.jpg",
      iconImg: "../../images/linkedin.png",
      siteLink: "https://www.linkedin.com/in/shubham-pawar-75ba36161/",
      userName: "Shubham Pawar",
    },
    {
      socialSite: "Twitter",
      userImage: "../../images/twitterUser.jpg",
      iconImg: "../../images/twitter.png",
      siteLink: "https://twitter.com/pshubham_9",
      userName: "pshubham_9",
    },
    {
      socialSite: "Instagram",
      userImage: "../../images/instaUser.jpg",
      iconImg: "../../images/instagram.png",
      siteLink: "https://www.instagram.com/pshubham9/",
      userName: "pshubham9",
    },
    {
      socialSite: "Facebook",
      userImage: "../../images/facebookUser.jpg",
      iconImg: "../../images/facebook.png",
      siteLink: "https://www.facebook.com/shubham.pawar.773776",
      userName: "Shubham Pawar",
    },
  ];
  console.log(socialData);
  return (
    <>
      {!loader && (
        <div className="socialCards">
          {socialData &&
            socialData.map((val) => {
              return (
                <a className="siteIconLink" href={val.siteLink} target="_blank">
                  <div className="cardDiv">
                    <img
                      className="userImage"
                      src={val.userImage}
                      alr="userImage"
                    />
                    <span className="userName">{val.userName}</span>
                    <div className="userDetails">
                      <img
                        className="siteIcon"
                        src={val.iconImg}
                        alt="siteIcon"
                      />
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      )}
    </>
  );
};
export default Social;
