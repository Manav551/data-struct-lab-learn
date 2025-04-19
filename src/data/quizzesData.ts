
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface Quiz {
  id: number;
  courseId: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit: number;
}

export const quizzesData: { [key: string]: Quiz[] } = {
  "arrays": [
    {
      id: 1,
      courseId: "arrays",
      title: "Arrays Fundamentals Quiz",
      description: "Test your understanding of basic array concepts",
      timeLimit: 15,
      questions: [
        {
          id: 1,
          text: "What is the time complexity of accessing an element in an array by its index?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 0
        },
        {
          id: 2,
          text: "Which operation adds an element to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          correctAnswer: 0
        },
        {
          id: 3,
          text: "What is the default value of uninitialized array elements in JavaScript?",
          options: ["0", "null", "undefined", "false"],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 2,
      courseId: "arrays",
      title: "String Manipulation Quiz",
      description: "Test your knowledge of string operations",
      timeLimit: 20,
      questions: [
        {
          id: 1,
          text: "Which method is used to split a string into an array?",
          options: ["split()", "slice()", "splice()", "join()"],
          correctAnswer: 0
        },
        {
          id: 2,
          text: "Which property returns the length of a string?",
          options: ["size", "length", "count", "index"],
          correctAnswer: 1
        }
      ]
    }
  ]
};

export type { Quiz, Question };
