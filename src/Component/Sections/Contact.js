// import "../../../public/images/call.png";
const Contact = ({ loader }) => {
  return (
    <>
      {!loader && (
        <div className="contactMain">
          <div className="formDiv">
            <div className="emailName">
              <div className="emailDiv">
                <label for="email">Email</label>
                <br></br>
                <input type="email" id="email" name="email" />
              </div>
              <div className="nameDiv">
                <label for="name">Name</label>
                <br></br>
                <input type="text" id="name" name="name" />
              </div>
            </div>
            <div className="addressMessage">
              <div className="addressDiv">
                <label for="address">Address</label>
                <br></br>
                <input type="text" id="address" name="address" />
              </div>
              <div className="messageDiv">
                <label for="message">Message</label>
                <br></br>
                <textarea id="message" name="message"></textarea>
              </div>
            </div>
            <button className="submitBtn">Submit</button>
          </div>
          <div className="contactDetailsDiv">
            <div className="callUsCard">
              <img
                className="callUsIcon"
                src="../../images/call.png"
                alt="callUs"
              />
              <span className="callUsText">CALL US</span>
              <span className="number">7843068183</span>
            </div>
            <div className="addressCard">
              <img
                className="addressIcon"
                src="../../images/address.png"
                alt="address"
              />
              <span className="addressText">ADDRESS</span>
              <span className="address">
                Sangam Mahuli, Satara, Maharashtra
              </span>
            </div>
            <div className="emailCard">
              <img
                className="emailIcon"
                src="../../images/email.png"
                alt="callUs"
              />
              <span className="emailText">EMAIL</span>
              <span className="email">shubhpawar9596@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;
