import OpenAI from "openai";

const openai = new OpenAI({apiKey:"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", dangerouslyAllowBrowser: true});

export async function sendMsgToOpenAI(message) {
  try{
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  }
  catch(e){
    console.log(e);
  }
}