import React, { useState } from "react";
import data from "./Data";

function App(){
  
  const [state1, stateset1] = useState[0];

  function valueadd(val1,val2){

    let val =val1+val2;
    stateset1(val);
    return val;
    
    
  }
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  function calculate(inputValue,state1){

    return inputValue+state1;
  }
  
  return(
     <>
    <h1>Web tables</h1>
    <table style={{border: "1px solid black", width:"50%"}}>
      <tr >
     <th>Label</th>
     <th>value</th>
     <th>Input</th>
     <th>Allocation%</th>
     <th>Allocation Val</th>
     <th>variance%</th>
     </tr>
     <tr>
      <td>Electronics</td>
      <td>{valueadd(data[0].children[0].value , data[0].children[1].value)}</td>
      <td> <input type="text" value={inputValue} onChange={handleInputChange} /></td>
      <td><button onClick={calculate()}>calculate%</button></td>
      <td><button onClick={calculate()}>calculate Val</button></td>
      </tr> 
      <tr>
      <td>Phones</td>
      <td>{data[0].children[0].value}</td>
      <td> <input type="text" value={inputValue} onChange={handleInputChange} /></td>
      <td><button onClick={calculate(inputValue,state1)} >calculate%</button></td>
      <td><button onClick={calculate()}>calculate Val</button></td>
      <td></td>
      </tr>

      <tr>
      <td>Laptops</td>
      <td>{data[0].children[1].value}</td>
      <td> <input type="text" value={inputValue} onChange={handleInputChange} /></td>
      <td><button onClick={calculate()}>calculate%</button></td>
      <td><button onClick={calculate()}>calculate Val</button></td>
      <td></td>
      </tr>

      <tr>
      <td>Furniture</td>
      <td>{valueadd(data[1].children[0].value , data[1].children[1].value)}</td>
      <td> <input type="text" value={inputValue} onChange={handleInputChange} /></td>
      <td><button onClick={calculate()}>calculate%</button></td>
      <td><button onClick={calculate()}>calculate Val</button></td>
      <td></td>
      </tr>

      <tr>
      <td> Tables</td>
      <td>{data[1].children[0].value}</td>
      <td> <input type="text" value={inputValue} onChange={handleInputChange} /></td>
      <td><button onClick={calculate()}>calculate%</button></td>
      <td><button onClick={calculate()}>calculate Val</button></td>
      <td></td>
      </tr>

      <tr>
      <td> Chairs</td>
      <td>{data[1].children[1].value}</td>
      <td> <input type="text" value={inputValue} onChange={handleInputChange} /></td>
      <td><button onClick={calculate()}>calculate%</button></td>
      <td><button onClick={calculate()}>calculate Val</button></td>
      <td></td>
      </tr>
      </table>
  </> 
  )
}
export default App
