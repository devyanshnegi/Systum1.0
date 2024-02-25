import './App.css';
import sendBtn from './assests/sendButton.png';
import userIcon from './assests/finger.svg';
import botIcon from './assests/bot.jpg'
import { sendMsgToOpenAI } from './openai.js';
import React, { useState } from 'react';


function App() {

  const [input, setInput] = useState("");

  const handleSend = async () => {
    const response = await sendMsgToOpenAI(input);
    console.log(response);
  }

  return (
    <div className="App">
      <div className='chats'>
        <div className='messages'>
          <div className='chatUser' >
            <img src={userIcon} alt='' /><p>Lorem ipsum</p>
          </div>
          <div className='chatBot' >
            <img src={botIcon} alt='' /><p>Lorem ipsum</p>
          </div>
        </div>
        <div className='chatFooter'>
          <input className='inputbox' placeholder='Send a message' value={input} onChange={(e) => setInput(e.target.value)} /><button className='send' onClick={handleSend}><img src={sendBtn} alt='Send' /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
