import './App.css';
import sendBtn from './assests/sendButton.png';
import userIcon from './assests/finger.svg';
import botIcon from './assests/bot.jpg'
import { sendMsgToOpenAI } from './openai.js';
import React, { useEffect, useState, useRef } from 'react';


function App() {

  const msgEnd=useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    text: "Hi, I am a Super AI",
    isBot: true,
  }]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, { text: text, isBot: false }]);
    const response = await sendMsgToOpenAI(text);
    await setMessages([...messages, { text: response, isBot: true }]);
    console.log(response);
  }

  useEffect(()=>{
    msgEnd.current.scrollIntoView();
  },[messages])

  return (
    <div className="App">
      <div className='main'>
        <div className='chat'>
          {/* <div className='chatUser' >
            <img className='chatImg' src={userIcon} alt='' /><p>{messages[0].text}</p>
          </div>
          <div className='chatBot' >
            <img className='chatImg' src={botIcon} alt='' /><p>{messages[0].text}</p>
          </div> */}
          {
            messages.map((message, i) => 
              <div key={i} className={message.isBot?'chatBot':'chatUser'} >
                <img className='chatImg' src={message.isBot?botIcon:userIcon} alt='' /><p>{message.text}</p>
              </div>
            )
          }
          <div ref={msgEnd}></div>
        </div>
        <div className='chatFooter'>
        <div className="inp">

          <input className='inputbox' placeholder='Send a message' value={input} onChange={(e) => setInput(e.target.value)} /><button className='send' onClick={handleSend}><img src={sendBtn} alt='Send' /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
