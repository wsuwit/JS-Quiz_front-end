import React from "react";

function About() {
  return (
    <>
      <main id="About" className="w3-container w3-animate-opacity Page ">
        {/* <!-- Header content --> */}
        <header className="w3-container w3-margin-bottom w3-center Header">
          <div className="Header__content-box">
            <h1 className=" w3-text-white">About JS Quiz</h1>
            <p className="w3-text-white w3-small w3-margin">
              Welcome friends to our "About page".
              <br />
              We are glad to be a part of your magical JS basic learning.
            </p>
          </div>
        </header>

        {/* <!-- Content section --> */}
        <section className="w3-container">
          <article className="w3-row-padding w3-margin Article">
            <img
              className="w3-col s12 m12 l6 w3-round-xxlarge img-width w3-margin"
              src="data:image/png;base64,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"
              alt="code"
            />
            <div className="w3-col l5 w3-margin">
              <h3 className="w3-text-orange">About us</h3>
              <p className="w3-text-white">
                Introduction, we are Codecamp Thailand students studying about
                web development.
                <br />
                Infact, most of us have come from different fields of study and
                worked in different industies (only a few graduated from
                Computer Science).
                <br />
                But we all have the same goal "to become a programmer".
                <br />
                Struggling, we have learned that for a beginner to Fullstack
                JavaScript world, it is quite hard and plenty of subjects to
                learn.
                <br />
                Through the difficulty we met, the only key to give you is "just
                keep practicing".
                <br />
                As mentioned above, our suffering through the intense lessons
                due to our unprepared knowledge for web development is a good
                lesson learn for beginners who wish to study in a Codecamp.
                <br />
                The subjects you might need to learn before joining a web
                development Codecamp: UX-UI, HTML, CSS, Bootstrap, JavaScript,
                Git, React, Node.JS, Database, BasicSecurity, Redux.js, TDD
                (Test-Driven Development), Webpack, Docker,
                SDLC(Software-Development-Life-Cycle)+Document, Agile,
                CleanCode, Style-guide and Creating projects.
                <br />
                Here with this application, is part of our web development
                project. We wish this little JS based quizzes can guide you to
                JS world.
                <br />
                May the wisdom be with you.
              </p>
            </div>
          </article>
          <hr />
        </section>
      </main>
    </>
  );
}

export default About;
