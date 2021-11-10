import axios from "../../config/axios";
import React, { useEffect, useState } from "react";

function EditQuiz({
  quizId,
  setDisableAddNewSubject,
  setDisplayEdit,
  fromQuizBank
}) {
  const [currentQuizObj, setCurrentQuizObj] = useState(fromQuizBank[0]);

  // console.log("@currentQuizObj:", currentQuizObj);

  useEffect(() => {
    const fecthQuizById = async () => {
      const resQuizById = quizId && (await axios.get(`/quiz/${quizId}`));
      // console.log("@resQuizById:", resQuizById?.data?.result);
      if (resQuizById) setCurrentQuizObj(resQuizById.data.result);
    };
    fecthQuizById();
  }, [quizId]);

  const handleBtnSave = () => {
    axios
      .put(`/quiz/${quizId}`, currentQuizObj)
      .then((res) => console.log("@resPut:", res))
      .catch((err) => console.log(err));
    setDisableAddNewSubject(false);
    setDisplayEdit(false);
    window.location.reload();
  };

  const handleBtnDelete = () => {
    axios
      .delete(`/quiz/${quizId}`)
      .then((res) => console.log("@resDel:", res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <div
      className="w3-container"
      style={{
        width: "75%"
      }}
    >
      <div className="w3-row">
        <div className="w3-col m12 l9 w3-section">
          <button
            className="w3-red w3-leftbar w3-border-black w3-button w3-ripple w3-mobile w3-margin-right"
            onClick={handleBtnDelete}
          >
            Delete Subject
          </button>
          {/* # Subject name */}
          <input
            type="text"
            style={{ minWidth: "500px" }}
            className="w3-mobile "
            value={currentQuizObj.subjectName || ""}
            onChange={(e) =>
              setCurrentQuizObj((cur) => ({
                ...cur,
                subjectName: e.target.value
              }))
            }
            placeholder="Enter Subject name here..."
          />
        </div>

        <div className="w3-col m12 l3 w3-section">
          <button
            className="w3-orange w3-leftbar w3-border-green w3-button w3-ripple w3-mobile w3-margin-left"
            onClick={handleBtnSave}
          >
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

      {currentQuizObj.questions.map((curQuizObj, idx) => (
        <article key={idx} className="w3-display-container">
          {/* # Button Delete Question */}
          <span
            onClick={() => {
              const cloneObj = { ...currentQuizObj };
              const index = cloneObj.questions.findIndex(
                (item) => item.id === curQuizObj.id
              );
              cloneObj.questions.splice(index, 1);
              setCurrentQuizObj(cloneObj);
            }}
            className="w3-button w3-red w3-display-topright w3-small w3-ripple w3-margin-right"
          >
            &times;
          </span>
          {/* # Question Number */}
          <p className="w3-margin-left">
            ?{idx + 1} of {currentQuizObj.questions.length}
          </p>
          {/* # Question Text */}
          <p className="w3-margin-left w3-margin-right">
            <input
              type="text"
              style={{ width: "100%" }}
              onChange={(e) => {
                const cloneObj = { ...currentQuizObj };
                cloneObj.questions[idx].questionText = e.target.value;
                setCurrentQuizObj(cloneObj);
              }}
              value={curQuizObj.questionText || ""}
              placeholder="Enter Question text..."
            />
          </p>
          <div className="Quiz" style={{ boxSizing: "border-box" }}>
            {/* # Answer Options */}
            {curQuizObj.answerOptions.map((ans, idex) => (
              <p
                key={idex}
                className="w3-padding-small w3-margin w3-mobile w3-small w3-ripple Quiz__choice"
                style={{ minHeight: "2rem", width: "100%" }}
              >
                {/* # Answer Checkbox */}
                <input
                  type="checkbox"
                  className="w3-margin-right"
                  onChange={(e) => {
                    const cloneObj = { ...currentQuizObj };
                    cloneObj.questions[idx].answerOptions[idex].isCorrect =
                      e.target.checked;
                    setCurrentQuizObj(cloneObj);
                  }}
                  checked={ans.isCorrect}
                />

                {/* # Answer Text */}
                <input
                  type="text"
                  style={{
                    width: "93%"
                  }}
                  onChange={(e) => {
                    const cloneObj = { ...currentQuizObj };
                    cloneObj.questions[idx].answerOptions[idex].answerText =
                      e.target.value;
                    setCurrentQuizObj(cloneObj);
                  }}
                  value={ans.answerText}
                  placeholder="Enter Answer text..."
                />

                {/* # Display Delete Choice Btn */}
                {curQuizObj.answerOptions.length > 2 && (
                  <span
                    onClick={() => {
                      const { questions } = { ...currentQuizObj };
                      const choices = questions[idx].answerOptions;
                      const index = choices.findIndex(
                        (elem) => elem.id === ans.id
                      );
                      choices.splice(index, 1);
                      setCurrentQuizObj((cur) => ({ ...cur, questions }));
                    }}
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
                    const cloneObj = { ...currentQuizObj };
                    cloneObj.questions[idx].answerOptions.push({
                      id: new Date().getTime(),
                      answerText: "",
                      isCorrect: false
                    });
                    setCurrentQuizObj(cloneObj);
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
        <p
          className="w3-padding w3-margin w3-mobile w3-medium w3-button w3-ripple Quiz__choice w3-blue"
          onClick={() => {
            const cloneArr = { ...currentQuizObj };
            cloneArr.questions.push({
              id: new Date().getTime(),
              questionText: "",
              answerOptions: [
                { id: "@1", answerText: "", isCorrect: false },
                { id: "@2", answerText: "", isCorrect: false }
              ]
            });
            setCurrentQuizObj(cloneArr);
          }}
        >
          +Add New Question
        </p>
      </div>
    </div>
  );
}

export default EditQuiz;
