// src/components/SnippetEditForm.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SnippetEditForm = ({ snippets, setSnippets }) => {
  const { id } = useParams(); // Get the snippet ID from the URL
  const navigate = useNavigate();

  const snippetToEdit = snippets[id];

  // Local state for editing the snippet
  const [name, setName] = useState(snippetToEdit.name);
  const [code, setCode] = useState(snippetToEdit.code);

  const handleSave = () => {
    // Update the snippet in the main state
    const updatedSnippets = [...snippets];
    updatedSnippets[id] = { ...snippetToEdit, name, code };
    setSnippets(updatedSnippets);

    // Navigate back to the snippet list
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Edit Snippet</h2>
        
        <label className="block mb-2 text-sm font-medium">Snippet Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <label className="block mb-2 text-sm font-medium">Snippet Code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SnippetEditForm;
