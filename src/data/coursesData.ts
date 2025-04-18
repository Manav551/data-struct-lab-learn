
export interface Course {
  id: string;
  title: string;
  description: string;
  lessonCount: number;
  completedLessons: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  category: string;
  topics: string[];
}

export const coursesData: Course[] = [
  {
    id: 'arrays',
    title: 'Arrays and Strings',
    description: 'Learn about arrays, dynamic arrays, and string manipulation techniques with practical examples.',
    lessonCount: 12,
    completedLessons: 3,
    level: 'beginner',
    icon: 'brackets',
    category: 'Fundamental',
    topics: ['Arrays', 'Dynamic Arrays', 'Strings', 'Two Pointers']
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    description: 'Understand singly and doubly linked lists, their operations, and common patterns and techniques.',
    lessonCount: 10,
    completedLessons: 0,
    level: 'beginner',
    icon: 'link',
    category: 'Fundamental',
    topics: ['Singly Linked Lists', 'Doubly Linked Lists', 'Circular Lists']
  },
  {
    id: 'stacks-queues',
    title: 'Stacks and Queues',
    description: 'Learn about stack and queue data structures, their implementations, and practical applications.',
    lessonCount: 8,
    completedLessons: 0,
    level: 'beginner',
    icon: 'layers',
    category: 'Fundamental',
    topics: ['Stacks', 'Queues', 'Deques', 'Priority Queues']
  },
  {
    id: 'hash-tables',
    title: 'Hash Tables',
    description: 'Master hash tables, dictionaries, maps, and sets with various implementations and collision resolution.',
    lessonCount: 8,
    completedLessons: 0,
    level: 'intermediate',
    icon: 'database',
    category: 'Fundamental',
    topics: ['Hash Functions', 'Collision Resolution', 'Maps', 'Sets']
  },
  {
    id: 'trees',
    title: 'Trees and Binary Trees',
    description: 'Explore tree structures including binary trees, binary search trees, and their traversal algorithms.',
    lessonCount: 12,
    completedLessons: 0,
    level: 'intermediate',
    icon: 'git-branch',
    category: 'Advanced',
    topics: ['Binary Trees', 'BST', 'Traversals', 'Tree Patterns']
  },
  {
    id: 'heaps',
    title: 'Heaps and Priority Queues',
    description: 'Learn heap data structure, binary heaps, priority queues, and their implementations.',
    lessonCount: 6,
    completedLessons: 0,
    level: 'intermediate',
    icon: 'triangle',
    category: 'Advanced',
    topics: ['Binary Heaps', 'Min/Max Heaps', 'Heap Operations']
  },
  {
    id: 'graphs',
    title: 'Graphs and Graph Algorithms',
    description: 'Learn graph representations, traversal algorithms, and common graph problems with solutions.',
    lessonCount: 14,
    completedLessons: 0,
    level: 'advanced',
    icon: 'network',
    category: 'Advanced',
    topics: ['Graph Representations', 'BFS', 'DFS', 'Shortest Paths']
  },
  {
    id: 'trie',
    title: 'Trie and Advanced String Structures',
    description: 'Master the trie data structure and other advanced string processing techniques.',
    lessonCount: 6,
    completedLessons: 0,
    level: 'advanced',
    icon: 'folder-tree',
    category: 'Advanced',
    topics: ['Trie', 'Prefix Trees', 'Suffix Trees', 'String Patterns']
  },
  {
    id: 'advanced-ds',
    title: 'Advanced Data Structures',
    description: 'Explore specialized data structures like segment trees, Fenwick trees, and disjoint sets.',
    lessonCount: 10,
    completedLessons: 0,
    level: 'advanced',
    icon: 'milestone',
    category: 'Expert',
    topics: ['Segment Trees', 'Fenwick Trees', 'Disjoint Sets', 'B-Trees']
  }
];
