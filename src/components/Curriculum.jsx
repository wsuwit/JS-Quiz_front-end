import axios from "../config/axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useHistory } from "react-router-dom";

function Curriculum() {
  const [quiz, setQuiz] = useState([]);
  const { setUserCurIndex } = useContext(AuthContext);

  // console.log("@quizSetForCurriculum:", quiz);

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`/quiz`)
      .then((res) => setQuiz(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main
        className="w3-container w3-animate-opacity Page "
        style={{ minHeight: "580px" }}
      >
        {/* <!-- Header content --> */}
        <header className="w3-container w3-margin-bottom w3-center Article">
          <div className="Header__content-box">
            <h2 className=" w3-text-white">Curriculum</h2>
            <p className="w3-text-white w3-small w3-margin">
              <i>
                "Wisdom is not a product of schooling but of the lifelong
                attempt to acquire it."
              </i>
              <br />
              <i>Albert Einstein</i>
            </p>
          </div>
        </header>

        {/* <!-- Content section --> */}
        <section className="Article">
          <article
            className="Article"
            style={{ width: "60% ", minWidth: "200px" }}
          >
            <button
              className="w3-button w3-orange w3-text-white w3-section w3-mobile w3-ripple"
              style={{ width: " 50%", minWidth: "200px" }}
              onClick={() => {
                axios
                  .get(`/user/myId/`)
                  .then((res) => {
                    console.log("@resMyId:", res.data.result);
                    setUserCurIndex(res.data.result.currentIndex);
                  })
                  .catch((err) => console.log(err));
                history.push(`/quiz`);
              }}
            >
              Go to current challenge
            </button>

            {quiz.map((elem, idx) => (
              <button
                key={idx}
                className="w3-button w3-orange w3-text-white w3-section w3-mobile w3-ripple"
                style={{ width: "60%" }}
                onClick={() => {
                  setUserCurIndex(idx);
                  history.push(`/quiz`);
                }}
              >
                {elem.subjectName}
              </button>
            ))}
          </article>
        </section>
      </main>
    </>
  );
}

export default Curriculum;
