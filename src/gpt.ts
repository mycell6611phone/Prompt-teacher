import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // You'll define this in a .env file
  dangerouslyAllowBrowser: true
});

export async function getSteps(prompt: string): Promise<string> {
  const res = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a teacher guiding a user step-by-step through a project." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });

  return res.choices[0].message.content || "";
}
