import React, { useState } from "react";

// Define the props this component will receive from App
interface Props {
  intent: string;
  topic: string;
  format: string;
  context: string;
  setIntent: (val: string) => void;
  setTopic: (val: string) => void;
  setFormat: (val: string) => void;
  setContext: (val: string) => void;
  onContinue: () => void;
}

const OpeningPage: React.FC<Props> = ({
  intent,
  topic,
  format,
  context,
  setIntent,
  setTopic,
  setFormat,
  setContext,
  onContinue
}) => {
  const [showErrorBox, setShowErrorBox] = useState(false);
  const [errorText, setErrorText] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Prompt Builder</h1>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">What do you want to do?</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Topic or subject?</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Preferred format</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Context, tone, etc.</label>
            <textarea
              className="w-full border rounded p-2"
              rows={4}
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={onContinue}
          >
            Continue
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => setShowErrorBox(true)}
          >
            Error
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
            More Info
          </button>
        </div>

        {/* Status */}
        <div className="text-center text-black mt-6 font-semibold">
          This step complete
        </div>
              </div>
    </div>
  );
};

export default OpeningPage;


