import React from "react";

function AdminTool() {
  return (
    <>
      <main id="Admin" className="w3-container w3-animate-opacity Page">
        {/* <!-- Admin Nav-bar --> */}
        <nav className="w3-bar Admin__nav">
          <div className="w3-bar-item w3-right">
            <button className="w3-orange w3-button w3-ripple w3-mobile">
              Save edit
            </button>
            <button className="w3-orange w3-button w3-ripple w3-mobile">
              Cancel
            </button>
          </div>
        </nav>

        {/* <!-- Edit Quizzes --> */}
        <div id="EditQuiz" className="AdminTab">
          <section className="w3-dark-gray Admin__section">
            <aside
              className="w3-text-orange w3-bar-block w3-light-gray"
              style={{ width: "25%" }}
            >
              <div className="w3-display-container w3-yellow">
                <span
                  nclick="this.parentElement.style.display='none'"
                  className="w3-button w3-red w3-display-topright w3-small w3-ripple"
                >
                  &times;
                </span>
                <button href="#" className="w3-button w3-block w3-ripple">
                  JavaScript Easy Quiz
                </button>
              </div>
              <div className="w3-display-container">
                <button href="#" className="w3-button w3-block w3-ripple">
                  JavaScript Basic 1
                </button>
              </div>
              <div className="w3-display-container">
                <button href="#" className="w3-button w3-block w3-ripple">
                  +Add New Subject
                </button>
              </div>
            </aside>

            <div style={{ width: "75%" }}>
              <article className="">
                <p className="w3-margin-left">JavaScript Easy Quiz</p>
                <p className="w3-margin-left">?1 of 10</p>
                <p className="w3-margin-left">
                  Which of the following is correct about JavaScript?
                </p>
                <div className="Quiz">
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    JavaScript is a lightweight, interpreted programming
                    language.
                  </p>
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    JavaScript has object-oriented capabilities that allows you
                    to build interactivity into otherwise static HTML pages.
                  </p>
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    The general-purpose core of the language has been embedded
                    in Netscape, Internet Explorer, and other web browser.
                  </p>
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    All of the above.
                  </p>
                </div>
                <hr />
              </article>

              <article className="">
                <p className="w3-margin-left">JavaScript Easy Quiz</p>
                <p className="w3-margin-left">?2 of 10</p>
                <p className="w3-margin-left">
                  Which of the following is a valid type of function JavaScript
                  supports?
                </p>
                <div className="Quiz">
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    named function
                  </p>
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    anonymous function
                  </p>
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    Both of the above.
                  </p>
                  <p className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice">
                    None of the above.
                  </p>
                </div>
                <hr />
              </article>

              <div className="Quiz">
                <p className="w3-padding w3-margin w3-mobile w3-medium w3-ripple Quiz__choice w3-blue">
                  +Add New Question
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AdminTool;
