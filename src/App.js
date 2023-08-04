import './App.css';

import { useState } from 'react';

import usePasswordGenerator from './Components/usePasswordGenerator';
import StrengthStatus from './Components/StrengthStatus';




//container
//header
//copy button
//charaterlength and number
//length-bar
//4 checkboxs with text's
//generate pasword button
function App() {

  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { Name: "IncludeUpperCase", state: true },
    { Name: "IncludeLowerCase", state: true },
    { Name: "IncludeNumbers", state: true },
    { Name: "IncludeSymbols", state: true }]);

const [cpyBtn,setCpyBtn]=useState(true);

const [strengthValue,setStrengthValue] = useState('');


 const changecheckbox = (element) => {
    console.log(element);
   const updatedCheckBoxData= checkBoxData.map((e) => {
      if (e.Name === element.Name) {

  return {...e,state:!element.state}


      }
  
      return e
    });

    setCheckBoxData(updatedCheckBoxData);
  }
  const { password, generatePassword } = usePasswordGenerator();


  const copydata=()=>{

    navigator.clipboard.writeText(password);
    setCpyBtn(true);
    setTimeout(()=>{
      alert("password is copied to clipboard,if you want click again generate password");
      setCpyBtn(false);
    },1000)
    
  };

  const changedatalength=(e)=>{
    setLength(e.target.value);
   
  }
  return (

    <div className="Conatiner">
      <div className="Header">
        <h2>{password}</h2>
     <button onClick={copydata}>{cpyBtn ? "copied" : "copy"}</button> 
           </div>

      <div className="CharLength">
        <h3>Character Length</h3>
        <span>{length}</span>
      </div>
      <div className="CharLengthBar">

        <input type="range" min="4" max="20" value={length} onChange={changedatalength} />

      </div>
      <div className="Checkboxwithtext">

        {checkBoxData.map((element, index) => {

          return (

            <>
              <li key={index}> <input type="checkbox" name={element}  onChange={() => changecheckbox(element)} />{element.Name}</li>
            </>
          )
        })}
      </div>
      <div className='StrengthStatus'>
<h3>Strength</h3>
<h3 className="StrengthStatus">{strengthValue}   <StrengthStatus length={length} strengthValue={strengthValue} setStrengthValue={setStrengthValue} /></h3>
      </div>
      <div className="GeneratePasswordBtn">
        <button onClick={() => generatePassword(length, checkBoxData)}>Generate Password</button>
      </div>
    
    </div>
    
  );
}

export default App;
