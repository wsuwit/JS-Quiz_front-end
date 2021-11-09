import axios from "../../config/axios";
import React, { useEffect, useState } from "react";

function EditQuiz({
  quizId,
  setDisableAddNewSubject,
  setDisplayEdit,
  fromQuizBank,
  setFromQuizBank
}) {
  const [currentQuestionText, setCurrentQuestionText] = useState("");
  const [isCorrectOnChange, setIsCorrectOnChange] = useState(false);
  const [currentQuizObj, setCurrentQuizObj] = useState({});

  useEffect(() => {
    const fecthQuizById = async () => {
      const resQuizById = await axios.get(`/quiz/${quizId}`);
      console.log("@resQuizById:", resQuizById.data.result);
      setCurrentQuizObj(resQuizById.data.result);
    };
    fecthQuizById();
  }, [quizId]);

  const handleInputChange = (e) => {
    setCurrentQuizObj((cur) => ({ ...cur, subjectName: e.target.value }));
  };

  const onCheckHandler = (e, index) => {};

  return (
    <div
      className="w3-container"
      style={{
        width: "75%"
      }}
    >
      <div className="w3-row">
        <div className="w3-col m12 l9 w3-section">
          <button className="w3-red w3-leftbar w3-border-black w3-button w3-ripple w3-mobile w3-margin-right">
            Delete Subject
          </button>
          {/* # Subject name */}
          <input
            type="text"
            style={{ minWidth: "500px" }}
            className="w3-mobile "
            value={currentQuizObj.subjectName || ""}
            onChange={handleInputChange}
            placeholder="Enter Subject name here..."
          />
        </div>

        <div className="w3-col m12 l3 w3-section">
          <button className="w3-orange w3-leftbar w3-border-green w3-button w3-ripple w3-mobile w3-margin-left">
            Save edit
          </button>
          <button
            className="w3-orange w3-leftbar w3-border-red w3-button w3-ripple w3-mobile w3-margin-left"
            onClick={() => {
              setDisableAddNewSubject(false);
              setDisplayEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>

      {fromQuizBank[0].questions.map((curQuizObj, idx) => (
        <article key={idx} className="w3-display-container">
          {/* # Button Delete Question */}
          <span
            onClick={() => {
              const cloneObj = { ...fromQuizBank[0] };
              const index = cloneObj.questions.findIndex(
                (item) => item.id === curQuizObj.id
              );
              cloneObj.questions.splice(index, 1);
              setFromQuizBank((cur) => [...cur, cloneObj]);
            }}
            className="w3-button w3-red w3-display-topright w3-small w3-ripple w3-margin-right"
          >
            &times;
          </span>
          {/* # Question Number */}
          <p className="w3-margin-left">
            ?{idx + 1} of {fromQuizBank[0].questions.length}
          </p>
          {/* # Question Text */}
          <p className="w3-margin-left w3-margin-right">
            <input
              type="text"
              style={{ width: "100%" }}
              onChange={(e) => {
                setCurrentQuestionText(e.target.value);
              }}
              value={currentQuestionText || curQuizObj.questionText}
              placeholder="Enter Question text..."
            />
          </p>
          <div className="Quiz" style={{ boxSizing: "border-box" }}>
            {/* # Answer Options */}
            {curQuizObj.answerOptions.map((ans, idx) => (
              <p
                key={idx}
                className="w3-padding-small w3-margin w3-mobile w3-small w3-ripple Quiz__choice"
                style={{ minHeight: "2rem", width: "100%" }}
              >
                {/* # Answer Checkbox */}
                <input
                  type="checkbox"
                  className="w3-margin-right"
                  onChange={(e) => onCheckHandler(e, idx)}
                  checked={isCorrectOnChange || ans.isCorrect}
                />
                {/* # Answer Text */}
                <input
                  type="text"
                  name=""
                  style={{
                    width: "93%"
                  }}
                  onChange={(e) => e.target.value}
                  value={curQuizObj.answerOptions[idx].answerText}
                  placeholder="Enter Answer text..."
                />
                {curQuizObj.answerOptions.length > 2 && (
                  <span
                    onClick={() => {}}
                    className="w3-button w3-red w3-ripple w3-right"
                  >
                    &times;
                  </span>
                )}
              </p>
            ))}

            {curQuizObj.answerOptions.length < 4 && (
              <div className="Quiz">
                <p
                  className="w3-padding-small w3-margin w3-mobile w3-small w3-button w3-ripple Quiz__choice w3-green"
                  onClick={() => {
                    curQuizObj.answerOptions.push();
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
      <div className="Quiz">
        <p className="w3-padding w3-margin w3-mobile w3-medium w3-button w3-ripple Quiz__choice w3-blue">
          +Add New Question
        </p>
      </div>
    </div>
  );
}

export default EditQuiz;
