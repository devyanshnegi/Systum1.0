import './App.css';
import {sendBtn} from './assests/sendButton.png';

function App() {
  return (
    <div className="App">
      <div className='lower'>
        <input className='inputbox' placeholder='Send a message' /><button className='send'><img src={sendBtn} alt='Send' /></button>
      </div>
    </div>
  );
}

export default App;
