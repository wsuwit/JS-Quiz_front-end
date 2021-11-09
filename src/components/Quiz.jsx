import React, { useState } from "react";
import quizBank from "../quizBankCenter/quizBank";

function Quiz() {
  const [subjectIndex, setSubjectIndex] = useState(0);
  const { subjectName, questions } = quizBank[subjectIndex];
  const [showQuizStart, setShowQuizStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [score, setScore] = useState(0);
  const resultPercent = (score / questions.length) * 100;

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowQuizResult(true);
    }
  };

  const handleButtonSubjectIndex = () => {
    if (subjectIndex < quizBank.length - 1) {
      setSubjectIndex((currentIndex) => currentIndex + 1);
    } else {
      setSubjectIndex(0);
    }
    setScore(0);
    setCurrentQuestion(0);
    setShowQuizStart(true);
    setShowQuizResult(false);
  };

  const handleButtonRetake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowQuizStart(true);
    setShowQuizResult(false);
  };

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
          {showQuizStart ? (
            // {/* <!-- Quiz start --> */}
            <article
              id="QuizStart"
              className="w3-row-padding w3-margin w3-center w3-animate-opacity Article QuizTab"
            >
              <div className="w3-col s12 m12 w3-margin-bottom">
                <h4 className="w3-text-orange">{subjectName}</h4>
                <p className="w3-text-white">
                  Number of Quizzes : {questions.length}
                </p>
                <p className="w3-text-white">Click on the light</p>
              </div>
              <img
                src="https://i.gifer.com/7bk3.gif"
                alt="the light"
                width="300px"
                className="w3-ripple pointer"
                onClick={() => {
                  setShowQuizStart(false);
                }}
              />
            </article>
          ) : showQuizResult ? (
            // {/* <!-- Quiz Result --> */}
            <article
              id="QuizResult"
              className="w3-row-padding w3-margin w3-center w3-animate-opacity Article QuizTab "
            >
              <div className="w3-col s12 m12 w3-margin-bottom">
                <h4 className="w3-text-orange">{`${subjectName} : ${score}/${questions.length} => Scored ${resultPercent}%`}</h4>
                <p className="w3-text-white">
                  Result:{" "}
                  {resultPercent === 100
                    ? `Perfect! You are the chosen one.`
                    : resultPercent >= 90
                    ? `Greate! We can expect great things from you.`
                    : resultPercent >= 80
                    ? `Alright! It's enough to pass the test.`
                    : `Sorry! You do not pass the test.`}
                </p>
                <p className="w3-text-white">
                  {/* # Conditional rendering, if output are multi-HTML-tags. The parent wrappers (<>child</>) are needed */}
                  {resultPercent >= 80 && (
                    <>
                      <b
                        style={{ color: "gold", cursor: "pointer" }}
                        onClick={handleButtonSubjectIndex}
                      >
                        "Next, click the sun light"
                      </b>{" "}
                      <b style={{ color: "magenta" }}>||</b>{" "}
                    </>
                  )}
                  <em
                    style={{ color: "skyblue", cursor: "pointer" }}
                    onClick={handleButtonRetake}
                  >
                    "Retake, click the swirling light"
                  </em>
                </p>
              </div>
              {resultPercent >= 80 && (
                <img
                  src="https://i.gifer.com/7bk3.gif"
                  alt="the light"
                  width="300px"
                  className="w3-ripple pointer"
                  onClick={handleButtonSubjectIndex}
                />
              )}
              {/* # Sometimes re-rendering of state can cause the src link ERROR */}
              <img
                // ? Not allowed to load local resource: file://images/the-swirling.gif
                src="https://i.gifer.com/YVWA.gif"
                alt="the swirling"
                width="150px"
                className="w3-ripple pointer"
                onClick={handleButtonRetake}
              />
            </article>
          ) : (
            // {/* <!-- Quizzing --> */}
            <div>
              <article className="w3-dark-gray w3-padding-16 w3-animate-opacity Quiz--bg ">
                <p className="w3-margin-left">{subjectName}</p>
                <p className="w3-margin-left">
                  ?{currentQuestion + 1} of {questions.length}
                </p>
                <p className="w3-margin-left">
                  {questions[currentQuestion].questionText}
                </p>
                <div className="Quiz">
                  {questions[currentQuestion].answerOptions
                    .sort(() => Math.random() - 0.5)
                    .map((answerOption, idx) => (
                      <p
                        key={idx}
                        className="w3-padding w3-margin w3-mobile w3-small w3-ripple Quiz__choice"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </p>
                    ))}
                </div>
                <hr />
              </article>
            </div>
          )}
        </section>
        <hr />
      </main>
    </>
  );
}

export default Quiz;
