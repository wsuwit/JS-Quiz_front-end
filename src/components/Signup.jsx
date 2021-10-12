import React from "react";

function Signup() {
  return (
    <>
      <div id="SignUp-modal" className="w3-modal">
        <div
          className="w3-modal-content w3-card-4 w3-animate-zoom w3-dark-gray w3-round-large"
          style={{ maxWidth: "600px" }}
        >
          <div className="w3-center">
            <br />
            <span
              onClick={() =>
                (document.getElementById("SignUp-modal").style.display = "none")
              }
              className="w3-button w3-xlarge w3-hover-red w3-display-topright"
              title="Close Modal"
            >
              &times;
            </span>
            <span className="logo w3-text-orange">
              {" "}
              <img
                src="https://www.thepartysquad.co.uk/wp-content/uploads/Wizard-Hat-small-website-.png"
                alt="Orange wizard hat"
                style={{ width: "37px" }}
              />
              JS Quiz
            </span>
            <h2>Sign Up</h2>
          </div>

          <form className="w3-container">
            <div className="w3-section">
              <label>
                <b>Email</b>
              </label>
              <input
                className="w3-input w3-border w3-margin-bottom"
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
              <label>
                <b>Username</b>
              </label>
              <input
                className="w3-input w3-border w3-margin-bottom"
                type="text"
                placeholder="Enter Username"
                name="usrname"
                required
              />
              <label>
                <b>Password</b>
              </label>
              <input
                className="w3-input w3-border w3-margin-bottom"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <label>
                <b>Confirm Password</b>
              </label>
              <input
                className="w3-input w3-border w3-margin-bottom"
                type="password"
                placeholder="Enter Confirm Password"
                name="conpsw"
                required
              />
              <label>
                <b>Nickname</b>
              </label>
              <input
                className="w3-input w3-border w3-margin-bottom"
                type="text"
                placeholder="Enter Nickname"
                name="usrname"
                required
              />
              <button
                className="w3-button w3-orange w3-text-white w3-margin-top w3-padding"
                type="submit"
                style={{ width: "100%" }}
                onClick={(e) => e.preventDefault()}
              >
                Sign up for free
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
