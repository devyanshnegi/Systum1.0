import openai from 'openai';

openai.apiKey = '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';

export async function sendMsgToOpenAI(message) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion?.choices[0]);
}