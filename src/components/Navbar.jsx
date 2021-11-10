import React, { useContext } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "../contexts/authContext";
import DropBarMenu from "./DropBarMenu";
import { useHistory } from "react-router-dom";

function Navbar() {
  const { user } = useContext(AuthContext);
  const role = user ? user.role : "guest";

  const history = useHistory();

  return (
    <>
      <nav className="w3-bar w3-margin w3-container">
        <span className="logo w3-text-orange w3-margin-right">
          <img
            src="https://www.thepartysquad.co.uk/wp-content/uploads/Wizard-Hat-small-website-.png"
            alt="Orange wizard hat"
            style={{ width: "37px" }}
          />
          JS Quiz
        </span>
        <button
          className="w3-text-white w3-button w3-ripple w3-mobile"
          onClick={() => history.push("/")}
        >
          Home
        </button>
        <button
          className="w3-text-white w3-button w3-ripple w3-mobile"
          onClick={() => history.push("/about")}
        >
          About Us
        </button>
        <button
          className="w3-text-white w3-button w3-ripple w3-mobile"
          onClick={() => history.push("/leader")}
        >
          Leader Board
        </button>
        {/* <button
          className="w3-text-white w3-button w3-ripple w3-mobile"
          onClick={() => history.push("/curriculum")}
        >
          Curriculum
        </button> */}
        {role === "admin" && (
          <button
            className="w3-text-white w3-button w3-ripple w3-mobile w3-amber"
            onClick={() => {
              // history.push("/admin");
              // window.location.reload();
              window.location.replace("http://localhost:3000/admin");
            }}
          >
            Admin Tool
          </button>
        )}

        {/* # Login Btn */}
        {!user && (
          <>
            <button
              onClick={() =>
                (document.getElementById("LogIn-modal").style.display = "block")
              }
              className="w3-button w3-orange w3-hover-deep-orange w3-text-white w3-round-large w3-right w3-mobile"
            >
              LogIn
            </button>
            <Login />
            <Signup />
          </>
        )}
        {user && <DropBarMenu />}
      </nav>
    </>
  );
}

export default Navbar;
