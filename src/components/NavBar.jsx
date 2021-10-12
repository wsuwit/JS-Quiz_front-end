import React from "react";
import Login from "./Login";
import Signup from "./Signup";

function Navbar() {
  return (
    <>
      <nav className="w3-bar w3-margin w3-container">
        <span className="logo w3-text-orange">
          {" "}
          <img
            src="https://www.thepartysquad.co.uk/wp-content/uploads/Wizard-Hat-small-website-.png"
            alt="Orange wizard hat"
            style={{ width: "37px" }}
          />
          JS Quiz
        </span>
        <button className="w3-text-white w3-button w3-ripple w3-mobile">
          Home
        </button>
        <button className="w3-text-white w3-button w3-ripple w3-mobile">
          About Us
        </button>
        <button className="w3-text-white w3-button w3-ripple w3-mobile">
          Leader Board
        </button>
        <button className="w3-text-white w3-button w3-ripple w3-mobile">
          Curriculum
        </button>
        <button className="w3-text-white w3-button w3-ripple w3-mobile w3-amber w3-opacity-max">
          Admin Tool
        </button>
        <button
          onClick={() =>
            (document.getElementById("LogIn-modal").style.display = "block")
          }
          className="w3-button w3-orange w3-hover-deep-orange w3-text-white w3-round-large w3-right w3-mobile"
        >
          LogIn
        </button>
      </nav>
      <Login />
      <Signup />
    </>
  );
}

export default Navbar;
