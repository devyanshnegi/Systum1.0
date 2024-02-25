import OpenAI from "openai";

// const openai = new OpenAI({apiKey:"", dangerouslyAllowBrowser: true});

const openai = new OpenAI();

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