import OpenAI from "openai";

const openai = new OpenAI({apiKey:"", dangerouslyAllowBrowser: true});

// const openai = new OpenAI();

export async function sendMsgToOpenAI(message) {
  try{
    const completion = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: message+". Given the situation analyze the probable causes for the ongoing situation especially determine the root cause in the case of a cyber attack. Also tell me about the probable future events because of the situation in a simple paragraph under 150 words. ALso tell me what cybersecurity professionals can do for the situation." }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  }
  catch(e){
    console.log(e);
  }
}