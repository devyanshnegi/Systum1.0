import './App.css';
import sendBtn  from './assests/sendButton.png';
import { sendMsgToOpenAI } from './openai.js';
import React, { useState } from 'react';


function App() {

  const [input, setInput] = useState("");

  const handleSend = async () => {
    console.log(input);
    const response = await sendMsgToOpenAI(input);
    console.log(response);
  }

  return (
    <div className="App">
      <div className='lower'>
        <input className='inputbox' placeholder='Send a message' value={input} onChange={(e)=>setInput(e.target.value)}/><button className='send' onClick={handleSend}><img src={sendBtn} alt='Send' /></button>
      </div>
    </div>
  );
}

export default App;
