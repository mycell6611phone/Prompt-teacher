import React from "react";

interface Props {
  intent: string;
  topic: string;
  format: string;
  context: string;
  setIntent: (value: string) => void;
  setTopic: (value: string) => void;
  setFormat: (value: string) => void;
  setContext: (value: string) => void;
  buildPrompt: () => void;
}

const PromptForm: React.FC<Props> = ({
  intent,
  topic,
  format,
  context,
  setIntent,
  setTopic,
  setFormat,
  setContext,
  buildPrompt
}) => (
  <>
    <input
      className="border p-2 rounded w-full"
      placeholder="What do you want to do?"
      value={intent}
      onChange={(e) => setIntent(e.target.value)}
    />
    <input
      className="border p-2 rounded w-full"
      placeholder="Topic or subject?"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
    />
    <input
      className="border p-2 rounded w-full"
      placeholder="Preferred format?"
      value={format}
      onChange={(e) => setFormat(e.target.value)}
    />
    <textarea
      className="border p-2 rounded w-full"
      placeholder="Context, tone, etc."
      value={context}
      onChange={(e) => setContext(e.target.value)}
    />
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      onClick={buildPrompt}
    >
      Generate Steps
    </button>
  </>
);

export default PromptForm;
