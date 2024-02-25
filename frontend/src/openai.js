import OpenAI from "openai";

const openai = new OpenAI({apiKey:"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", dangerouslyAllowBrowser: true});

export async function sendMsgToOpenAI(message) {
  try{
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  }
  catch(e){
    console.log(e);
  }
}