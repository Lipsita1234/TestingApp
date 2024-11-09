// src/components/LeftDiv.jsx
import React from 'react';

const LeftDiv = ({ snippets, sortOrder, sortSnippets, languages, handleCheckboxToggle }) => {
  const favoriteLanguage = 'JavaScript'; // This can be dynamic if needed

  return (
    <div className="bg-gray-800 text-white p-4 w-64">
      {/* 1. My Name */}
      <div className="mb-4">
        {/* <h2 className="text-lg font-bold mb-2">My Information</h2> */}
        <p><strong>Name</strong></p>
      </div>

     

      {/* 3. My Favorite Language */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Favourite Language</h2>
        <p>{favoriteLanguage}</p>
      </div>

      {/* 4. Coding Languages with checkboxes */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Coding Languages</h2>
        <ul>
          {languages.map((language, index) => (
            <li key={language.name} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={language.checked}
                onChange={() => handleCheckboxToggle(index)}
              />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      </div>
       {/* 2. My Snippets with sorting */}
    <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">My Snippets</h2>
        {/* Sorting buttons */}
        <div className="flex space-x-4 mb-2">
          <button
            className={`px-3 py-1 rounded-full ${
              sortOrder === 'latest' ? 'bg-blue-500 text-white' : 'bg-gray-400'
            }`}
            onClick={() => sortSnippets('latest')}
          >
            Latest
          </button>
          <button
            className={`px-3 py-1 rounded-full ${
              sortOrder === 'oldest' ? 'bg-blue-500 text-white' : 'bg-gray-400'
            }`}
            onClick={() => sortSnippets('oldest')}
          >
            Oldest
          </button>
        </div>
        {/* Display sorted snippets */}
        <ul>
          {snippets.map((snippet) => (
            <li key={snippet.name} className="mb-2">
              <p className="font-semibold">{snippet.name}</p>
              <p className="text-sm text-white-600">{snippet.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    
  );
};

export default LeftDiv;
