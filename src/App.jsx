// src/App.jsx
import React, { useState } from 'react';
import LeftDiv from './Components/LeftDiv.jsx';
import RightDiv from './Components/RightDiv.jsx';

function App() {
  // State for snippets and sorting
  const [snippets, setSnippets] = useState([
    { name: 'React Snippet', author: 'Alice', date: '2024-10-10', code: 'const App = () => <div>Hello World</div>;', likes: 0 },
    { name: 'Python Snippet', author: 'Bob', date: '2024-09-15', code: 'def hello_world():\n    print("Hello World")', likes: 0 },
    { name: 'Tailwind Snippet', author: 'Charlie', date: '2024-08-20', code: '<div className="text-center">Hello Tailwind</div>', likes: 0 },
    { name: 'Vue Snippet', author: 'Alice', date: '2024-07-18', code: '<template><div>Hello Vue</div></template>', likes: 0 },
    { name: 'Go Snippet', author: 'David', date: '2024-06-22', code: 'package main\n\nfunc main() {\n    fmt.Println("Hello Go")\n}', likes: 0 },
    { name: 'Ruby Snippet', author: 'Eve', date: '2024-05-13', code: 'puts "Hello Ruby"', likes: 0 },
    { name: 'C++ Snippet', author: 'Frank', date: '2024-04-25', code: '#include<iostream>\nint main() { std::cout << "Hello C++"; return 0; }', likes: 0 },
    { name: 'Rust Snippet', author: 'Grace', date: '2024-03-18', code: 'fn main() {\n    println!("Hello Rust");\n}', likes: 0 },
    { name: 'Java Snippet', author: 'Henry', date: '2024-02-14', code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello Java");\n    }\n}', likes: 0 },
    { name: 'Swift Snippet', author: 'Ivy', date: '2024-01-10', code: 'print("Hello Swift")', likes: 0 },
  ]);

  const [sortOrder, setSortOrder] = useState('latest');

  // Handle sorting
  const sortSnippets = (order) => {
    const sortedSnippets = [...snippets].sort((a, b) => {
      return order === 'latest'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    setSnippets(sortedSnippets);
    setSortOrder(order);
  };

  // Handle checkbox toggle for languages
  const [languages, setLanguages] = useState([
    { name: 'JavaScript', checked: false },
    { name: 'Python', checked: false },
    { name: 'C++', checked: false },
    { name: 'Rust', checked: false },
    { name: 'Go', checked: false },
  ]);

  const handleCheckboxToggle = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].checked = !updatedLanguages[index].checked;
    setLanguages(updatedLanguages);
  };

  // Handle editing a snippet
  const handleEditSnippet = (index) => {
    const snippetToEdit = snippets[index];
    const newSnippetName = prompt("Edit Snippet Name:", snippetToEdit.name);
    const newSnippetCode = prompt("Edit Snippet Code:", snippetToEdit.code);

    if (newSnippetName && newSnippetCode) {
      const updatedSnippets = [...snippets];
      updatedSnippets[index] = { ...snippetToEdit, name: newSnippetName, code: newSnippetCode };
      setSnippets(updatedSnippets);
    }
  };

  // Handle liking the latest snippet
  const handleLikeSnippet = () => {
    const updatedSnippets = [...snippets];
    updatedSnippets[0].likes += 1; // Add like only for the first (latest) snippet
    setSnippets(updatedSnippets);
  };

  return (
    <div className="App flex h-screen overflow-hidden">
      {/* Left Div with personal information */}
      <LeftDiv
        snippets={snippets}
        sortOrder={sortOrder}
        sortSnippets={sortSnippets}
        languages={languages}
        handleCheckboxToggle={handleCheckboxToggle}
      />

      {/* Right Div with saved snippets */}
      <RightDiv
        snippets={snippets}
        handleEditSnippet={handleEditSnippet}
        handleLikeSnippet={handleLikeSnippet}
      />
    </div>
  );
}

export default App;
