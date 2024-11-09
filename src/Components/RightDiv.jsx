// src/components/RightDiv.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const RightDiv = ({ snippets, handleEditSnippet, handleLikeSnippet }) => {
  const latestSnippet = snippets[0]; // Show the first snippet as the "latest" one for the top box

  return (
    <div className="bg-gray-900 p-4 w-full flex flex-col space-y-4 overflow-hidden">
      {/* Top box displaying the latest snippet */}
      <div className=" border border-blue-500 bg-gray-900 text-white p-4 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-bold">Snippet Overview</h2>
        <p><strong>Latest Snippet:</strong> {latestSnippet.name}</p>
        <p><strong>Author:</strong> {latestSnippet.author}</p>
        {/* Font Awesome Thumbs-Up Button */}
        <button
          onClick={handleLikeSnippet}
          className="absolute top-9 right-4 text-blue-500 hover:text-blue-600 flex items-center space-x-1"
        >
          <FontAwesomeIcon icon={faThumbsUp} size="2x" />
          <span className="text-xl">{latestSnippet.likes}</span>
        </button>
      </div>

      {/* Snippets list */}
      <div className="flex flex-col space-y-4 overflow-y-auto h-[100vh]">
        {snippets.map((snippet, index) => (
          <div key={index} className="border border-blue-500 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold text-white">{snippet.name}</p>
                <p className="text-sm text-white">By {snippet.author} on {snippet.date}</p>
              </div>
              <button
                onClick={() => handleEditSnippet(index)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
            <pre className="bg-gray-200 p-2 rounded">
              <code>{snippet.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightDiv;
