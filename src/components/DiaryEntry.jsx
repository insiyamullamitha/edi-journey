import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function DiaryEntry({ entry, deleteDiaryEntry }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="bg-purple-100 shadow-md rounded-lg p-4">
      <div className="bg-purple-50 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">
          <span onClick={() => setShowDetails(!showDetails)}>
            {entry.title}
          </span>
        </h2>
        <p className="text-gray-500 text-sm overflow-hidden">
          <span>{entry.date}</span>
        </p>
        <button
          className="text-red-500 mt-2"
          onClick={() => deleteDiaryEntry(entry.id)}
        >
          <AiFillDelete />
        </button>
      </div>
      {showDetails && (
        <div className="bg-purple-150 shadow-md rounded-lg p-4 mt-2 overflow-hidden">
          <p className="text-gray-800">
            <span>{entry.details}</span>
          </p>
        </div>
      )}
    </div>
  );
}
