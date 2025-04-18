
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, RefreshCw } from "lucide-react";

const arrayExample = `// JavaScript Array Implementation and Common Operations
let arr = [1, 2, 3, 4, 5];

// Accessing elements - O(1)
console.log(arr[0]); // Output: 1

// Adding elements
arr.push(6);       // Add to end - O(1)
arr.unshift(0);    // Add to start - O(n)

// Removing elements
arr.pop();         // Remove from end - O(1)
arr.shift();       // Remove from start - O(n)

// Searching
let index = arr.indexOf(3); // O(n)
console.log(index); // Output: 2

// Iterating
arr.forEach(item => console.log(item));

// Transforming
let doubled = arr.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`;

const linkedListExample = `// JavaScript Linked List Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  // Add to end - O(1)
  append(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }
  
  // Print all values
  printList() {
    const values = [];
    let current = this.head;
    
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    
    return values;
  }
}

const list = new LinkedList();
list.append(1).append(2).append(3);
console.log(list.printList()); // [1, 2, 3]`;

const stackExample = `// JavaScript Stack Implementation
class Stack {
  constructor() {
    this.items = [];
  }
  
  // Add to top - O(1)
  push(element) {
    this.items.push(element);
  }
  
  // Remove from top - O(1)
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }
  
  // View top element - O(1)
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.peek()); // 2`;

const examples = [
  { title: "Arrays", code: arrayExample },
  { title: "Linked Lists", code: linkedListExample },
  { title: "Stacks", code: stackExample }
];

export const CodeDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [codeOutput, setCodeOutput] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);

  const runCode = () => {
    setIsExecuting(true);
    
    // Simulate output after a short delay
    setTimeout(() => {
      switch (activeTab) {
        case 0: // Arrays
          setCodeOutput("1\n2\n[2, 4, 6, 8, 10]");
          break;
        case 1: // Linked Lists
          setCodeOutput("[1, 2, 3]");
          break;
        case 2: // Stacks
          setCodeOutput("3\n3\n2");
          break;
        default:
          setCodeOutput("Code output will appear here");
      }
      setIsExecuting(false);
    }, 1000);
  };

  const resetOutput = () => {
    setCodeOutput("");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Interactive Code Examples
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Try out these data structure implementations right in your browser
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex bg-gray-800 text-white text-sm">
            {examples.map((example, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${
                  activeTab === index
                    ? "bg-brand-blue text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setActiveTab(index);
                  resetOutput();
                }}
              >
                {example.title}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-1 bg-gray-900">
              <pre className="p-4 text-sm text-gray-300 font-mono overflow-auto h-[400px]">
                <code>{examples[activeTab].code}</code>
              </pre>
            </div>
            
            <div className="flex flex-col border-l border-gray-200">
              <div className="p-4 bg-gray-100 border-b border-gray-200">
                <div className="flex space-x-2">
                  <Button 
                    onClick={runCode} 
                    className="flex-1 flex items-center justify-center"
                    disabled={isExecuting}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Run Code
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetOutput}
                    className="flex items-center justify-center"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 p-4 font-mono text-sm">
                <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">Output:</h3>
                {isExecuting ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand-blue"></div>
                  </div>
                ) : (
                  <pre className="whitespace-pre-line">{codeOutput || "Click 'Run Code' to see output"}</pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
