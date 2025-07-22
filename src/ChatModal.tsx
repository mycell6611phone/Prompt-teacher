import React, { useState } from "react";

interface ChatModalProps {
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  // This function just echoes the message (replace with OpenAI call later)
  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages([...messages, userMsg, { role: "assistant", content: "Echo: " + input }]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-4 w-full max-w-lg flex flex-col">
        <button onClick={onClose} className="self-end text-gray-400">×</button>
        <div className="flex-1 overflow-y-auto mb-4 max-h-80">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-blue-800" : "text-green-800"}>
              <b>{m.role}:</b> {m.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded p-2"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="Ask your question..."
          />
          <button onClick={send} className="bg-indigo-600 text-white px-4 rounded">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
