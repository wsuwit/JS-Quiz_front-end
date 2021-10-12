import React from "react";

function Curriculum() {
  return (
    <>
      <main id="Curriculum" className="w3-container w3-animate-opacity Page ">
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
            >
              Go to current challenge
            </button>
            <button
              className="w3-button w3-orange w3-text-white w3-section w3-mobile w3-ripple"
              style={{ width: "60%" }}
            >
              JavaScript Easy Quiz
            </button>
            <button
              className="w3-button w3-orange w3-text-white w3-section w3-mobile w3-ripple"
              style={{ width: "60%" }}
            >
              JavaScript Basic 1
            </button>
          </article>
        </section>
      </main>
    </>
  );
}

export default Curriculum;
