const quizBank = [
  {
    subjectName: "JavaScript Easy Quiz",
    questions: [
      {
        questionText: "Which of the following is correct about JavaScript?",
        answerOptions: [
          {
            answerText:
              "JavaScript is a lightweight, interpreted programming language.",
            isCorrect: false
          },
          {
            answerText:
              "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
            isCorrect: false
          },
          {
            answerText:
              "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
            isCorrect: false
          },
          { answerText: "All of the answer text.", isCorrect: true }
        ]
      },
      {
        questionText:
          "Which of the following is a valid type of function javascript supports?",
        answerOptions: [
          { answerText: "named function", isCorrect: false },
          { answerText: "anonymous function", isCorrect: false },
          { answerText: "Both of the answer text.", isCorrect: true },
          { answerText: "None of the answer text.", isCorrect: false }
        ]
      },
      {
        questionText: "Which built-in method returns the length of the string?",
        answerOptions: [
          { answerText: "length()", isCorrect: true },
          { answerText: "size()", isCorrect: false },
          { answerText: "index()", isCorrect: false },
          { answerText: "None of the answer text.", isCorrect: false }
        ]
      },
      {
        questionText:
          "Which built-in method reverses the order of the elements of an array?",
        answerOptions: [
          { answerText: "changeOrder(order)", isCorrect: false },
          { answerText: "reverse()", isCorrect: true },
          { answerText: "sort(order)", isCorrect: false },
          { answerText: "None of the answer text.", isCorrect: false }
        ]
      },
      {
        questionText:
          "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
        answerOptions: [
          { answerText: "charAt()", isCorrect: false },
          { answerText: "charCodeAt()", isCorrect: true },
          { answerText: "concat()", isCorrect: false },
          { answerText: "indexOf()", isCorrect: false }
        ]
      },
      {
        questionText:
          "Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
        answerOptions: [
          { answerText: "lastIndexOf()", isCorrect: true },
          { answerText: "search()", isCorrect: false },
          { answerText: "substr()", isCorrect: false },
          { answerText: "indexOf()", isCorrect: false }
        ]
      },
      {
        questionText:
          "Which of the following function of String object returns the primitive value of the specified object.",
        answerOptions: [
          { answerText: "toLocaleUpperCase()", isCorrect: false },
          { answerText: "toUpperCase()", isCorrect: false },
          { answerText: "toString()", isCorrect: false },
          { answerText: "valueOf()", isCorrect: true }
        ]
      },
      {
        questionText:
          "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        answerOptions: [
          { answerText: "sup()", isCorrect: false },
          { answerText: "small()", isCorrect: false },
          { answerText: "strike()", isCorrect: false },
          { answerText: "sub()", isCorrect: true }
        ]
      },
      {
        questionText:
          "Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?",
        answerOptions: [
          { answerText: "pop()", isCorrect: false },
          { answerText: "push()", isCorrect: false },
          { answerText: "reduce()", isCorrect: true },
          { answerText: "reduceRight()", isCorrect: false }
        ]
      },
      {
        questionText:
          "Which of the following function of Array object represents the source code of an object?",
        answerOptions: [
          { answerText: "toSource()", isCorrect: true },
          { answerText: "splice()", isCorrect: false },
          { answerText: "toString()", isCorrect: false },
          { answerText: "unshift()", isCorrect: false }
        ]
      }
    ]
  }
];

export default quizBank;
