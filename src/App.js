import './App.css';
import { useState } from 'react';
import {taiToEng, engToTai} from './ShanTranslitConvert';



function App() {


  const [inputText, setInputText] = useState()
  const [outputText, setOutputText] = useState()
  const [shn2Eng, setShn2Eng] = useState(true)
  const [excludeTones, setExcludeTones] = useState(false)

  const handleConvert = () => {
    if (shn2Eng) {
      if (excludeTones) {
        setOutputText(taiToEng(inputText, false))

      } else {

        setOutputText(taiToEng(inputText, true))
      }
    } else {
      setOutputText(engToTai(inputText))
    }
  }

  

  return (
    <div className="App">

      <text>Shan Translit</text>

      <br />
      <br />

      <span className='radio'>
        
        <input type='radio' radioGroup='rg' value={shn2Eng} checked={shn2Eng} onClick={() => setShn2Eng(true)} /> 
        Shan to English
      </span>
      <span className='radio'>

        <input type='radio' radioGroup='rg' value={shn2Eng} checked={!shn2Eng} onClick={() => setShn2Eng(false)}/>
        English to Shan 
      </span>
      <br />
      
      <textarea name='input' value={inputText}
      onChange={(event) => setInputText(event.target.value)}
      />

      <br/>      
      <br/>

      <button name='btConvert' type='button' onClick={handleConvert} id='btnConvert'>Convert</button>
      <span  hidden={!shn2Eng}>
        <input type='checkbox' value={excludeTones} checked={excludeTones} onClick={() => setExcludeTones(!excludeTones)} /> Exclude Tone Marks
      </span>

      <br/>
      <br/>

      <textarea name='input' value={outputText} readOnly />
    </div>
  );
}

export default App;
