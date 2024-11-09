// src/components/LeftDiv.js
import React, { useState } from "react";

const LeftDiv = () => {
  const [languages, setLanguages] = useState([
    { name: "JavaScript", checked: false },
    { name: "Python", checked: false },
    { name: "C++", checked: false },
    { name: "Rust", checked: false },
    { name: "Go", checked: false },
  ]);

  const [snippets, setSnippets] = useState([
    { name: "React Snippet", date: "2024-10-10" },
    { name: "Python Snippet", date: "2024-09-15" },
    { name: "Tailwind Snippet", date: "2024-08-20" },
  ]);

  const [sortOrder, setSortOrder] = useState("latest");

  // Toggle checkbox for language selection
  const toggleCheckbox = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].checked = !newLanguages[index].checked;
    setLanguages(newLanguages);
  };

  // Sort snippets by latest or oldest
  const sortSnippets = (order) => {
    const sortedSnippets = [...snippets].sort((a, b) => {
      return order === "latest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    setSnippets(sortedSnippets);
    setSortOrder(order);
  };

  return (
    <div className="bg-gray-100 p-4 w-64">
      {/* My Info Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">My Information</h2>
        <p><strong>Name:</strong> ChatGPT</p>
        <p><strong>Favourite Language:</strong> JavaScript</p>
      </div>

      {/* Favourite Languages Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Favourite Languages</h2>
        <ul>
          {languages.map((language, index) => (
            <li key={language.name} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={language.checked}
                onChange={() => toggleCheckbox(index)}
              />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sorting Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Sort Snippets</h2>
        <div className="flex space-x-4">
          <button
            className={`px-3 py-1 rounded ${
              sortOrder === "latest" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => sortSnippets("latest")}
          >
            Latest
          </button>
          <button
            className={`px-3 py-1 rounded ${
              sortOrder === "oldest" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => sortSnippets("oldest")}
          >
            Oldest
          </button>
        </div>
      </div>

      {/* Snippets Section */}
      <div>
        <h2 className="text-lg font-bold mb-2">My Snippets</h2>
        <ul>
          {snippets.map((snippet) => (
            <li key={snippet.name} className="mb-2">
              <p className="font-semibold">{snippet.name}</p>
              <p className="text-sm text-gray-600">{snippet.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftDiv;
