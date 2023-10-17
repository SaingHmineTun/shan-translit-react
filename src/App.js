import './App.css';
import { useState } from 'react';
import {taiToEng, engToTai} from './ShanTranslitConvert';



function App() {


  const [inputText, setInputText] = useState()
  const [outputText, setOutputText] = useState()

  const handleConvert = () => {
    console.log(engToTai(inputText))
    setOutputText(engToTai(inputText))
  }

  const handleInputTextChangg = (event) => {
    setInputText(event.target.value)
  }
  

  return (
    <div className="App">
      <textarea name='input' value={inputText}
      onChange={handleInputTextChangg}
      />
      <br/>
      <button name='btConvert' type='button' onClick={handleConvert}>Convert</button>
      <br/>
      <textarea name='input' value={outputText} />
    </div>
  );
}

export default App;
