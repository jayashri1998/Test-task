import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const countLetters = (str) => {
    const sanitized = str.replace(/\s+/g, "").toUpperCase();
    const seen = new Set();
    const counts = [];

    for (const char of sanitized) {
      if (!seen.has(char)) {
        const count = sanitized.split(char).length - 1;
        counts.push({ char, count });
        seen.add(char);
      }
    }
    return counts;
  };

  const handleCountLetters = () => {
    setResult(countLetters(input));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h3 className="text-2xl font-semibold text-center mb-4 text-blue-600">Letter Frequency Counter</h3>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter String"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <div className="text-center">
          <button
            onClick={handleCountLetters}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Count Letters
          </button>
        </div>
        <div className="mt-6">
          {result.length > 0 && (
            <div className="space-y-2">
              {result.map((item, index) => (
                <p key={index} className="text-lg text-gray-700">
                  {item.char} - <span className="font-semibold">{item.count}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
