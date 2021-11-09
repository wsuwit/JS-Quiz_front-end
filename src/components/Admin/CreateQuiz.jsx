import { useState } from "react";

const createQuizTemplate = {
  subjectName: "CREATE",
  questions: [
    {
      id: "q1",
      questionText: "",
      answerOptions: [
        { id: "ans 1", answerText: "", isCorrect: false },
        { id: "ans 2", answerText: "", isCorrect: false }
      ]
    }
  ]
};

function CreateQuiz({
  setDisableAddNewSubject,
  displayCreate,
  setDisplayCreate
}) {
  const [fromQuiz, setFromQuiz] = useState(createQuizTemplate);

  // console.log("@fromQuiz:", fromQuiz);

  const handleChangeSubject = (event) => {
    setFromQuiz((quiz) => ({
      ...quiz,
      subjectName: event.target.value
    }));
  };

  return (
    <>
      {/* <!-- Create Questions --> */}
      {displayCreate && (
        <div
          style={{
            width: "100%"
          }}
        >
          <div className="w3-row w3-margin-left">
            <p className="w3-center ">
              <b>Create Quiz Form</b>{" "}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <input
                type="text"
                style={{ minWidth: "500px" }}
                className="w3-mobile "
                // value={quizBank[0].subjectName}
                onChange={handleChangeSubject}
                placeholder="Enter Subject name here..."
              />

              <div className="w3-block w3-right">
                <button className="w3-green w3-button w3-ripple w3-mobile w3-margin-left">
                  Create
                </button>
                <button
                  className="w3-red w3-button w3-ripple w3-mobile w3-margin-left"
                  onClick={() => {
                    setFromQuiz(createQuizTemplate);
                    setDisplayCreate(false);
                    setDisableAddNewSubject(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {fromQuiz.questions.map((curQuizObj, idx) => (
            <article key={idx} className="w3-display-container">
              {/* # Button Delete Question */}
              <span
                onClick={() => {
                  const cloneObj = { ...fromQuiz };
                  const index = cloneObj.questions.findIndex(
                    (item) => item.id === curQuizObj.id
                  );
                  cloneObj.questions.splice(index, 1);
                  setFromQuiz(cloneObj);
                }}
                className="w3-button w3-red w3-border-black w3-leftbar w3-display-topright w3-small w3-ripple w3-margin-right"
              >
                &times;
              </span>

              {/* # Question Number */}
              <p className="w3-margin-left">
                ?{idx + 1} of {fromQuiz.questions.length}
              </p>

              {/* # Question Text */}
              <p className="w3-margin-left w3-margin-right">
                <input
                  type="text"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    const { questions } = { ...fromQuiz };
                    const index = questions.findIndex(
                      (item) => item.id === curQuizObj.id
                    );
                    questions[index].questionText = e.target.value;
                    setFromQuiz((quiz) => ({
                      ...quiz,
                      questions
                    }));
                  }}
                  placeholder="Enter Question text..."
                  value={fromQuiz.questions[idx].questionText}
                />
              </p>

              <div style={{ paddingRight: 30 }}>
                {/* # Answer Options */}
                {fromQuiz.questions[idx].answerOptions.map(
                  (currAnswer, ansIdx) => (
                    <div
                      key={ansIdx}
                      className="w3-padding-small w3-margin w3-mobile w3-small w3-ripple Quiz__choice"
                      style={{ minHeight: "2rem", width: "100%" }}
                    >
                      {/* # Answer Checkbox */}
                      <input
                        type="checkbox"
                        className="w3-margin-right"
                        onChange={(e) => {
                          const { questions } = { ...fromQuiz };
                          const index = questions.findIndex(
                            (item) => item.id === curQuizObj.id
                          );
                          questions[index].answerOptions[ansIdx].isCorrect =
                            e.target.checked;
                          setFromQuiz((quiz) => ({
                            ...quiz,
                            questions
                          }));
                        }}
                      />

                      {/* # Answer Text */}
                      <input
                        type="text"
                        style={{
                          width: "93%"
                        }}
                        onChange={(e) => {
                          const { questions } = { ...fromQuiz };
                          const index = questions.findIndex(
                            (item) => item.id === curQuizObj.id
                          );
                          questions[index].answerOptions[ansIdx].answerText =
                            e.target.value;
                          setFromQuiz((quiz) => ({
                            ...quiz,
                            questions
                          }));
                        }}
                        value={
                          fromQuiz.questions[idx].answerOptions[ansIdx]
                            .answerText
                        }
                        placeholder="Enter Answer text..."
                      />

                      {/* # Answer Delete Option */}
                      {curQuizObj.answerOptions.length > 2 && (
                        <span
                          className="w3-button w3-red w3-ripple w3-right"
                          onClick={() => {
                            const { questions } = { ...fromQuiz };
                            const choices = questions[idx].answerOptions;
                            const index = choices.findIndex(
                              (item) => item.id === currAnswer.id
                            );
                            choices.splice(index, 1);
                            setFromQuiz((quiz) => ({
                              ...quiz,
                              questions
                            }));
                          }}
                        >
                          &times;
                        </span>
                      )}
                    </div>
                  )
                )}

                {/* # Answer Add Option */}
                {curQuizObj.answerOptions.length < 4 && (
                  <div className="Quiz">
                    <p
                      className="w3-padding-small w3-margin w3-mobile w3-small w3-button w3-ripple Quiz__choice w3-green"
                      onClick={() => {
                        const cloneObj = { ...fromQuiz };
                        cloneObj.questions[idx].answerOptions.push({
                          id: new Date().getTime(),
                          answerText: "",
                          isCorrect: false
                        });
                        setFromQuiz(cloneObj);
                      }}
                    >
                      +Add Answer Option
                    </p>
                  </div>
                )}
              </div>
              <hr />
            </article>
          ))}

          {/* # Question Add New */}
          <div className="Quiz">
            <p
              className="w3-padding w3-margin w3-mobile w3-medium w3-button w3-ripple Quiz__choice w3-blue"
              onClick={() => {
                const cloneArr = { ...fromQuiz };
                cloneArr.questions.push({
                  id: new Date().getTime(),
                  questionText: "",
                  answerOptions: [
                    { id: "@1", answerText: "", isCorrect: false },
                    { id: "@2", answerText: "", isCorrect: false }
                  ]
                });
                setFromQuiz(cloneArr);
              }}
            >
              +Add New Question
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateQuiz;
