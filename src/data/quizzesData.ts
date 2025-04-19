
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
      timeLimit: 20,
      questions: [
        {
          id: 1,
          text: "What is the time complexity of accessing an element in an array by its index?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 0
        },
        {
          id: 2,
          text: "Which method adds an element to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          correctAnswer: 0
        },
        {
          id: 3,
          text: "What is the default value of uninitialized array elements in JavaScript?",
          options: ["0", "null", "undefined", "false"],
          correctAnswer: 2
        },
        {
          id: 4,
          text: "Which method removes the last element from an array?",
          options: ["pop()", "shift()", "splice()", "slice()"],
          correctAnswer: 0
        },
        {
          id: 5,
          text: "What is the time complexity of searching for an element in an unsorted array?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 1
        },
        {
          id: 6,
          text: "Which method is used to merge two or more arrays?",
          options: ["concat()", "join()", "merge()", "combine()"],
          correctAnswer: 0
        },
        {
          id: 7,
          text: "What does the map() method return?",
          options: ["The original array", "A new array", "undefined", "The first element"],
          correctAnswer: 1
        },
        {
          id: 8,
          text: "Which method removes the first element from an array?",
          options: ["shift()", "unshift()", "pop()", "remove()"],
          correctAnswer: 0
        },
        {
          id: 9,
          text: "What is the length property of an empty array?",
          options: ["undefined", "null", "0", "-1"],
          correctAnswer: 2
        },
        {
          id: 10,
          text: "Which method creates a shallow copy of an array?",
          options: ["slice()", "splice()", "concat()", "copy()"],
          correctAnswer: 0
        }
      ]
    }
  ],
  "sorting": [
    {
      id: 2,
      courseId: "sorting",
      title: "Sorting Algorithms Quiz",
      description: "Test your knowledge of sorting algorithms",
      timeLimit: 25,
      questions: [
        {
          id: 1,
          text: "What is the time complexity of Bubble Sort in the worst case?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
          correctAnswer: 2
        },
        {
          id: 2,
          text: "Which sorting algorithm has the best average-case time complexity?",
          options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
          correctAnswer: 1
        },
        {
          id: 3,
          text: "What is the space complexity of Merge Sort?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 1
        },
        {
          id: 4,
          text: "Which sorting algorithm is considered stable?",
          options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
          correctAnswer: 2
        },
        {
          id: 5,
          text: "What is the best-case time complexity of Bubble Sort?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
          correctAnswer: 0
        },
        {
          id: 6,
          text: "Which sorting algorithm uses a divide-and-conquer approach?",
          options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
          correctAnswer: 1
        },
        {
          id: 7,
          text: "What is the space complexity of Quick Sort?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 2
        },
        {
          id: 8,
          text: "Which sorting algorithm is most efficient for nearly sorted arrays?",
          options: ["Quick Sort", "Merge Sort", "Insertion Sort", "Heap Sort"],
          correctAnswer: 2
        },
        {
          id: 9,
          text: "What is the average-case time complexity of Merge Sort?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
          correctAnswer: 1
        },
        {
          id: 10,
          text: "Which sorting algorithm uses a heap data structure?",
          options: ["Quick Sort", "Heap Sort", "Merge Sort", "Bubble Sort"],
          correctAnswer: 1
        }
      ]
    }
  ],
  "trees": [
    {
      id: 3,
      courseId: "trees",
      title: "Tree Data Structures Quiz",
      description: "Test your understanding of tree data structures",
      timeLimit: 25,
      questions: [
        {
          id: 1,
          text: "What is the maximum number of children a binary tree node can have?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 1
        },
        {
          id: 2,
          text: "Which traversal visits the root node first?",
          options: ["Inorder", "Preorder", "Postorder", "Level-order"],
          correctAnswer: 1
        },
        {
          id: 3,
          text: "What is the height of a complete binary tree with n nodes?",
          options: ["log n", "n", "n/2", "2n"],
          correctAnswer: 0
        },
        {
          id: 4,
          text: "In a binary search tree, where is the smallest element located?",
          options: ["Root", "Leftmost node", "Rightmost node", "Random"],
          correctAnswer: 1
        },
        {
          id: 5,
          text: "What is the time complexity of searching in a balanced BST?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 2
        },
        {
          id: 6,
          text: "Which tree traversal visits nodes level by level?",
          options: ["Inorder", "Preorder", "Postorder", "Level-order"],
          correctAnswer: 3
        },
        {
          id: 7,
          text: "What is an AVL tree?",
          options: [
            "A binary search tree",
            "A self-balancing BST",
            "A complete binary tree",
            "A full binary tree"
          ],
          correctAnswer: 1
        },
        {
          id: 8,
          text: "What is the maximum number of nodes at level i in a binary tree?",
          options: ["i", "2^i", "i^2", "2i"],
          correctAnswer: 1
        },
        {
          id: 9,
          text: "Which operation maintains the BST property?",
          options: ["Rotation", "Traversal", "Deletion", "All of these"],
          correctAnswer: 0
        },
        {
          id: 10,
          text: "What is the time complexity of inserting into a BST?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 2
        }
      ]
    }
  ]
};

export type { Quiz, Question };
