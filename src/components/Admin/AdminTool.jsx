import React, { useEffect, useState } from "react";
import CreateQuiz from "./CreateQuiz";
import quizBank from "../../quizBankCenter/quizBank";
import EditQuiz from "./EditQuiz";
import axios from "../../config/axios";

function AdminTool() {
  const [fromQuizBank, setFromQuizBank] = useState(quizBank);
  const [displayCreate, setDisplayCreate] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [disableAddNewSubject, setDisableAddNewSubject] = useState(false);
  const [quizId, setQuizId] = useState(null);

  // console.log("@fromQuizBank:", fromQuizBank);
  // console.log("@quizId:", quizId);

  useEffect(() => {
    const fetchQuiz = async () => {
      const resQuiz = await axios.get("/quiz");
      // console.log("@resQuiz:", resQuiz.data.result);
      setFromQuizBank(resQuiz.data.result);
    };
    fetchQuiz();
  }, []);

  return (
    <>
      <main id="Admin" className="w3-container w3-animate-opacity Page">
        {/* <!-- Admin Nav-bar --> */}
        <nav style={{ height: "7px", backgroundColor: "navy" }}></nav>

        {/* <!-- Subject Options Side-bar --> */}
        <section
          className="w3-dark-gray Admin__section"
          style={{ minHeight: "500px" }}
        >
          <aside
            className="w3-text-orange w3-bar-block w3-light-gray"
            style={{ width: "25%" }}
          >
            {fromQuizBank.map((subjectObj, idx) => (
              <div key={idx} className="w3-display-container">
                <button
                  className="w3-button w3-block w3-ripple"
                  onClick={() => {
                    setQuizId(subjectObj.id);
                    setDisplayEdit(true);
                    setDisplayCreate(false);
                    setDisableAddNewSubject(false);
                  }}
                >
                  {subjectObj.subjectName}
                </button>
              </div>
            ))}

            <div className="w3-display-container">
              <button
                className="w3-button w3-block w3-ripple w3-blue"
                onClick={() => {
                  setDisplayCreate(true);
                  setDisplayEdit(false);
                  setDisableAddNewSubject(true);
                }}
                disabled={disableAddNewSubject}
              >
                +Add New Subject
              </button>
            </div>
          </aside>

          {/* <!-- Create/Edit Questions Area--> */}
          <CreateQuiz
            setDisableAddNewSubject={setDisableAddNewSubject}
            displayCreate={displayCreate}
            setDisplayCreate={setDisplayCreate}
          />
          {displayEdit && (
            <EditQuiz
              quizId={quizId}
              setDisableAddNewSubject={setDisableAddNewSubject}
              setDisplayEdit={setDisplayEdit}
              fromQuizBank={fromQuizBank}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default AdminTool;
