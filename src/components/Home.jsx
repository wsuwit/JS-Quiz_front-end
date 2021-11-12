import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <>
      <main id="Home" className="w3-container w3-animate-opacity Page">
        {/* <!-- Header content --> */}
        <header className="w3-container w3-margin-bottom w3-center Header Header--background">
          <div className="Header__content-box">
            <h1 className=" w3-text-white">
              Place to reinforce your magical JavaScript basic
            </h1>
            <p className="w3-text-white w3-small w3-margin">
              Practicing programming is like practicing casting spells in magic
              world. From “Zero” to “Hero”, here we will guide you through with
              basic mysterious quizzes. The path you wished for will become
              true.
            </p>
            <button
              className="w3-button w3-orange w3-hover-deep-orange w3-text-white w3-round-large w3-ripple"
              onClick={() => history.push("/quiz")}
            >
              Play now
            </button>
          </div>
        </header>

        {/* <!-- Content section --> */}
        <section className="w3-container">
          <article className="w3-row-padding w3-margin Article">
            <img
              className="w3-col s12 m12 l6 w3-round-xxlarge img-width"
              src="https://images.unsplash.com/photo-1553991562-9f24b119ff51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2V5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Secret key"
            />
            <div className="w3-col l4">
              <h3 className="w3-text-orange">The key to success</h3>
              <p className="w3-text-white">
                Passion is the best fuel to help you on the long run and if you
                are a beginner, to become a great programmer needs time for
                practicing but soon you will get used to.
                <br />
                If you are looking for a place that can assist you in learning
                JavaScript programming basic with interesting quizzes. Here we
                will try our best to help you.
              </p>
            </div>
          </article>
          <hr />
          <article className="w3-row-padding w3-margin Article w3-mobile">
            <div className="w3-col l4">
              <h3 className="w3-text-orange">Leader board competition</h3>
              <p className="w3-text-white">
                " Visit, Vision, Victory! "
                <br />
                In order to get you excited, leader board will be a place for
                you to be recognized among friends.
                <br />
                Make sure you are logged in because, all the progression will be
                auto-saved.
              </p>
            </div>
            <img
              className="w3-col s12 m12 l6 w3-round-xxlarge img-width"
              src="https://www.rocketreferrals.com/wp-content/uploads/2019/11/Leaderboard-blog.png"
              alt="Leader board"
            />
          </article>
        </section>
        <hr />
      </main>
    </>
  );
}

export default Home;
