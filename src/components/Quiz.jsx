import React from "react";

function Quiz() {
  return (
    <>
      <main id="QuizPage" className="w3-container w3-animate-opacity Page">
        {/* <!-- Header content --> */}
        <header className="w3-container w3-margin-bottom w3-center Header--quiz Header--background">
          <div className="Header__content-box">
            <h1 className=" w3-text-white">Quiz</h1>
            <p className="w3-text-white w3-small w3-margin">
              Stay focus! From here the journey begins.
              <br />
              Get into the point, Let's move on! <br />
              <i>"Keep going, Keep growing"</i>
            </p>
          </div>
        </header>

        {/* <!-- Content section --> */}
        <section className="w3-container">
          {/* <!-- Quiz start --> */}
          <article
            id="QuizStart"
            className="w3-row-padding w3-margin w3-center w3-animate-opacity Article QuizTab"
          >
            <div className="w3-col s12 m12 w3-margin-bottom">
              <h4 className="w3-text-orange">JavaScript Easy Quiz</h4>
              <p className="w3-text-white">Number of Quizzes : 10</p>
              <p className="w3-text-white">Click on the light</p>
            </div>
            <img
              src="https://i.gifer.com/7bk3.gif"
              alt="the light"
              width="300px"
              className="w3-ripple pointer"
              onClick={() => {}}
            />
          </article>

          {/* <!-- Quizzing --> */}
          <div>
            <article
              id="Quizzing1"
              className="w3-dark-gray w3-padding-16 w3-animate-opacity QuizTab hidden Quiz--bg"
            >
              <p className="w3-margin-left">JavaScript Easy Quiz</p>
              <p className="w3-margin-left">?1 of 10</p>
              <p className="w3-margin-left">
                Which of the following is correct about JavaScript?
              </p>
              <div className="Quiz">
                <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                  JavaScript is a lightweight, interpreted programming language.
                </p>
                <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                  JavaScript has object-oriented capabilities that allows you to
                  build interactivity into otherwise static HTML pages.
                </p>
                <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                  The general-purpose core of the language has been embedded in
                  Netscape, Internet Explorer, and other web browser.
                </p>
                <p
                  className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice"
                  onClick={() => {}}
                >
                  All of the above.
                </p>
              </div>
              <hr />
            </article>

            <article
              id="Quizzing10"
              className="w3-dark-gray w3-padding-16 w3-animate-right QuizTab hidden Quiz--bg"
            >
              <p className="w3-margin-left">JavaScript Easy Quiz</p>
              <p className="w3-margin-left">?10 of 10</p>
              <p className="w3-margin-left">
                Which of the following function of Array object represents the
                source code of an object?
              </p>
              <div className="Quiz">
                <p
                  className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice"
                  onClick={() => {}}
                >
                  toSource()
                </p>
                <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                  splice()
                </p>
                <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                  toString()
                </p>
                <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                  unshift()
                </p>
              </div>
              <hr />
            </article>

            {/* <!-- Quiz End --> */}
            <article
              id="QuizEnd"
              className="w3-row-padding w3-margin w3-center w3-animate-opacity Article QuizTab hidden"
            >
              <div className="w3-col s12 m12 w3-margin-bottom">
                <h4 className="w3-text-orange">{`JavaScript Easy Quiz : 10/10 => Scored 100%`}</h4>
                <p className="w3-text-white">
                  Result: Perfect! We can expect great things from you.
                </p>
                <p className="w3-text-white">
                  <b style={{ color: "gold" }}>"Next, click the sun light"</b>{" "}
                  ||{" "}
                  <em style={{ color: "skyblue" }}>
                    "Retake, click the swirling light"
                  </em>
                </p>
              </div>
              <img
                src="https://i.gifer.com/7bk3.gif"
                alt="the light"
                width="300px"
                className="w3-ripple pointer"
                onClick={() => {}}
              />
              <img
                src="https://i.gifer.com/YVWA.gif"
                alt="the light"
                width="150px"
                className="w3-ripple pointer"
                onClick={() => {}}
              />
            </article>
          </div>
        </section>
        <hr />
      </main>
    </>
  );
}

export default Quiz;
