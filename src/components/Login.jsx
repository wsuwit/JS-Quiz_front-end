import React from "react";

function Login() {
  return (
    <>
      <div id="LogIn-modal" className="w3-modal">
        <div
          className="w3-modal-content w3-card-4 w3-animate-zoom w3-dark-gray w3-round-large"
          style={{ maxWidth: "600px" }}
        >
          <div className="w3-center">
            <br />
            <span
              onClick={() =>
                (document.getElementById("LogIn-modal").style.display = "none")
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
            <h2>Log In to Your Account</h2>
          </div>

          <form className="w3-container">
            <div className="w3-section">
              <label>
                <b>Username</b>
              </label>
              <input
                className="w3-input w3-border w3-margin-bottom"
                type="text"
                placeholder="Enter Username"
                name="username"
                required
              />
              <label>
                <b>Password</b>
              </label>
              <input
                className="w3-input w3-border"
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
              <div className="w3-center w3-small">
                <p>Not yet a member?</p>
                <button
                  onClick={(e) => {
                    // ? An invalid form control with name='username' is not focusable.
                    // ? An invalid form control with name='password' is not focusable.
                    // @ Use e.preventDefault() to solve
                    e.preventDefault();
                    document.getElementById("SignUp-modal").style.display =
                      "block";
                    document.getElementById("LogIn-modal").style.display =
                      "none";
                  }}
                  className="w3-text-orange"
                >
                  Create Account
                </button>
              </div>
              <button
                className="w3-button w3-block w3-orange w3-text-white w3-section w3-padding"
                type="submit"
                onClick={(e) => e.preventDefault()}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
