import axios from "../../config/axios";
import { useState } from "react";

const createQuizTemplate = {
  id: "s1",
  subjectName: "CREATED",
  questions: [
    {
      id: "q1",
      questionText: "",
      answerOptions: [
        { id: "ans1", answerText: "", isCorrect: false },
        { id: "ans2", answerText: "", isCorrect: false }
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

  const handleBtnCreate = async () => {
    await axios.post(`/quiz`, fromQuiz);
    window.location.reload();
  };

  return (
    <>
      {/* <!-- Create Questions --> */}
      {displayCreate && (
        <div className="w3-container w3-blue-gray">
          <div className="w3-margin-left">
            <p className="w3-center">
              <b>Create Quiz Form</b>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              {/* # Subject Name */}
              <input
                type="text"
                style={{ width: "460px" }}
                className="w3-mobile w3-input w3-round"
                onChange={handleChangeSubject}
                placeholder="Enter Subject here..."
              />

              {/* # Btn Group */}
              <div className=" w3-right w3-margin-right">
                <button
                  className="w3-green w3-button w3-ripple w3-mobile w3-margin-left w3-round"
                  onClick={handleBtnCreate}
                >
                  Create
                </button>
                <button
                  className="w3-red w3-button w3-ripple w3-mobile w3-margin-left w3-round"
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
                className="w3-button w3-red w3-border-black w3-leftbar w3-rightbar w3-bottombar w3-topbar w3-display-topright w3-small w3-ripple w3-margin-right w3-round"
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
                  className="w3-input w3-round"
                  style={{ width: "1007px" }}
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

              <div className="w3-container" style={{ width: "1105px" }}>
                {/* # Answer Options */}
                {fromQuiz.questions[idx].answerOptions.map(
                  (currAnswer, ansIdx) => (
                    <div
                      key={ansIdx}
                      className="w3-padding-small w3-margin  w3-mobile w3-small w3-ripple Quiz__choice"
                      style={{
                        minHeight: "2rem",
                        width: "1055px",
                        display: "flex"
                      }}
                    >
                      {/* # Answer Checkbox */}
                      <input
                        type="checkbox"
                        className="w3-margin-right w3-check"
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
                        className="w3-input w3-round w3-margin-right"
                        style={{
                          width: "990px"
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
                          className="w3-button w3-red w3-ripple w3-round"
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
                      className="w3-padding-small w3-margin w3-mobile w3-button w3-ripple Quiz__choice w3-green"
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

// # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// [
//   {
//     "id": "942a68a1-8f0a-421e-bc10-ae31168ed9f3",
//     "subjectName": "JavaScript Easy Quiz",
//     "questions": [
//       {
//         "questionText": "Which of the following is correct about JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "JavaScript is a lightweight, interpreted programming language.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
//             "isCorrect": false
//           },
//           { "answerText": "All of the answer text.", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following is a valid type of function javascript supports?",
//         "answerOptions": [
//           { "answerText": "named function", "isCorrect": false },
//           { "answerText": "anonymous function", "isCorrect": false },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the length of the string?",
//         "answerOptions": [
//           { "answerText": "length()", "isCorrect": true },
//           { "answerText": "size()", "isCorrect": false },
//           { "answerText": "index()", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method reverses the order of the elements of an array?",
//         "answerOptions": [
//           { "answerText": "changeOrder(order)", "isCorrect": false },
//           { "answerText": "reverse()", "isCorrect": true },
//           { "answerText": "sort(order)", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
//         "answerOptions": [
//           { "answerText": "charAt()", "isCorrect": false },
//           { "answerText": "charCodeAt()", "isCorrect": true },
//           { "answerText": "concat()", "isCorrect": false },
//           { "answerText": "indexOf()", "isCorrect": false }
//         ]
//       },

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//       {
//         "questionText": "Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
//         "answerOptions": [
//           { "answerText": "lastIndexOf()", "isCorrect": true },
//           { "answerText": "search()", "isCorrect": false },
//           { "answerText": "substr()", "isCorrect": false },
//           { "answerText": "indexOf()", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the primitive value of the specified object.",
//         "answerOptions": [
//           { "answerText": "toLocaleUpperCase()", "isCorrect": false },
//           { "answerText": "toUpperCase()", "isCorrect": false },
//           { "answerText": "toString()", "isCorrect": false },
//           { "answerText": "valueOf()", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
//         "answerOptions": [
//           { "answerText": "sup()", "isCorrect": false },
//           { "answerText": "small()", "isCorrect": false },
//           { "answerText": "strike()", "isCorrect": false },
//           { "answerText": "sub()", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?",
//         "answerOptions": [
//           { "answerText": "pop()", "isCorrect": false },
//           { "answerText": "push()", "isCorrect": false },
//           { "answerText": "reduce()", "isCorrect": true },
//           { "answerText": "reduceRight()", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object represents the source code of an object?",
//         "answerOptions": [
//           { "answerText": "toSource()", "isCorrect": true },
//           { "answerText": "splice()", "isCorrect": false },
//           { "answerText": "toString()", "isCorrect": false },
//           { "answerText": "unshift()", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "95816c44-c13f-4b6e-a7f9-5b97f80d051a",
//     "subjectName": "JavaScript Basic 1",
//     "questions": [
//       {
//         "questionText": "Which of the following is correct about JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "JavaScript is a lightweight, interpreted programming language.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
//             "isCorrect": false
//           },
//           { "answerText": "All of the answer text.", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following is correct about features of JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "JavaScript is a lightweight, interpreted programming language.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript is designed for creating network-centric applications.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript is complementary to and integrated with Java.",
//             "isCorrect": false
//           },
//           { "answerText": "All of the answer text.", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following is correct about features of JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "JavaScript is is complementary to and integrated with HTML.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript is open and cross-platform.",
//             "isCorrect": false
//           },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "All of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following is an advantage of using JavaScript?",
//         "answerOptions": [
//           { "answerText": "Less server interaction.", "isCorrect": false },
//           {
//             "answerText": "Immediate feedback to the visitors.",
//             "isCorrect": false
//           },
//           { "answerText": "Increased interactivity.", "isCorrect": false },
//           { "answerText": "All of the answer text.", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following is a disadvantage of using JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "Client-side JavaScript does not allow the reading or writing of files.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript can not be used for Networking applications because there is no such support available.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript doesn't have any multithreading or multiprocess capabilities.",
//             "isCorrect": false
//           },
//           { "answerText": "All of the answer text.", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Is JavaScript a case-sensitive language?",
//         "answerOptions": [
//           { "answerText": "true", "isCorrect": true },
//           { "answerText": "false", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following is true about variable naming conventions in JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "You should not use any of the JavaScript reserved keyword as variable name.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript variable names should not start with a numeral 0 - 9.",
//             "isCorrect": false
//           },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following is true about variable naming conventions in JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "JavaScript variable names must begin with a letter or the underscore character.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript variable names are case sensitive.",
//             "isCorrect": false
//           },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following is true about typeof operator in JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "The typeof is a unary operator that is placed before its single operand, which can be of any type.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "Its value is a string indicating the data type of the operand.",
//             "isCorrect": false
//           },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Can you access Cookie using javascript?",
//         "answerOptions": [
//           { "answerText": "true", "isCorrect": true },
//           { "answerText": "false", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "782a3d80-9a49-4024-aad0-09fe94b5bfd2",
//     "subjectName": "JavaScript Basic 2",
//     "questions": [
//       {
//         "questionText": "Which of the following is true about cookie handling in JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "JavaScript can manipulate cookies using the cookie property of the Document object.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
//             "isCorrect": false
//           },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following is the correct syntax to create a cookie using JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "document.cookie = 'key1 = value1; key2 = value2; expires = date';",
//             "isCorrect": true
//           },
//           {
//             "answerText": "browser.cookie = 'key1 = value1; key2 = value2; expires = date';",
//             "isCorrect": false
//           },
//           {
//             "answerText": "window.cookie = 'key1 = value1; key2 = value2; expires = date';",
//             "isCorrect": false
//           },
//           {
//             "answerText": "navigator.cookie = 'key1 = value1; key2 = value2; expires = date';",
//             "isCorrect": false
//           }
//         ]
//       },
//       {
//         "questionText": "Which of the following is the correct syntax to redirect a url using JavaScript?",
//         "answerOptions": [
//           {
//             "answerText": "document.location='http://www.newlocation.com';",
//             "isCorrect": false
//           },
//           {
//             "answerText": "browser.location='http://www.newlocation.com';",
//             "isCorrect": false
//           },
//           {
//             "answerText": "navigator.location='http://www.newlocation.com';",
//             "isCorrect": false
//           },
//           {
//             "answerText": "window.location='http://www.newlocation.com';",
//             "isCorrect": true
//           }
//         ]
//       },
//       {
//         "questionText": "Which of the following is the correct syntax to print a page using JavaScript?",
//         "answerOptions": [
//           { "answerText": "window.print;", "isCorrect": true },
//           { "answerText": "browser.print;", "isCorrect": false },
//           { "answerText": "navigator.print;", "isCorrect": false },
//           { "answerText": "document.print;", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following is a valid type of function javascript supports?",
//         "answerOptions": [
//           { "answerText": "named function", "isCorrect": false },
//           { "answerText": "anonymous function", "isCorrect": false },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Can you assign an anonymous function to a variable?",
//         "answerOptions": [
//           { "answerText": "true", "isCorrect": true },
//           { "answerText": "false", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Can you pass an anonymous function as an argument to another function?",
//         "answerOptions": [
//           { "answerText": "true", "isCorrect": true },
//           { "answerText": "false", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "How can you get the type of arguments passed to a function?",
//         "answerOptions": [
//           { "answerText": "using typeof operator", "isCorrect": true },
//           { "answerText": "using getType function", "isCorrect": false },
//           { "answerText": "Both of the answer text.", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "How can you get the total number of arguments passed to a function?",
//         "answerOptions": [
//           { "answerText": "Using args.length property", "isCorrect": false },
//           {
//             "answerText": "Using arguments.length property",
//             "isCorrect": true
//           },
//           { "answerText": "Both of the answer text.", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following type of variable is visible everywhere in your JavaScript code?",
//         "answerOptions": [
//           { "answerText": "global variable", "isCorrect": true },
//           { "answerText": "local variable", "isCorrect": false },
//           { "answerText": "Both of the answer text", "isCorrect": false },
//           { "answerText": "None of the answer text", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "083f3346-7f13-4ba6-8bdd-14e23b25b0eb",
//     "subjectName": "JavaScript Basic 3",
//     "questions": [
//       {
//         "questionText": "Which of the following type of variable is visible only within a function where it is defined?",
//         "answerOptions": [
//           { "answerText": "global variable", "isCorrect": false },
//           { "answerText": "local variable", "isCorrect": true },
//           { "answerText": "Both of the answer text.", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following type of variable takes precedence over other if names are same?",
//         "answerOptions": [
//           { "answerText": "global variable", "isCorrect": false },
//           { "answerText": "local variable", "isCorrect": true },
//           { "answerText": "Both of the answer text.", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following is correct about callbacks?",
//         "answerOptions": [
//           {
//             "answerText": "A callback is a plain JavaScript function passed to some method as an argument or option.",
//             "isCorrect": false
//           },
//           {
//             "answerText": "Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
//             "isCorrect": false
//           },
//           { "answerText": "Both of the answer text.", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the character at the specified index?",
//         "answerOptions": [
//           { "answerText": "characterAt", "isCorrect": false },
//           { "answerText": "getCharAt", "isCorrect": false },
//           { "answerText": "charAt", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method combines the text of two strings and returns a new string?",
//         "answerOptions": [
//           { "answerText": "append", "isCorrect": false },
//           { "answerText": "concat", "isCorrect": true },
//           { "answerText": "attach", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method calls a function for each element in the array?",
//         "answerOptions": [
//           { "answerText": "while", "isCorrect": false },
//           { "answerText": "loop", "isCorrect": false },
//           { "answerText": "forEach", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
//         "answerOptions": [
//           { "answerText": "getIndex", "isCorrect": false },
//           { "answerText": "location", "isCorrect": false },
//           { "answerText": "indexOf", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the length of the string?",
//         "answerOptions": [
//           { "answerText": "length", "isCorrect": true },
//           { "answerText": "size", "isCorrect": false },
//           { "answerText": "index", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method removes the last element from an array and returns that element?",
//         "answerOptions": [
//           { "answerText": "last", "isCorrect": false },
//           { "answerText": "get", "isCorrect": false },
//           { "answerText": "pop", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
//         "answerOptions": [
//           { "answerText": "last", "isCorrect": false },
//           { "answerText": "put", "isCorrect": false },
//           { "answerText": "push", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "a0ba25fa-7898-4c1b-9346-3fb8bdb28164",
//     "subjectName": "JavaScript Basic 4",
//     "questions": [
//       {
//         "questionText": "Which built-in method reverses the order of the elements of an array?",
//         "answerOptions": [
//           { "answerText": "changeOrderorder", "isCorrect": false },
//           { "answerText": "reverse", "isCorrect": true },
//           { "answerText": "sortorder", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method sorts the elements of an array?",
//         "answerOptions": [
//           { "answerText": "changeOrder", "isCorrect": false },
//           { "answerText": "order", "isCorrect": false },
//           { "answerText": "sort", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the characters in a string beginning at the specified location?",
//         "answerOptions": [
//           { "answerText": "substr", "isCorrect": true },
//           { "answerText": "getSubstring", "isCorrect": false },
//           { "answerText": "slice", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the calling string value converted to lower case?",
//         "answerOptions": [
//           { "answerText": "toLowerCase", "isCorrect": true },
//           { "answerText": "toLower", "isCorrect": false },
//           { "answerText": "changeCase", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the calling string value converted to upper case?",
//         "answerOptions": [
//           { "answerText": "toUpperCase", "isCorrect": true },
//           { "answerText": "toUpper", "isCorrect": false },
//           { "answerText": "changeCase", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which built-in method returns the string representation of the number's value?",
//         "answerOptions": [
//           { "answerText": "toValue", "isCorrect": false },
//           { "answerText": "toNumber", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "All user-defined objects and built-in objects are descendants of an object called Object?",
//         "answerOptions": [
//           { "answerText": "true", "isCorrect": true },
//           { "answerText": "false", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following code creates an object?",
//         "answerOptions": [
//           { "answerText": "var book = Object;", "isCorrect": false },
//           { "answerText": "var book = new Object;", "isCorrect": true },
//           { "answerText": "var book = new OBJECT;", "isCorrect": false },
//           { "answerText": "var book = new Book;", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Number object forces a number to display in exponential notation?",
//         "answerOptions": [
//           { "answerText": "toExponential", "isCorrect": true },
//           { "answerText": "toFixed", "isCorrect": false },
//           { "answerText": "toPrecision", "isCorrect": false },
//           { "answerText": "toLocaleString", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
//         "answerOptions": [
//           { "answerText": "toExponential", "isCorrect": false },
//           { "answerText": "toFixed", "isCorrect": true },
//           { "answerText": "toPrecision", "isCorrect": false },
//           { "answerText": "toLocaleString", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "0fea5345-b901-4c78-994f-89d855ab4e5d",
//     "subjectName": "JavaScript Basic 5",
//     "questions": [
//       {
//         "questionText": "Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browser's locale settings?",
//         "answerOptions": [
//           { "answerText": "toExponential", "isCorrect": false },
//           { "answerText": "toFixed", "isCorrect": false },
//           { "answerText": "toLocaleString", "isCorrect": true },
//           { "answerText": "toString", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Number object defines how many total digits to display of a number?",
//         "answerOptions": [
//           { "answerText": "toExponential", "isCorrect": false },
//           { "answerText": "toFixed", "isCorrect": false },
//           { "answerText": "toLocaleString", "isCorrect": false },
//           { "answerText": "toPrecision", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Number object returns a string value version of the current number?",
//         "answerOptions": [
//           { "answerText": "toString", "isCorrect": true },
//           { "answerText": "toFixed", "isCorrect": false },
//           { "answerText": "toLocaleString", "isCorrect": false },
//           { "answerText": "toPrecision", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Number object returns the number's value?",
//         "answerOptions": [
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "valueOf", "isCorrect": true },
//           { "answerText": "toLocaleString", "isCorrect": false },
//           { "answerText": "toPrecision", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
//         "answerOptions": [
//           { "answerText": "toSource", "isCorrect": true },
//           { "answerText": "valueOf", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
//         "answerOptions": [
//           { "answerText": "toSource", "isCorrect": false },
//           { "answerText": "valueOf", "isCorrect": true },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": " Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
//         "answerOptions": [
//           { "answerText": "toSource", "isCorrect": false },
//           { "answerText": "valueOf", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": true },
//           { "answerText": "None of the answer text.", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": " Which of the following function of String object returns the character at the specified index?",
//         "answerOptions": [
//           { "answerText": "charAt", "isCorrect": true },
//           { "answerText": "charCodeAt", "isCorrect": false },
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "indexOf", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
//         "answerOptions": [
//           { "answerText": "charAt", "isCorrect": false },
//           { "answerText": "charCodeAt", "isCorrect": true },
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "indexOf", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object combines the text of two strings and returns a new string?",
//         "answerOptions": [
//           { "answerText": "add", "isCorrect": false },
//           { "answerText": "merge", "isCorrect": false },
//           { "answerText": "concat", "isCorrect": true },
//           { "answerText": "append", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "b762778f-66c5-4aa4-a6b3-1293093e3a8f",
//     "subjectName": "JavaScript Basic 6",
//     "questions": [
//       {
//         "questionText": "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
//         "answerOptions": [
//           { "answerText": "substr", "isCorrect": false },
//           { "answerText": "search", "isCorrect": false },
//           { "answerText": "lastIndexOf", "isCorrect": false },
//           { "answerText": "indexOf", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
//         "answerOptions": [
//           { "answerText": "lastIndexOf", "isCorrect": true },
//           { "answerText": "search", "isCorrect": false },
//           { "answerText": "substr", "isCorrect": false },
//           { "answerText": "indexOf", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
//         "answerOptions": [
//           { "answerText": "localeCompare", "isCorrect": true },
//           { "answerText": "search", "isCorrect": false },
//           { "answerText": "substr", "isCorrect": false },
//           { "answerText": "concat", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object is used to match a regularexpression against a string?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "match", "isCorrect": true },
//           { "answerText": "search", "isCorrect": false },
//           { "answerText": "replace", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "match", "isCorrect": false },
//           { "answerText": "replace", "isCorrect": true },
//           { "answerText": "search", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "match", "isCorrect": false },
//           { "answerText": "replace", "isCorrect": true },
//           { "answerText": "search", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object extracts a section of a string and returns a new string?",
//         "answerOptions": [
//           { "answerText": "slice", "isCorrect": true },
//           { "answerText": "split", "isCorrect": false },
//           { "answerText": "replace", "isCorrect": false },
//           { "answerText": "search", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
//         "answerOptions": [
//           { "answerText": "slice", "isCorrect": false },
//           { "answerText": "split", "isCorrect": true },
//           { "answerText": "replace", "isCorrect": false },
//           { "answerText": "search", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
//         "answerOptions": [
//           { "answerText": "slice", "isCorrect": false },
//           { "answerText": "split", "isCorrect": false },
//           { "answerText": "substr", "isCorrect": true },
//           { "answerText": "search", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the characters in a string between two indexes into the string?",
//         "answerOptions": [
//           { "answerText": "slice", "isCorrect": false },
//           { "answerText": "split", "isCorrect": false },
//           { "answerText": "substr", "isCorrect": false },
//           { "answerText": "substring", "isCorrect": true }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "55beeb7d-64bc-46a8-894f-ad5b6767ef96",
//     "subjectName": "JavaScript Basic 7",
//     "questions": [
//       {
//         "questionText": "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
//         "answerOptions": [
//           { "answerText": "toLocaleLowerCase", "isCorrect": true },
//           { "answerText": "toLowerCase", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "substring", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the calling string value converted to lower case?",
//         "answerOptions": [
//           { "answerText": "toLocaleLowerCase", "isCorrect": false },
//           { "answerText": "toLowerCase", "isCorrect": true },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "substring", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?",
//         "answerOptions": [
//           { "answerText": "toLocaleUpperCase", "isCorrect": true },
//           { "answerText": "toUpperCase", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "substring", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the calling string value converted to upper case?",
//         "answerOptions": [
//           { "answerText": "toLocaleUpperCase", "isCorrect": false },
//           { "answerText": "toUpperCase", "isCorrect": true },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "substring", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns a string representing the specified object?",
//         "answerOptions": [
//           { "answerText": "toLocaleUpperCase", "isCorrect": false },
//           { "answerText": "toUpperCase", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": true },
//           { "answerText": "substring", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object returns the primitive value of the specified object.",
//         "answerOptions": [
//           { "answerText": "toLocaleUpperCase", "isCorrect": false },
//           { "answerText": "toUpperCase", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "valueOf", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
//         "answerOptions": [
//           { "answerText": "anchor", "isCorrect": true },
//           { "answerText": "link", "isCorrect": false },
//           { "answerText": "blink", "isCorrect": false },
//           { "answerText": "big", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
//         "answerOptions": [
//           { "answerText": "anchor", "isCorrect": false },
//           { "answerText": "big", "isCorrect": true },
//           { "answerText": "blink", "isCorrect": false },
//           { "answerText": "italics", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
//         "answerOptions": [
//           { "answerText": "anchor", "isCorrect": false },
//           { "answerText": "big", "isCorrect": false },
//           { "answerText": "blink", "isCorrect": true },
//           { "answerText": "italics", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
//         "answerOptions": [
//           { "answerText": "anchor", "isCorrect": false },
//           { "answerText": "big", "isCorrect": false },
//           { "answerText": "blink", "isCorrect": false },
//           { "answerText": "bold", "isCorrect": true }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "104b755f-dcfe-4e64-a6e3-35b2d560bb36",
//     "subjectName": "JavaScript Basic 8",
//     "questions": [
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?",
//         "answerOptions": [
//           { "answerText": "fixed", "isCorrect": true },
//           { "answerText": "big", "isCorrect": false },
//           { "answerText": "blink", "isCorrect": false },
//           { "answerText": "bold", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
//         "answerOptions": [
//           { "answerText": "fixed", "isCorrect": false },
//           { "answerText": "fontcolor", "isCorrect": true },
//           { "answerText": "blink", "isCorrect": false },
//           { "answerText": "bold", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
//         "answerOptions": [
//           { "answerText": "fixed", "isCorrect": false },
//           { "answerText": "fontcolor", "isCorrect": false },
//           { "answerText": "fontsize", "isCorrect": true },
//           { "answerText": "bold", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
//         "answerOptions": [
//           { "answerText": "fixed", "isCorrect": false },
//           { "answerText": "fontcolor", "isCorrect": false },
//           { "answerText": "fontsize", "isCorrect": false },
//           { "answerText": "italics", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object creates an HTML hypertext link that requests another URL?",
//         "answerOptions": [
//           { "answerText": "link", "isCorrect": true },
//           { "answerText": "sub", "isCorrect": false },
//           { "answerText": "sup", "isCorrect": false },
//           { "answerText": "small", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?",
//         "answerOptions": [
//           { "answerText": "link", "isCorrect": false },
//           { "answerText": "small", "isCorrect": true },
//           { "answerText": "sup", "isCorrect": false },
//           { "answerText": "sub", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
//         "answerOptions": [
//           { "answerText": "sup", "isCorrect": false },
//           { "answerText": "small", "isCorrect": false },
//           { "answerText": "strike", "isCorrect": true },
//           { "answerText": "sub", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
//         "answerOptions": [
//           { "answerText": "sup", "isCorrect": false },
//           { "answerText": "small", "isCorrect": false },
//           { "answerText": "strike", "isCorrect": false },
//           { "answerText": "sub", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a <sup> tag?",
//         "answerOptions": [
//           { "answerText": "sup", "isCorrect": true },
//           { "answerText": "small", "isCorrect": false },
//           { "answerText": "strike", "isCorrect": false },
//           { "answerText": "sub", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object returns a new array comprised of this array joined with other arrays and/or values?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": true },
//           { "answerText": "pop", "isCorrect": false },
//           { "answerText": "push", "isCorrect": false },
//           { "answerText": "some", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "3414581c-1ea7-460d-a951-51186c107ae4",
//     "subjectName": "JavaScript Basic 9",
//     "questions": [
//       {
//         "questionText": "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "every", "isCorrect": true },
//           { "answerText": "push", "isCorrect": false },
//           { "answerText": "some", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "every", "isCorrect": false },
//           { "answerText": "filter", "isCorrect": true },
//           { "answerText": "some", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object calls a function for each element in the array?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "every", "isCorrect": false },
//           { "answerText": "filter", "isCorrect": false },
//           { "answerText": "forEach", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object returns the first least index of an element within the array equal to the specified value, or -1 if none is found?",
//         "answerOptions": [
//           { "answerText": "indexOf", "isCorrect": true },
//           { "answerText": "join", "isCorrect": false },
//           { "answerText": "lastIndexOf", "isCorrect": false },
//           { "answerText": "map", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object joins all elements of an array into a string?",
//         "answerOptions": [
//           { "answerText": "concat", "isCorrect": false },
//           { "answerText": "join", "isCorrect": true },
//           { "answerText": "pop", "isCorrect": false },
//           { "answerText": "map", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object returns the last greatest index of an element within the array equal to the specified value, or -1 if none is found?",
//         "answerOptions": [
//           { "answerText": "indexOf", "isCorrect": false },
//           { "answerText": "join", "isCorrect": false },
//           { "answerText": "lastIndexOf", "isCorrect": true },
//           { "answerText": "map", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
//         "answerOptions": [
//           { "answerText": "push", "isCorrect": false },
//           { "answerText": "join", "isCorrect": false },
//           { "answerText": "pop", "isCorrect": false },
//           { "answerText": "map", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object removes the last element from an array and returns that element?",
//         "answerOptions": [
//           { "answerText": "pop", "isCorrect": true },
//           { "answerText": "push", "isCorrect": false },
//           { "answerText": "join", "isCorrect": false },
//           { "answerText": "map", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
//         "answerOptions": [
//           { "answerText": "pop", "isCorrect": false },
//           { "answerText": "push", "isCorrect": true },
//           { "answerText": "join", "isCorrect": false },
//           { "answerText": "map", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object applies a function simultaneously against two values of the array from left to right as to reduce it to a single value?",
//         "answerOptions": [
//           { "answerText": "pop", "isCorrect": false },
//           { "answerText": "push", "isCorrect": false },
//           { "answerText": "reduce", "isCorrect": true },
//           { "answerText": "reduceRight", "isCorrect": false }
//         ]
//       }
//     ]
//   },
//   {
//     "id": "05c8cb95-e0fa-4dbb-9fee-91fa85b9081b",
//     "subjectName": "JavaScript Basic 10",
//     "questions": [
//       {
//         "questionText": "Which of the following function of Array object applies a function simultaneously against two values of the array from right to left as to reduce it to a single value?",
//         "answerOptions": [
//           { "answerText": "pop", "isCorrect": false },
//           { "answerText": "push", "isCorrect": false },
//           { "answerText": "reduce", "isCorrect": false },
//           { "answerText": "reduceRight", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object reverses the order of the elements of an array?",
//         "answerOptions": [
//           { "answerText": "reverse", "isCorrect": true },
//           { "answerText": "push", "isCorrect": false },
//           { "answerText": "reduce", "isCorrect": false },
//           { "answerText": "reduceRight", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object removes the first element from an array and returns that element?",
//         "answerOptions": [
//           { "answerText": "reverse", "isCorrect": false },
//           { "answerText": "shift", "isCorrect": true },
//           { "answerText": "slice", "isCorrect": false },
//           { "answerText": "some", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object extracts a section of an array and returns a new array?",
//         "answerOptions": [
//           { "answerText": "reverse", "isCorrect": false },
//           { "answerText": "shift", "isCorrect": false },
//           { "answerText": "slice", "isCorrect": true },
//           { "answerText": "some", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
//         "answerOptions": [
//           { "answerText": "reverse", "isCorrect": false },
//           { "answerText": "shift", "isCorrect": false },
//           { "answerText": "slice", "isCorrect": false },
//           { "answerText": "some", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object represents the source code of an object?",
//         "answerOptions": [
//           { "answerText": "toSource", "isCorrect": true },
//           { "answerText": "splice", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "unshift", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object sorts the elements of an array?",
//         "answerOptions": [
//           { "answerText": "toSource", "isCorrect": false },
//           { "answerText": "sort", "isCorrect": true },
//           { "answerText": "toString", "isCorrect": false },
//           { "answerText": "unshift", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object adds and/or removes elements from an array?",
//         "answerOptions": [
//           { "answerText": "toSource", "isCorrect": false },
//           { "answerText": "sort", "isCorrect": false },
//           { "answerText": "splice", "isCorrect": true },
//           { "answerText": "unshift", "isCorrect": false }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object returns a string representing the array and its elements?",
//         "answerOptions": [
//           { "answerText": "toSource", "isCorrect": false },
//           { "answerText": "sort", "isCorrect": false },
//           { "answerText": "splice", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": true }
//         ]
//       },
//       {
//         "questionText": "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
//         "answerOptions": [
//           { "answerText": "unshift", "isCorrect": true },
//           { "answerText": "sort", "isCorrect": false },
//           { "answerText": "splice", "isCorrect": false },
//           { "answerText": "toString", "isCorrect": false }
//         ]
//       }
//     ]
//   }
// ]
