import { useState } from "react";

export default function DiaryForm({ addDiaryEntry }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      title,
      date,
      details,
    };
    addDiaryEntry(newEntry);
    setTitle("");
    setDate("");
    setDetails("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-4">
          <input
            className="border border-purple-300 rounded-lg p-2 focus:outline-none focus:purple-600"
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="New entry..."
            value={title}
          />
          <input
            className="border border-purple-300 rounded-lg p-2 focus:outline-none  focus:purple-600"
            onChange={(e) => setDate(e.target.value)}
            required
            type="date"
            value={date}
          />
          <textarea
            className="border border-purple-300 rounded-lg p-2 focus:outline-none focus:purple-600 resize-none"
            onChange={(e) => setDetails(e.target.value)}
            required
            cols="30"
            rows="2"
            placeholder="Details..."
            value={details}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white rounded-lg p-2 hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
