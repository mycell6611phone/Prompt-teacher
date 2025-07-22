import { useState } from "react";
import ChatModal from './ChatModal';

function App() {
  const [whatToDo, setWhatToDo] = useState("");
  const [audience, setAudience] = useState("");
  const [style, setStyle] = useState("");
  const [result, setResult] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const generatePrompt = () => {
    let prompt = `You are a prompt engineer.\n`;
    prompt += `I want to: ${whatToDo.trim() || "[not specified]"}.\n`;
    prompt += audience ? `The prompt is for: ${audience}.\n` : "";
    prompt += style ? `Please use this tone/context: ${style}.\n` : "";
    prompt += `Make it clear, effective, and ready to copy.`;

    setResult(prompt);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">🧠 Prompt Builder</h1>

        <input
          className="w-full border rounded p-2"
          placeholder="what is your project?"
          value={whatToDo}
          onChange={(e) => setWhatToDo(e.target.value)}
        />
        <input
          className="w-full border rounded p-2"
          placeholder="Who is this prompt for? (ChatGPT, Midjourney, etc.)"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        />
        <input
          className="w-full border rounded p-2"
          placeholder="Tone or style? (e.g., professional, playful)"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={generatePrompt}
        >
          Generate Prompt
        </button>

        {result && (
          <>
            <textarea
              className="w-full border rounded p-2 text-sm text-gray-700"
              rows={6}
              readOnly
              value={result}
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded w-full mt-2"
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert("✅ Prompt copied to clipboard!");
              }}
            >
              Copy Prompt
            </button>
          </>
        )}

        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg z-50"
        >
          Ask a Question
        </button>

        {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}

      </div>
    </div>
  );
}

export default App;

