import './App.css';


//container
//header
//copy button
//charaterlength and number
//length-bar
//4 checkboxs with text's
//generate pasword button
function App() {

  const checkboxdata = [{ Name: "UpperCase", state: false },
  { Name: "LowerCase", state: false },
  { Name: "UpperandNumberCase", state: false },
  { Name: "LowerandNumberCase", state: false }];

  return (
    <div className="Conatiner">
      <div className="Header">
        <h2>headertext</h2>
        <button>Copy</button>
      </div>

      <div className="CharLength">
        <h3>Character Length</h3>
        <span>number</span>
      </div>
      <div className="CharLengthBar">

        <input type="range" />

      </div>
      <div className="Checkboxwithtext">

        {checkboxdata.map((element, index) => {

          return (

            <div>
              <li key={index}> <input type="checkbox" value={element.state} />{element.Name}</li>
            </div>
          )
        })}
      </div>
      <div className="GeneratePasswordBtn">
        <button>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
